# Continuous Integration (CI/CD) with GitHub Actions

![image](https://github.com/user-attachments/assets/bb8ee3d5-3347-4bbd-b59f-2d2f5b38f362)


This repository uses GitHub Actions to automate the Continuous Integration (CI) and Continuous Deployment (CD) processes. The CI/CD workflow defined in this repository is designed to handle code integration and testing tasks in an automated manner.

## Workflow Overview

The GitHub Actions workflow file `.github/workflows/build.yml` defines the steps to be executed for each code push and allows manual triggers with customizable inputs. The workflow performs the following tasks:

1. **Triggering Events:**
   - **Push Events:** The workflow is triggered automatically on pushes to the `develop` and `master` branches, except when changes are made to workflow YAML files.
   - **Manual Triggers:** The workflow can also be triggered manually using the `workflow_dispatch` event, allowing for customization of Node.js version and whether to generate a test report.

2. **Job Definition:**
   The workflow includes a single job named `build` which runs on the `ubuntu-latest` runner. The job consists of several steps:

   - **Checkout Code:** Uses `actions/checkout` to check out the code from the repository.
   - **Set up Node.js:** Uses `actions/setup-node` to set up the Node.js environment based on the specified version.
   - **Install Dependencies:** Runs `npm install` to install project dependencies.
   - **Enable KVM:** Configures KVM (Kernel-based Virtual Machine) with specific rules and triggers.
   - **Run Android Emulator:** Uses `ReactiveCircus/android-emulator-runner` to run an Android emulator, install an APK, and execute Android tests.
   - **Generate Report:** Conditionally generates a test report if the `generate-report` input is set to 'yes'.
   - **Upload Test Report:** Conditionally uploads the test report artifact if the `generate-report` input is set to 'yes'.

## Customizing the Workflow

You can customize the workflow using the following inputs when manually triggering the workflow:

- **`node-version`**: Choose the version of Node.js to use. Available options are:
  - `16`
  - `18`
  - `20` (default)
  - `21`

- **`generate-report`**: Decide whether to generate and upload the test report. Available options are:
  - `yes`
  - `no` (default)

## Manual Trigger

To manually trigger the workflow with custom inputs, go to the Actions tab of this repository on GitHub, select the "CI/CD" workflow, and click on the "Run workflow" button. You'll be prompted to select the desired inputs before starting the workflow.

## Workflow File

The workflow is defined in `.github/workflows/build.yml`. Below is the content of the workflow file:

```yaml
name: CI/CD

on:  
  push:
    branches:
      - develop
      - master
    
    paths-ignore:
      - ".github/workflows/*.yml"
  workflow_dispatch:
    inputs:
      node-version:
        description: 'Version of Node.js to use'
        required: false
        default: '20'
        type: choice
        options:
          - '16'
          - '18'
          - '20'
          - '21'
      generate-report:
        description: 'Whether to generate and upload the test report'
        required: false
        default: 'no'
        type: choice
        options:
          - 'yes'
          - 'no'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ github.event.inputs.node-version }}

      - name: Install dependencies
        run: |
          npm install
          
      - name: Enable KVM
        run: |
          echo 'KERNEL=="kvm", GROUP="kvm", MODE="0666", OPTIONS+="static_node=kvm"' | sudo tee /etc/udev/rules.d/99-kvm4all.rules
          sudo udevadm control --reload-rules
          sudo udevadm trigger --name-match=kvm

      - name: Run Android Emulator
        uses: ReactiveCircus/android-emulator-runner@v2.32.0
        with:
          api-level: 31
          target: google_apis
          arch: x86_64
          profile: Nexus 6
          script: |
            adb install "apps/android/android.wdio.native.app.v1.0.8.apk"
            adb shell dumpsys package com.wdiodemoapp | grep -A 1 "MAIN"
            adb wait-for-device
            adb shell input keyevent 82
            npm run test.android

      - name: generate report
        if: ${{ github.event.inputs.generate-report == 'yes' }}
        run: npm run report

      - name: upload test report
        if: ${{ github.event.inputs.generate-report == 'yes' }}
        uses: actions/upload-artifact@v4  
        with:
          name: test-report
          path: |
            ./reports
```

[Execute](https://github.com/thiagotobiasturk/Appium-TS-Cucumber-Mobile/actions/workflows/build.yml)
