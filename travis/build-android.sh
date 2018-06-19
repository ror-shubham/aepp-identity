#!/bin/bash -v

set -e

npm run build

cordova platform rm android
cordova platform add android

# Build Ionic App for Android
# cordova platform add android --nofetch

cordova build android
