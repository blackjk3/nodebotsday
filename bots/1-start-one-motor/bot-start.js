var five = require('johnny-five');
var Spark = require("particle-io");

// Setup a new board of type "spark"
var board = new five.Board({
  io: new Spark({
    deviceId: process.env.SPARK_DEVICE_ID, // CHANGE ME
    token: process.env.SPARK_TOKEN // CHANGE ME
  })
});

// Wait for the board to become ready to accept commands.
board.on("ready", function() {

  console.log("Welcome to Nodebots Day! *************************************");
  console.log("You should have a simple motor that rotates forever.");

  // Setup a new servo on pin D0, with type continuous
  var wheel = new five.Servo({
    pin: "D0",
    type: "continuous"
  });

  // Spin motor clockwise
  wheel.cw();
});