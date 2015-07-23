var wiiController = require('wii-controller');
var wii = new wiiController();

var RollingSpider = require("rolling-spider");
var yourDrone = new RollingSpider.createClient();
var flying = false;

console.log('connecting...');

yourDrone.connect(function() {
  console.log('connected!');

  yourDrone.setup(function() {
    console.log('setting up drone');
    yourDrone.flatTrim();
    yourDrone.startPing();
  });
});

wii.on("CWIID_BTN_1:press", function(key) {
  console.log("CWIID_BTN_1 press");
});

wii.on("CWIID_BTN_2:press", function(key) {
  console.log("CWIID_BTN_2 press");
});

wii.on("CWIID_BTN_HOME:press", function(key) {
  console.log("CWIID_BTN_HOME press");
});

wii.on("CWIID_BTN_LEFT:press", function(key) {
  console.log("CWIID_BTN_LEFT press (left)");
  yourDrone.left({ steps: 20 });
});

wii.on("CWIID_BTN_RIGHT:press", function(key) {
  console.log("CWIID_BTN_RIGHT press (right)");
  yourDrone.right({ steps: 20 });
});

wii.on("CWIID_BTN_RIGHT:release", function(key) {
  console.log("CWIID_BTN_RIGHT release");
});


wii.on("CWIID_BTN_A:press", function(key) {
  console.log("CWIID_BTN_A press");
  if(flying) {
    yourDrone.land();
    flying = false;
  } else {
    yourDrone.takeOff();
    flying = true;
  }
});

wii.on("move", function(position) {
  console.log("move", position);
});