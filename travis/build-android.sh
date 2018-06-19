#!/bin/bash -v

set -e

# Build Ionic App for Android
cordova platform add android --nofetch

cordova build android
