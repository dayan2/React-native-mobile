# React-native-cli

```shell
react-native init react_native_cli
```

To build the project:
```
react-native run-android
```

When you get this error(/dev/kvm permission denied):
```
sudo setfacl -m u:UserName:rwx /dev/kvm

sudo setfacl -m u:dayana:rwx /dev/kvm
```

If there is no local.properties file in the "android" folder you have to create it manually.

Inside it enter this line(for android):
```
sdk.dir = /Users/dayana/Library/Android/sdk
```


```
Go to Android studio -> SDK manager -> 
Go to Android SDK
select the checkbox in the bottom "show package details"
Find Android 6.0(Marshmallow)
select Google APIs checkbox and press OK
```

```
Go to AVD manager -> create any device with Marshmallow 
OS(API: 23). This is needed to start the app first time.
```

Finally,
```
react-native start
```

