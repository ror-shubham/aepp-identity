#!/bin/bash -v

set -e

# Build Ionic App for iOS
cordova platform add ios --nofetch

cordova build ios
