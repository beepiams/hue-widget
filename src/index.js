import Handlers from "./handlers";
import Bootstrap from "./lib/Bootstrap";
/*
Feel free to Extend Bootstrap with new elements.
*/


var hue = require("node-hue-api"),
HueApi = hue.HueApi,
lightState = hue.lightState;


var displayResults = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

//Set Variables for bridge/
// var host = "172.24.246.88",
  var host = "172.24.252.93",
    username = "2c84e8b53a80702738d26b8113b8b353",
    sceneId = "node-hue-api-1",
    sceneName = "off_328",
    api = new HueApi(host, username),
    lightId = 1,
    state =   lightState.create().turnOff().transition(3000)
   ;




api.config().then(displayResults).done();
    console.log(api);
   //3. Set Scene
   //
  //  api.setSceneLightState(sceneId, lightId, state)
  //      .then(displayResults)
  //      .done();


//4. GO! Activate Scene
//
// api.activateScene(sceneId)
//    .then(displayResults)
//    .done();

  //  api.scenes()
  //      .then(displayResults)
  //      .done();

  //
  // api.createScene(lightId, sceneName)
  //     .then(displayResults)
  //     .done();

  // api.updateScene(sceneId, lightId, sceneName)
  //   .then(displayResults)
  //   .done();


//1. Get Scenes

    // api.getScenes()
    // .then(displayResults)
    // .done();

    // api.scene(sceneId)
    // .then(displayResults)
    // .done();

    //2. Light Status

    // api.lightStatus(2)
    //     .then(displayResults)
    //     .done();

 //
 // lightState.create().on().sat(256).colorLoop().rgb([32, 180, 24]).off();



class WidgetBootstrap extends Bootstrap {
  handler(message){
    super.handler(message);

    if (Handlers.hasOwnProperty(message)) {

// console.log(Handlers[message]);

      api.activateScene(Handlers[message])
         .then(displayResults)
         .done();


      // Handlers[message]();
      //  lightState.create().alert("select").longAlert()
    }
  }
}

export default WidgetBootstrap;
