var RollingSpider = require("rolling-spider");
var temporal = require("temporal");

var yourDrone = new RollingSpider.createClient();

console.log('init');

yourDrone.connect(function() {
  console.log('connected');

  yourDrone.setup(function() {

    // NEW CODE
    temporal.queue([
      {
        delay: 0,
        task: function () {
          yourDrone.flatTrim();
          yourDrone.startPing();
          yourDrone.takeOff();
          console.log('take off');
        }
      },
      {
        delay: 3000,
        task: function () {
          console.log('land');
          yourDrone.land();
        }
      }]);
  });
});