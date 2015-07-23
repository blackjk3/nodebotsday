var wiiController = require('wii-controller');
var wii = new wiiController();
var five = require('johnny-five');
var Spark = require("particle-io");

console.log('connecting...');

var board = new five.Board({
  io: new Spark({
    deviceId: process.env.SPARK_DEVICE_ID,
    token: process.env.SPARK_TOKEN
  })
});

board.on("ready", function() {
  console.log("Welcome to Nodebots Day! *************************************")
  console.log("Control the bot with wiimote arrow keys, and A button to stop.")

  var left_wheel = new five.Servo({
    pin: "D0",
    type: "continuous"
  }).stop();
  var right_wheel = new five.Servo({
    pin: "D1",
    type: "continuous"
  }).stop();

  wii.on("CWIID_BTN_1:press", function(key) {
    console.log('Stopping');
    left_wheel.stop();
    right_wheel.stop();
  });

  wii.on("CWIID_BTN_2:press", function(key) {
    console.log("CWIID_BTN_2 press");
  });

  wii.on("CWIID_BTN_HOME:press", function(key) {
    console.log("CWIID_BTN_HOME press");
  });

  wii.on("CWIID_BTN_UP:press", function(key) {
    console.log('Forward');
    left_wheel.ccw();
    right_wheel.cw();
  });

  wii.on("CWIID_BTN_DOWN:press", function(key) {
    console.log('Backward');
    left_wheel.cw();
    right_wheel.ccw();
  });

  wii.on("CWIID_BTN_LEFT:press", function(key) {
    console.log('Left');
    left_wheel.cw();
    right_wheel.cw();
  });

  wii.on("CWIID_BTN_RIGHT:press", function(key) {
    console.log('Right');
    left_wheel.ccw();
    right_wheel.ccw();
  });

  wii.on("CWIID_BTN_RIGHT:release", function(key) {
    console.log("CWIID_BTN_RIGHT release");
  });


  wii.on("CWIID_BTN_A:press", function(key) {
    console.log('Forward');
    left_wheel.ccw();
    right_wheel.cw();
  });


});
