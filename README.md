# GithubUserSearch

## Overview
GithubUserSearch is a React Native mobile application that allows users to search for GitHub profiles. This project is built with the following technologies:
- React Native
- TypeScript
- TanStack React Query

## Table of Contents
1. [Setting Up the Development Environment](#setting-up-the-development-environment)
    - [Android](#android)
    - [iOS](#ios)
2. [Running the Application](#running-the-application)
    - [Metro Server](#metro-server)
3. [Available Scripts](#available-scripts)
4. [Project Structure](#project-structure)
5. [Technologies Used](#technologies-used)

## Setting Up the Development Environment

### Android

1. **Node 21 or Newer**
    - Check your installed node version by running `node -v`.
    - **Linux**: Follow the installation instructions to install Node 21 or newer.
    - **Windows**: Download and install the latest version of Node [here](https://nodejs.org/).
    - **MacOS**: If you don't have Homebrew installed, visit the [Homebrew installation page](https://brew.sh/). Run the following commands to install Node and Watchman:
      ```sh
      brew install node
      brew install watchman
      ```

    Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

2. **Java Development Kit 17**
    - If you already have a JDK on your system, we recommend JDK 17. You may encounter problems using higher JDK versions.
    - **Linux & Windows**: Download and install Oracle JDK 17.
    - **MacOS**: We recommend installing the OpenJDK distribution called Azul Zulu using Homebrew. Run the following commands in a Terminal after installing Homebrew:
      ```sh
      brew tap homebrew/cask-versions
      brew install --cask zulu11
      ```

    The Zulu OpenJDK distribution offers JDKs for both Intel and M1 Macs. This will make sure your builds are faster on M1 Macs compared to using an Intel-based JDK.

3. **Android Development Environment**
    - If you have Android Studio with Android 12 (S) SDK already set up, you can skip the following steps.

3.1 **Install Android Studio**
    - Download and install Android Studio. During the installation wizard, make sure the boxes next to all of the following items are checked:
        - Android SDK
        - Android SDK Platform
        - Android Virtual Device
        - **Windows**: If you are not already using Hyper-V, enable Performance (Intel ® HAXM) (See [here](https://developer.android.com/studio/run/emulator-acceleration) for AMD or Hyper-V).

3.2 **Install the Android SDK**
    - Building a React Native app requires Android 12 (S) SDK. Open Android Studio, click on "More Actions" and select "SDK Manager". The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.
    - Select the "SDK Platforms" tab, then check the box next to "Show Package Details". Expand the Android 12 (S) entry and make sure the following items are checked:
        - Android SDK Platform 31
        - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image
    - Next, select the "SDK Tools" tab and check the box next to "Show Package Details". Expand the Android SDK Build-Tools entry and make sure that 31.0.0 is selected.
    - Click "Apply" to download and install the Android SDK and related build tools.

3.3 **Configure the ANDROID_HOME Environment Variable**
    - **Linux & MacOS**: Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (for zsh: `~/.zprofile` or `~/.zshrc`):
      ```sh
      export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
      export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
      export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
      ```
      Type `source $HOME/.bash_profile` for bash or `source $HOME/.zprofile` to load the config into your current shell. Verify that `ANDROID_HOME` has been set by running `echo $ANDROID_HOME` and the appropriate directories have been added to your path by running `echo $PATH`.

## iOS (Mac Only)

1. **Install Xcode (version 15 or newer) via the Mac App Store**
2. **Command Line Tools**
    - Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

3. **Installing an iOS Simulator in Xcode**
    - To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

4. **Install Library Dependencies with CocoaPods**
    - Navigate to the `ios` directory and run:
      ```sh
      pod install
      ```

## Running the Application

1. **Install React Native CLI globally**
    ```sh
    yarn install -g react-native-cli
    react-native --version  //to ensure that the installation process was a success
    ```

2. **Clone the Repository**
    ```sh
    git clone 
    ```

3. **Switch to the Repo Folder**
    ```sh
    cd 
    ```

4. **Install All Dependencies and Packages**
    ```sh
    yarn install
    ```

    If you have permissions issues, try running `sudo yarn install` (for MacOS & Linux) or open terminal as an administrator (for Windows).

5. **Install iOS Dependencies**
    ```sh
    cd ios
    pod install
    ```

6. **Running React Native Application**
    - Connect a physical device via USB (make sure to enable USB Debugging) or run an emulator (via Android Studio or Xcode).
    - For Android, run `adb devices` to get the list of attached devices.
    ```sh
    react-native run-android  //to run application on android device
    react-native run-ios  //to run application on ios device
    ```

## Running the Application

1. **Clone the Repository**
    ```sh
    git clone <repository-url>
    cd GithubUserSearch
    ```
2. **Install Dependencies**
    ```sh
    npm install
    ```
3. **Running Metro Server**
    ```sh
    npm start
    ```
4. **Running the Application**
    ```sh
    npm android  # Run on Android
    npm ios      # Run on iOS
    ```

## Metro Server
Metro is the JavaScript bundler used by React Native. Start it with:
```sh
npm start
```
Press `r` to reload and `d` to open the developer menu.

## Available Scripts

| Script                   | Description |
|--------------------------|-------------------------------------|
| `npm install`            | Install dependencies |
| `npm pods`               | Install CocoaPods |
| `npm start`              | Start Metro server |
| `npm ios`                | Run app on iOS |
| `npm android`            | Run app on Android |
| `npm lint`               | Lint code with ESLint |
| `npm test`               | Run unit tests |
| `detox:build:ios`        | Build the Detox tests for iOS |
| `detox:test:ios`         | Run Detox end-to-end tests on iOS |
| `detox:build:android`    | Build the Detox tests for Android |
| `detox:test:android`     | Run Detox end-to-end tests on Android |

## Project Structure

```
GithubUserSearch
│── __mocks__              # Mocking modules for testing
│── __tests__              # Unit & integration test files (Jest)
│── android                # Android-specific project files
│── e2e                    # End-to-end (E2E) test files (Detox)
│── ios                    # iOS-specific project files
│── jest                   # Jest configuration and setup files
│── node_modules           # Installed npm dependencies
│── src                    # Source code of the application
│   ├── api                # API service handlers (fetching data)
│   ├── assets/appIcons    # Application icons and images
│   ├── components         # Reusable UI components (Buttons, Inputs, Icons, etc.)
│   ├── constants          # Constant values used throughout the app
│   ├── localization       # Internationalization (i18n) setup
│   │   ├── en.json        # English translations
│   │   ├── i18n.ts        # i18next configuration
│   ├── navigation         # React Navigation setup
│   │   ├── AppNavigator.tsx # Main app navigator
│   ├── screens            # Contains all the screens in the app (e.g., Home, Menu, Profile)
│   │   ├── homeScreen     # Home screen directory
│   │   │   ├── HomeScreen.tsx   # Home screen component
│   │   │   ├── HomeScreen.style.ts # Home screen styles
│   ├── types              # TypeScript type definitions
│   │   ├── common.types.ts  # Commonly used types
│   │   ├── gitHubUser.types.ts  # GitHub user-specific types
│   │   ├── routes.types.ts  # Navigation-related types
│   ├── utils              # Utility functions for the app
│   │   ├── normalize.util.ts  # Function to normalize UI element sizes for different screen resolutions
│── vendor                 # External dependencies or manually added libraries
│── test-utils             # Utility functions for testing (Jest & Detox)
│   ├── jest/              # Jest test utilities
│   │   ├── testUtils.ts   # Shared Jest utility functions
│   ├── e2e/               # Detox E2E test utilities
│   │   ├── e2eUtils.ts    # Shared Detox utility functions
│── .detoxrc.js            # Detox configuration file
│── .eslintignore          # Specifies files and directories to be ignored by ESLint
│── .eslintrc.js           # ESLint configuration file
│── .gitignore             # Git ignored files and folders
│── .prettierrc.js         # Prettier formatting rules
│── .watchmanconfig        # Watchman configuration (used by Metro)
│── app.json               # React Native app configuration
│── App.tsx                # Entry point of the application
│── babel.config.js        # Babel configuration
│── declarations.d.ts      # Global TypeScript declarations
│── Gemfile                # Ruby dependencies (for iOS)
│── Gemfile.lock           # Lockfile for Ruby dependencies
│── index.js               # Main entry point for the app
│── jest.config.js         # Jest testing configuration
│── metro.config.js        # Metro bundler configuration
│── package.json           # Project metadata and dependencies
│── package-lock.json      # Lockfile for npm dependencies
│── README.md              # Documentation for the project
│── tsconfig.json          # TypeScript configuration
```

## Technologies Used
The project uses a range of modern technologies for an optimized development experience:

Core Technologies
	•	React Native - Framework for building mobile apps
	•	TypeScript - Static type-checking
	•	React Navigation - Navigation between screens
	•	TanStack React Query - API fetching and caching

UI & Performance
	•	React Native Gesture Handler - Enhances touch interactions
	•	React Native Reanimated - Smooth animations
	•	React Native Screens - Optimized screen rendering
	•	React Native Safe Area Context - Handle safe areas (notches, etc.)
	•	React Native SVG - SVG rendering support

State & Data Management
	•	React Query - Fetch and cache data efficiently
	•	Async Storage - Persistent key-value storage

Internationalization & Accessibility
	•	i18next - Internationalization framework
	•	React-i18next - React wrapper for i18next

Development & Code Quality
	•	TypeScript - Strongly typed JavaScript
	•	ESLint - Code linting
	•	Prettier - Code formatting

Testing
	•	Jest - Unit and integration testing
	•	Testing Library (React Native) - UI testing utilities
	•	Detox - End-to-end (E2E) testing framework
