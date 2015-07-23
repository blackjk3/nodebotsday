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

  // Motor API

  // start([speed)
  // Start the motor. `isOn` property set to |true|
  // Takes an optional parameter `speed` [0-255]
  // to define the motor speed if a PWM Pin is
  // used to connect the motor.
  motor.start();

  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.setRawMode(true);

  process.stdin.on('keypress', function(ch, key) {

      if (!key) return;

      if (key.name == 'q') {
        console.log('Quitting');
        process.exit();
      } else if (key.name == 'up') {
        motor.start();
      } else if (key.name == 'space') {
        motor.stop();
      }

  });

});