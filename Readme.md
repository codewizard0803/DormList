# React Native Template

[![Moove It](https://circleci.com/gh/moove-it/react-native-template.svg?style=svg)](https://app.circleci.com/pipelines/github/moove-it/react-native-template?branch=master)

## Prerequisites

- [Node.js > 16](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
- [react-native-mmkv-storage](https://github.com/ammarahm-ed/react-native-mmkv-storage#readme) as storage 

### Option 1: Using DormList

You can start by cloning this repository and using [react-native-rename](https://github.com/jupiter83/DormList). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

Note: Please read the Setup environments section that is below in this file for more information about the execution scripts.

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file. Keep in mind that if you are going to create new `envs` you have to define the script to build the project properly.

DEV: `npm android` or `yarn android`

PROD: `npx react-native start`

Modify the environment variables files in root folder (`.env.development`, `.env.production` and `.env.staging`)


#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

  Expand the "Build" tab on the left menu
  - Click "Pre-actions", and under the plus sign select "New Run Script Action"
  - Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.
- Also, you will need to select the executable for the new schema:

  Expand the "Run" tab on the left menu
  - Under the "Executable" dropdown select the ".app" you would like to use for that schema

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

