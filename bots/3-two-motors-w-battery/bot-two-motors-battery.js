var five = require('johnny-five');
var Spark = require("particle-io");

// Setup a new board of type "spark"
var board = new five.Board({
  io: new Spark({
    deviceId: process.env.SPARK_DEVICE_ID,
    token: process.env.SPARK_TOKEN
  })
});

// Wait for the board to become ready to accept commands.
board.on("ready", function() {

  console.log("Welcome to Nodebots Day! *************************************");
  console.log("You should have two simple motors that rotate forever.");

  // Setup a new servo on pin D0, with type continuous
  var left_wheel = new five.Servo({
    pin: "D0",
    type: "continuous"
  });

  // Setup a new servo on pin D1, with type continuous
  var right_wheel = new five.Servo({
    pin: "D1",
    type: "continuous"
  });

  // Spin both motors clockwise
  left_wheel.cw();
  right_wheel.cw();
});