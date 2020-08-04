#React Native Mobile
https://reactnavigation.org/docs

##### React native navigation setup:
```
npm install @react-navigation/native
```

##### Installing dependencies into a bare React Native project:
```
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Add this in index.js(If you skip this step, your app may crash in production even if it works fine in development)
```
import 'react-native-gesture-handler';
```

Installing the stack navigator library:
```
npm install @react-navigation/stack
```

##### Install Drawer navigation:
```
npm install @react-navigation/drawer
```

##### React native vector icons install:
```
npm install --save react-native-vector-icons
```

##### create Material Bottom Tab Navigator install:
```
npm install @react-navigation/material-bottom-tabs react-native-paper
```

##### For the Splash screen and SignIn
```
npm i react-native-linear-gradient --save
npm i react-native-animatable --save
npm i @react-native-community/async-storage
```

##### For the profile screen:
```
npm i reanimated-bottom-sheet
```

#####Installing react-native-image-crop-picker:
`
https://github.com/ivpusic/react-native-image-crop-picker
`

`npm i react-native-image-crop-picker`

######You need to enter these lines to 'build.gridle' file in Android folder:
```
maven { url 'https://maven.google.com' }
```

######There is a folder call 'app' inside android folder, open the build.gradle: Inside that find the object android, inside it there is another object called defaultConfig, paste this inside it:
```
vectorDrawables.useSupportLibrary = true
```
###### In app->src->main->AndroidManifest.xml: Add following lines:
```
<uses-permission android:name="android.permission.CAMERA"/>
<uses-feature android:name="android.hardware.camera" android:required="false" />
<uses-feature android:name="android.hardware.camera.front" android:required="false" />
```

##### Notifications screen:
```
npm install --save react-native-swipe-list-view
```

#####App Login deatils:
```
username: 'user',
password: 'password',
```

