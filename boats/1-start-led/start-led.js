var five = require("johnny-five");
var Spark = require("particle-io");
var board = new five.Board({
  io: new Spark({
    deviceId: process.env.SPARK_DEVICE_ID,
    token: process.env.SPARK_TOKEN
  })
});

board.on("ready", function() {
  var led = new five.Led("D7");
  led.blink(500);
});