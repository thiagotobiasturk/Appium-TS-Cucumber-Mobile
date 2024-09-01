# Continuous Integration (CI/CD) with GitHub Actions

![image](https://github.com/user-attachments/assets/bb8ee3d5-3347-4bbd-b59f-2d2f5b38f362)

![image](https://github.com/user-attachments/assets/843c2c5d-f42e-4f3c-9c68-e7a1fb4d1d81)


This repository uses GitHub Actions to automate Continuous Integration (CI) and Continuous Deployment (CD) processes. The workflow file `.github/workflows/build.yml` defines the steps for automated builds, testing, and reporting.

## Workflow Overview

The GitHub Actions workflow is triggered manually using the `workflow_dispatch` event. This allows you to customize the Node.js version and decide whether to generate and upload a test report.

![image](https://github.com/user-attachments/assets/731abbcc-469c-4311-95fb-670709b22b66)

### Workflow File

The workflow file is located at `.github/workflows/build.yml` and contains the following steps:

1. **Checkout Code:** Uses `actions/checkout@v4` to check out the code from the repository.
2. **Set up Node.js:** Uses `actions/setup-node@v3` to set up the Node.js environment based on the specified version.
3. **Install Dependencies:** Runs `npm install` to install the project's dependencies.
4. **Enable KVM:** Configures KVM (Kernel-based Virtual Machine) with specific rules and triggers.
5. **Run Android Emulator:** Uses `ReactiveCircus/android-emulator-runner@v2.32.0` to run an Android emulator, install an APK, and execute Android tests.
6. **Generate Report:** Conditionally generates a test report if the `generate-report` input is set to `'yes'`.
7. **Upload Test Report:** Conditionally uploads the test report artifact if the `generate-report` input is set to `'yes'`.

### Manual Trigger

You can manually trigger the workflow with custom inputs via GitHub's Actions tab. This allows you to choose the Node.js version and whether to generate and upload the test report.

### Inputs

- **`node-version`**: Choose the version of Node.js to use for the workflow.
  - **Options:** `16`, `18`, `20` (default), `21`

- **`generate-report`**: Choose whether to create and upload the test report.
  - **Options:** `yes`, `no` (default)

### Example Workflow File

Here is the content of the workflow file:

```yaml
name: CI/CD

on:      
  workflow_dispatch:
    inputs:
      node-version:
        description: 'Choose the Node.js version for the workflow'
        required: false
        default: '20'
        type: choice
        options:
          - '16'
          - '18'
          - '20'
          - '21'
      generate-report:
        description: 'Choose whether to create and upload the test report'
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
