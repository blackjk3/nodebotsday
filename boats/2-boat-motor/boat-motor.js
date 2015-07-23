var five = require("johnny-five");
var Spark = require("particle-io");
var motor;

var board = new five.Board({
  io: new Spark({
    deviceId: process.env.SPARK_DEVICE_ID,
    token: process.env.SPARK_TOKEN
  })
});

board.on("ready", function() {
  // Create a new `motor` hardware instance.
  motor = new five.Motor({
    pin: 'D0'
  });

  // Inject the `motor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    motor: motor
  });

  // Motor Event API

  // "start" events fire when the motor is started.
  motor.on("start", function() {
    console.log("start");

    // Demonstrate motor stop in 4 seconds
    board.wait(4000, function() {
      motor.stop();
    });
  });

  // "stop" events fire when the motor is stopped.
  motor.on("stop", function() {
    console.log("stop");
  });

  // Motor API

  // start([speed)
  // Start the motor. `isOn` property set to |true|
  // Takes an optional parameter `speed` [0-255]
  // to define the motor speed if a PWM Pin is
  // used to connect the motor.
  motor.start();

  // stop()
  // Stop the motor. `isOn` property set to |false|
});