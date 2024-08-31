# Appium-TS-Cucumber-Mobile

![download](https://github.com/user-attachments/assets/d8feda61-6a05-47b6-8705-b185913fa659)


## Description

This project is an automation framework designed for automated testing with Appium. It is built using Node.js and leverages Cucumber for behavior-driven development (BDD) and TypeScript for type safety and an enhanced developer experience.

The framework provides a robust solution for testing mobile applications by integrating Appium's powerful automation capabilities with Cucumber's readable syntax for defining test scenarios. TypeScript ensures that your code is less error-prone and easier to maintain.

### Platform Support

This framework is designed to run tests on both Android and iOS platforms. However, please note that this documentation does not cover the setup or creation of iOS emulators. For running tests on iOS, you should have an iOS emulator already configured and running on your machine.

## Requirements🧾 

Before you start, make sure you have the following requirements:

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed on your machine. You can check the installation with the command `node -v`.
- **Text Editor**: It is recommended to use [Visual Studio Code](https://code.visualstudio.com/) for a smoother development experience, though you can use any text editor of your choice.


## Installation 🖥️

Steps to install and set up your project. This may include prerequisites, dependencies, and installation commands.

```bash
# Clone the repository
git clone https://github.com/yourusername/qa-automation-api.git

# Navigate into the project directory
cd qa-automation-api

# Install dependencies
npm i  
```
## Android SDK and Java Setup

To use this framework for testing Android applications, you need to install and configure the Android SDK and Java Development Kit (JDK). Follow these steps:

### 1. Download and Install Android SDK

1. **Download Android Studio**: Visit the [Android Studio download page](https://developer.android.com/studio) and download the latest version of Android Studio for your operating system.
2. **Install Android Studio**: Run the installer and follow the prompts to complete the installation. Android Studio includes the Android SDK.

### 2. Configure Android SDK

1. **Open Android Studio**: Launch Android Studio after installation.
2. **Install SDK Components**:
   - Open **SDK Manager** by navigating to `Configure` > `SDK Manager` from the welcome screen or via `File` > `Settings` (or `Android Studio` > `Preferences` on macOS) > `Appearance & Behavior` > `System Settings` > `Android SDK`.
   - In the SDK Manager, ensure the following components are installed:
     - **Android SDK Platform-Tools**: Required for Android debugging.
     - **Android SDK Build-Tools**: Necessary for building and compiling your application.
     - **Android SDK**: Select the Android versions you wish to target.

### 3. Set Up Environment Variables

To ensure that the Android SDK tools and Java tools are available from the command line, you need to set up environment variables.

#### On Windows

1. **Locate SDK Path**: By default, the Android SDK is located at `C:\Users\<Your-Username>\AppData\Local\Android\Sdk`.
2. **Locate Java Path**: Install JDK and locate the path, e.g., `C:\Program Files\Java\jdk-<version>`.
3. **Set Environment Variables**:
   - Open the **Start Menu** and search for `Environment Variables`, then click on `Edit the system environment variables`.
   - Click on the **Environment Variables** button.
   - Under **System variables**, click **New** and add the following:
     - **Variable name**: `ANDROID_HOME`
     - **Variable value**: `C:\Users\<Your-Username>\AppData\Local\Android\Sdk`
     - **Variable name**: `JAVA_HOME`
     - **Variable value**: `C:\Program Files\Java\jdk-<version>`
   - Find the `Path` variable in the **System variables** section, click **Edit**, and add the following paths:
     - `C:\Users\<Your-Username>\AppData\Local\Android\Sdk\platform-tools`
     - `C:\Users\<Your-Username>\AppData\Local\Android\Sdk\tools`
     - `C:\Program Files\Java\jdk-<version>\bin`
   - Click **OK** to save the changes.

#### On macOS/Linux

1. **Locate SDK Path**: By default, the Android SDK is located at `~/Library/Android/sdk` on macOS or `~/Android/Sdk` on Linux.
2. **Locate Java Path**: Install JDK and locate the path, e.g., `/usr/lib/jvm/java-<version>`.
3. **Set Environment Variables**:
   - Open your terminal.
   - Add the following lines to your `.bashrc`, `.zshrc`, or `.profile` file (depending on your shell):
     ```bash
     export ANDROID_HOME=$HOME/Library/Android/sdk  # For macOS
     # or
     export ANDROID_HOME=$HOME/Android/Sdk  # For Linux

     export JAVA_HOME=/usr/lib/jvm/java-<version>

     export PATH=$PATH:$ANDROID_HOME/platform-tools
     export PATH=$PATH:$ANDROID_HOME/tools
     export PATH=$PATH:$JAVA_HOME/bin
     ```
   - Save the file and run `source ~/.bashrc`, `source ~/.zshrc`, or `source ~/.profile` to apply the changes.

### 4. Verify Installation

Open a new terminal or command prompt and run the following commands to verify the installation:

```bash
# Check adb (Android Debug Bridge) version
adb version

# Check Java version
java -version

# Check javac (Java Compiler) version
javac -version

# Run Appium Doctor to check your setup
appium-doctor --android
```
![image](https://github.com/user-attachments/assets/b3ecddea-0e3d-4dad-918f-f8d28321cb66)

## How to Create an Emulator 📱

**1. Open the Android Studio app:**
   - Click on 'More Actions'
   - Click on 'Virtual Device Manager'

  ![image](https://github.com/user-attachments/assets/5863422c-f06a-4256-b4ed-f9d1e1df651a)

**2. Click on '+'**

![image](https://github.com/user-attachments/assets/52be8aa6-368c-4074-904c-342366edf8d3)

**3. Choose the device and Android version**

![image](https://github.com/user-attachments/assets/9e2fb40d-d4de-45e0-a5b1-bc13756214d4)

**4. Enter a name for the emulator and click on 'Finish'**

![image](https://github.com/user-attachments/assets/b48a67ad-f580-401c-bace-0e0e9692a5fd)

![image](https://github.com/user-attachments/assets/9083ed47-ffed-4e2e-8000-e7b7c8c90415)


**5.  To start the emulator, click on the 'Play' button**

![image](https://github.com/user-attachments/assets/2242df8e-a42c-4983-aa80-16a8c65c11b5)

**Result:**

![image](https://github.com/user-attachments/assets/97601dc2-ca2c-440e-bf31-341cc2b176d4)

# Writing Tests with Cucumber  ✏️

Welcome to the guide on writing tests using Cucumber! This document will help you understand the common types of steps and structures used in Cucumber to create effective and readable tests.

## Cucumber Basics

Cucumber is a tool that supports Behavior Driven Development (BDD). It allows you to write tests in plain language, which are then executed by your test automation framework. Cucumber tests are written in `.feature` files using Gherkin syntax.

### Types of Steps ### 
The `Given` step defines the initial context or state of the system before the action is performed. It sets up the preconditions for the scenario.

**Example:**
```gherkin
Given the user is on the login page
```
`When`
The When step describes the action or event that occurs in the scenario. It is the main part of the test where the behavior under test is triggered.

**Example:**
```gherkin
When the user enters valid credentials
```

`Then`
The Then step specifies the expected outcome or result after the action has been performed. It asserts that the system behaves as expected.

**Example:**
```gherkin
Then the user should be redirected to the dashboard
```

### Scenario Outlines ###
`Scenario Outline` allows you to run the same scenario with different sets of data. This is useful for testing various input combinations without duplicating scenarios.

**Example:**
```gherkin
Scenario Outline: User login with multiple credentials
  Given the user is on the login page
  When the user enters <username> and <password>
  Then the user should be redirected to the dashboard

  Examples:
    | username | password |
    | user1    | pass1    |
    | user2    | pass2    |
```

### Background ###
The `Background` section is used to define a common context for all scenarios in a feature file. It runs before each scenario, ensuring a consistent starting point.

**Example:**
```gherkin
Feature: User login

  Background:
    Given the user is on the login page

  Scenario: User logs in with valid credentials
    When the user enters valid credentials
    Then the user should be redirected to the dashboard

  Scenario: User logs in with invalid credentials
    When the user enters invalid credentials
    Then an error message should be displayed
```

### Regular Scenarios ###

Regular Scenario blocks are used to describe a single behavior of the system under test. Each scenario should be a complete example of a feature or functionality.

**Example:**
```gherkin

Scenario: User logs in with valid credentials
  Given the user is on the login page
  When the user enters valid credentials
  Then the user should be redirected to the dashboard

```


## Page Objects  ⌨️

`Page Objects` are a design pattern used to create a repository for the UI elements and actions associated with a particular page of your application. They help in abstracting and encapsulating the page's elements and behaviors, making your tests more readable and maintainable.

In this framework, the `Login` page object is defined as follows:

**`Login.page.ts`**
```typescript
class Login {
    get usernameInput() { return $('//android.widget.EditText[@text="Email"]'); }
    get passwordInput() { return $('//android.widget.EditText[@text="Password"]'); }
    get submitButton() { return $('(//android.widget.TextView[@text="Sign In"])[2]'); }
    get successMessage() { return $('//android.widget.ScrollView/android.view.ViewGroup'); }
    get unsuccessfulMessage() { return $('//android.widget.TextView[@text="Incorrect email or password."]'); }
    get open() { return $('//android.view.View'); }

    async openview() {
        await this.open;
    }

    async setUsername(username) { 
        await this.usernameInput.setValue(username);
    }

    async submitLoginForm() {
        await this.submitButton.click();
    }

    async setPassword(password) { 
        await this.passwordInput.setValue(password);
    }

    async loginsuccesfull() {
        await this.successMessage;
    }

    async loginunsuccessful() {
        await this.unsuccessfulMessage;
    }
}

export default new Login();
```

## Steps  ⌨️
The `steps` file defines the steps used in the scenarios of your feature files. Each step corresponds to a specific action or verification that is mapped to methods in the page object.

**`steps.ts`**
```typescript

import { Given, Then, When } from"@cucumber/cucumber";
import Loginfrom"../pageobjects/Login.page.js";

Given(/^I am on the login screen$/, async () => {
    await Login.openview();
});

When(/^I enter username "([^"]*)"$/, async (username) => {
    await Login.setUsername(username);
});

When(/^I tap the login button$/, async () => {
    await Login.submitLoginForm();
});

When(/^I enter password "([^"]*)"$/, async (password) => {
    await Login.setPassword(password);
});

Then(/^login is correct$/, async () => {
    awaitnewPromise(resolve =>setTimeout(resolve, 9000));
    await Login.loginsuccesfull();
});

Then(/^an error message is displayed$/, async () => {
    awaitnewPromise(resolve =>setTimeout(resolve, 9000));
    await Login.loginunsuccessful();
});
```
### Appium CLI (Command Line Interface) ⌨️

To install Appium using the command line interface (CLI), follow these steps:

1. **Install Appium**: Open your terminal or command prompt and run the following command to install Appium globally using npm (Node Package Manager):

   ```bash
   npm install -g appium
   ```

   ```bash
   appium --version
   ```
 
## Appium Desktop 🖥️

Appium Desktop is a graphical user interface for Appium. It provides a way to inspect your mobile app's UI and interact with it using a graphical interface. To install Appium Desktop:

1. **Download the Appium Desktop Installer:** Visit the Appium releases page on GitHub to download the latest version of the Appium Desktop for your operating system.

2. **Install Appium Desktop:** 

- For Windows: Run the .exe installer you downloaded and follow the on-screen instructions.
- For macOS: Open the .dmg file you downloaded and drag the Appium icon to your Applications folder.
- For Linux: Appium Desktop does not have a native Linux installer, but you can use Appium CLI for Linux-based systems.
3.**Launch Appium Desktop:** Once installed, you can open Appium Desktop from your applications menu or by running it from the command line, depending on your operating system.

4. **Configure and Start Server:** Use the Appium Desktop interface to configure and start the Appium server. You can set desired capabilities and start a new session from the GUI.

![image](https://github.com/user-attachments/assets/1eeb0a73-de1f-476b-9874-af95cb17a9ea)


## Appium Inspector 🔗

Appium Inspector is a tool that allows you to inspect your mobile app's user interface and interact with it using a graphical user interface (GUI). It's part of the Appium Desktop application and provides features for exploring your app's elements, generating automation scripts, and debugging.

#### Steps to Install Appium Inspector

1. **Download and Install Appium Desktop**:
   - **For Windows**: Visit the [Appium Desktop releases page](https://github.com/appium/appium-desktop/releases) and download the `.exe` installer. Run the installer and follow the instructions to complete the installation.
   - **For macOS**: Download the `.dmg` file from the same releases page. Open the `.dmg` file and drag the Appium icon to your Applications folder.
   - **For Linux**: Appium Desktop does not have a native Linux installer, but you can use the Appium CLI on Linux-based systems.

2. **Launch Appium Desktop**:
   Open Appium Desktop from your applications menu or by running it from the command line (if applicable).

3. **Start the Appium Server**:
   - Open Appium Desktop and click on the "Start Server" button to start the Appium server.

4. **Open Appium Inspector**:
   - Once the server is running, click on the "Start New Session" button in the Appium Desktop interface.
   - Configure the desired capabilities for your mobile app (such as platform name, device name, app path, etc.) in the session setup window.
   - Click on the "Start Session" button to launch Appium Inspector.

5. **Inspect and Interact with Your App**:
   - Use the Inspector to explore your app's UI elements. You can view their properties, interact with them, and generate automation scripts based on your interactions.

#### Brief Explanation of Appium Inspector

Appium Inspector is a powerful tool that helps you analyze and interact with the user interface of your mobile applications. It allows you to:

- **Inspect UI Elements**: View the structure and properties of UI elements in your app, which is essential for writing accurate automation scripts.
- **Generate Automation Code**: Automatically generate code snippets based on your interactions with the app, which can help streamline the creation of automated test scripts.
- **Debug**: Identify and troubleshoot issues in your app's UI by interacting with elements and observing their behavior in real-time.

Appium Inspector provides a visual representation of your app's UI, making it easier to understand and interact with complex user interfaces.

For more details, you can refer to the [Appium Inspector documentation](https://github.com/appium/appium-desktop).

| Capability       | Type    | Example Value          |
|------------------|---------|------------------------|
| `platformName`   | text    | `Android`              |
| `platformVersion`| text    | `your-version`                 |
| `deviceName`     | text    | `emulator -5554 or your device name`              |
| `app`            | text    | `\path\to\your\qa-automation-api\apps\android\QA-3.3.5(306).apk`|
| `automationName` | text    | `UiAutomator2`         |
| `appPackage`     | text    | `com.fasterwaytofatloss.FasterWayToFatLoss`    |
| `appActivity`    | text    | `com.fasterwaytofatloss.FasterWayToFatLoss.MainActivity` |

![image](https://github.com/user-attachments/assets/6429a703-c515-4e79-92f1-6f60eeadae03)


### Using Appium Inspector

To use Appium Inspector, you need to start the Appium server. You can do this using either the command line (if you installed Appium via npm) or the desktop version. The port number must be the same in both cases. Once the server is running, you can launch Appium Inspector.

1. **Start the Appium Server**:
   - **Using the Command Line**: Open your terminal and run the following command to start the Appium server By default, it will use port 4723 :
 
     ```bash
     appium
     ```

   - **Using the Desktop Version**: Open Appium Desktop and click on the 'Start Server' button.


3. **Ensure the Port Number is the Same**: Make sure that the port number configured in Appium Desktop or the command line matches the one you use in Appium Inspector.

Appium Server 

![image](https://github.com/user-attachments/assets/bacaecdb-f500-48ca-9cf0-192644b9ff1c)

Appium Inspector

![image](https://github.com/user-attachments/assets/a75ea75c-6d8c-4446-b2d9-907299a3e1f0)


3. **Launch Appium Inspector**: Once the Appium server is up and running, you can open Appium Inspector. Enter the necessary Desired Capabilities and click on 'Start Session' to begin inspecting your app.

By following these steps, you will be able to use Appium Inspector to interact with and inspect your mobile application.

![image](https://github.com/user-attachments/assets/325d2cf3-38ae-46ca-b0a4-fede9b122e01)

### Configuring the Framework

After cloning the framework and installing the dependencies, follow these steps to configure it:

1. **Open the Terminal**: Make sure you are in the root directory of the cloned framework.

2. **Install Dependencies**: If you haven't already installed the necessary dependencies, do so by running:
   ```bash
   npm install
   ```
3. **Open the Project in Your Text Editor**: It is recommended to use Visual Studio Code for editing the framework files. Open Visual Studio Code from the terminal by running:
```bash
    code .
```

## Project Structure:

# Proyecto

Este proyecto es una aplicación de prueba automatizada que utiliza [WebdriverIO](https://webdriver.io/) para pruebas de UI. A continuación se detalla la estructura del proyecto.

## Estructura del Proyecto

```plaintext
│
├── .github
│   └── workflows
│       └── build.yml           # GitHub Actions configuration for CI/CD
│
├── apps
│   ├── android
│   │   └── QA-3.3.5(306).apk   # APK of the Android app for testing
│   └── ios
│       └── ...                 # Files related to the iOS app (empty at the moment)
│
├── config
│   ├── wdio.android.cucumber.conf.ts       # WebdriverIO configuration for Android with Cucumber
│   ├── wdio.ios.cucumber.conf.ts           # WebdriverIO configuration for iOS with Cucumber
│   ├── wdio.shared.conf.ts                 # Shared WebdriverIO configuration
│   └── wdio.shared.local.appium.conf.ts    # Shared local Appium configuration
│
├── logs
│   └── appium.log             # Logs generated by Appium during tests
│
├── reports
│   ├── screenshots
│   │   └── User_attempts_to_log_in.png  # Screenshot of a login attempt
│   ├── cucumber_report.html    # HTML report generated by Cucumber
│   └── cucumber_report.json    # JSON report generated by Cucumber
│
├── tests
│   ├── features
│   │   └── loginFasterApp.feature   # Cucumber feature file for login tests
│   ├── helpers
│   │   ├── Biometrics.ts          # Helpers for handling biometrics
│   │   ├── Constants.ts           # Definitions of constants used in tests
│   │   ├── Gestures.ts            # Definitions of gestures used in tests
│   │   ├── hooks.ts               # Cucumber hooks for setup and teardown before/after tests
│   │   ├── Utils.ts               # General utilities for tests
│   │   └── WebView.ts             # Helpers for handling web views
│   ├── pageobjects
│   │   └── Login.page.ts          # Page objects for the login page
│   ├── screenobjects
│   │   ├── components
│   │   │   ├── NativeAlert.ts    # Native components like alerts
│   │   │   ├── Picker.ts         # Selection components
│   │   ├── AndroidSettings.ts    # Android settings screen
│   │   ├── AppScreen.ts          # Base screen for the app
│   │   ├── DragScreen.ts         # Screen for drag tests
│   │   ├── FormsScreen.ts        # Screen for form tests
│   │   ├── HomeScreen.ts         # Home screen
│   │   ├── LoginScreen.ts        # Login screen
│   │   ├── SwipeScreen.ts        # Screen for swipe tests
│   │   └── WebviewScreen.ts      # Screen for web view tests
│   └── steps
│       └── login_faster_steps.ts   # Step definitions for login tests
│
├── .editorconfig           # Code style configuration
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore              # Files and directories to be ignored by Git
├── generateReport.js       # Script to generate reports
├── package-lock.json       # Dependency lock file to ensure consistent versions
├── package.json            # Project dependencies and scripts
├── README.md               # This file
└── tsconfig.json           # TypeScript configuration

```

**Navigate to the config Folder**:

1. **In Visual Studio Code, look for the File Explorer on the left side of the window**.

2. **Click on the config folder to expand it**.

3. **Open the Configuration File**:
Inside the expanded config folder, locate and click on the file named wdio.android.cucumber.conf.ts.

![image](https://github.com/user-attachments/assets/e9019753-8d3c-4318-8b63-0b51cd820873)

4.**Edit the Desired Capabilities**:

**Update the following fields with the data from your emulator**:

`appium:platformVersion`: Set this to the version of Android running on your emulator `(e.g., '12.0')`.

`appium:deviceName`: Set this to the name of your emulator `(e.g., 'Pixel_5')`.

![image](https://github.com/user-attachments/assets/40e81bde-9e9a-4160-9737-4489492ee254)

## Run Test  💻
To run the tests, use the following command:

**for android**
```bash
npm run test.android
```
**for ios**
```bash
npm run test.ios
```

**Note: When running the tests, ensure that the Appium server is turned off. The test framework configuration file will start the Appium server automatically**.

When you add a new feature to the project, follow these steps to ensure it is properly integrated with the testing framework:

## Updating Step Files

When adding a new step file for a feature, follow these steps:

1. **Add the Step File**

   Create a new step file in the `tests/steps` directory. Ensure that the file has a `.ts` extension and follows the appropriate format for your Cucumber steps.

2. **Update the Configuration File**

   You need to update the WebDriverIO configuration to include the new step file. This configuration file is located at `config/wdio.android.cucumber.conf.ts`.

   Open `config/wdio.android.cucumber.conf.ts` and locate the `cucumberOpts` configuration section. Within this section, you’ll find a property called `require` that specifies the step files Cucumber should load.

   ```typescript
   cucumberOpts: {
       require: [
           path.join(__dirname, '..', 'tests', 'steps', 'login_faster_steps.ts'),
                                                        // Add the new step file here
       ]
   }

## How to generate a test report  🗂️


run the command

```bash
npm run report
```

after the tests have completed.
