# app-center-codepush

1. Install the App Center CLI
You manage most of CodePush's functionality using the App Center CLI. To install the CLI, open a terminal window or command prompt and execute the following command:

shell

Copy
npm install -g appcenter-cli
 Note

If you find an EACCES error executing this command, you may have to fix npm permissions on your system. Many sites recommend using the sudo command to get around this error, but you should never install npm modules using sudo.

After successfully installing the App Center CLI, execute the appcenter login command to configure the CLI for your App Center account details.

2. CodePush-ify your app
Add the CodePush client SDK to your app, and configure it to pull app updates from one of your deployments in App Center. The following sections provide details on how to do this for the supported app platforms:

Apache Cordova
React Native
3. Release an app update
After making changes to your app’s code or assets, publish the update to App Center using the App Center CLI as described in the following sections.

React Native
Execute the App Center CLI release-react command to bundle your app's code and asset files, then publish them to the App Center server as a new release. For example:

shell

Copy
appcenter codepush release-react -a <ownerName>/MyApp
Cordova
Execute the App Center CLI release-cordova command to bundle your app's code and asset files, then publish them to the App Center server as a new release. For example:

shell

Copy
appcenter codepush release-cordova -a <ownerName>/MyApp

4. Run your app
Once these steps are complete, all users running your app will receive the update using the experience you configured in step #2. For more information, see the CLI and client SDK documentation (Apache Cordova, React Native).

Recommended content
Releasing CodePush updates using the App Center CLI - Visual Studio App Center
How to use and set up the App Center CLI to release CodePush updates
React Native SDK with CodePush API Reference - Visual Studio App Center
How to use to the React Native SDK with CodePush API
Tutorials - Visual Studio App Center
Tutorials to help you get started with using CodePush
