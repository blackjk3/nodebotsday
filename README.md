# Nodebots Day
Your particle should be all flashed and ready to go.  However, you will need to setup a few things on the laptop you are coding with to get up and running.

## Installing Node

Before you set up your Particle, make sure you have a version of [Node JS](https://nodejs.org) installed on your computer! To check your version of node that is installed type the following at a command prompt:

```bash
$ node -v
```
and you should see the version as output

```bash
$ node -v
v0.12.4
```

Congratulations! You have node installed.

## Installing particle-cli
The particle command line tool is a utility that will help you configure your particle device.  Some of the features include connecting to the wifi, renaming your device, or listing the status of a device.

You can do this via npm:
```bash
npm install -g particle-cli
```

## Login to the particle cloud

Once you have the particle-cli tool installed, you need to login to the particle cloud.  To make things easier, the particle devices have been pre-flashed and setup to run under my account.

```bash
$  particle login
? Please enter your email address: blackjk@gmail.com
? Please enter your password: ************
> Successfully completed login!
```

## Setting up wifi
**Note: the devices should connect to the Nodebots wifi automatically.  If after 30 sec your particle is not "breathing cyan", then do the steps below.  Otherwise, ignore this step and move on.**

Time to plug in the device and connect to the wifi.  Connect the usb cable to the particle device and the main led light should start blinking.  When it "breathing cyan" the device is connected to wifi.  Most likely it will be blinking green.  This means it needs to be configured for the wifi.  Hold done the mode button until it blinks blue and then release.  The particle should now be in "listening mode" and you can run the setup command below to connect to the wifi.

```bash
$  particle setup
? Should I scan for nearby Wi-Fi networks? No
? SSID: Nodebot
? Security Type: WPA2 AES
? Wi-Fi Password: **********
...
Thanks! Wait while I save those credentials...
Done! Your device should now restart.
```
## Obtain the device id

Next you need to obtain the device_id of the particle you are working with.  

The id should be written on your bag, however if you want to look it up to copy and paste you can run "particle list" when your light on your device is "breathing cyan" and connected to the wifi.  Also on the bag should be a device name which will match up to one of the particles in the list.


```bash
$  particle list
ph1 [DEVICE_ID] (Photon) is offline
ph2 [DEVICE_ID] (Photon) is online
```

## Congratulations
You are now ready to begin.  Follow the your track below to get started.
- [Nodebots](nodebots.md)
- [Nodeboats](nodeboats.md)
- [Nodecopter](nodecopter.md)

If your particle is NOT working as intended there are some links here which might be helpful.
- [Connecting to your Particle Core](http://docs.particle.io/photon/connect/)
- [Particle Modes](http://docs.particle.io/photon/modes/)