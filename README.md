# R10 project

## Description

R10 is a cross platform(Android and IOS) mobile application built using react native. Its about a made up upcoming developer conference where the user can see the schedule for the individual sessions within the conference along with information regarding those sessions such as their locations, the topic they will cover and the speaker for the session.

## Screenshots

Below are the screenshots taken from IOS simulator.

### Schedule Screen

![R10 App](./screenshots/screenshot-1.png| width=504)

### Session Screen

![R10 App](./screenshots/screenshot-2.png| width=504)

### Speaker Modal

![R10 App](./screenshots/screenshot-3.png| width=504)

### Map Screen

![R10 App](./screenshots/screenshot-4.png| width=504)

### About Screen

![R10 App](./screenshots/screenshot-5.png| width=504)

## Installation

- Make sure to have Node and Homebrew Installed.
- Run the command 'brew install watchman' in your terminal.
- Run the command 'npm install -g react-native-cli' in your terminal.
- Clone repo or download as a zip file.
- Run yarn in root directory.
- To run the app on a emulator/simulator follow the steps described below.

### IOS Simulator

- Install Xcode.
- After installing start xcode and accept terms and conditions agreement.
- Run the command 'xcode-select --install' in your terminal.
- Go the the project root directory in your terminal and run the command 'react-native run-ios'.
- Wait for it to build and enjoy.

### Android Emulator

- Ensure you have JDK 8 installed on your computer.
- Set the following variable in your .bash_profile: export JAVA_HOME="/Library/Java/JavaVirtualMachines/[JDK VERSION HERE]/Contents/Home".
- run the command 'source \$HOME/.bash_profile' in your terminal.
- Install and run Android Studio. Follow the instructions as described in the 'install android studio' section in the link: https://facebook.github.io/react-native/docs/getting-started.html#preparing-the-android-device.
- Start the emulator and then run the command 'react-native run-android' in the project root directory.

## Technologies Used

- React Native
- RN Packager Server
- Async Storage
- GraphQL
- React Native Debugger
- Google Maps API

## Built With

- VS Code
- XCode
- Android Studio

## Author

Emre Kaynak (LinkedIn: www.linkedin.com/in/emre-kaynak-1381a6168)

## Personal Experience

This was my first time using react native to build a mobile application. Utilizing the knowledge that I have of react and javascript, I have manage to build an application that can run on both IOS and Android devices. I can see how using a framework, where most of the code is shared and I do not have to do a lot of environment specific coding can be useful to build a cross platform application such as R10.
