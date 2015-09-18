/*
  Handlers based on timestamps
*/

//  api.activateScene(sceneId)
//  .then(displayResults)
// .done();

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Handlers = {
  "3.00": "node-hue-api-16", //DONE
  "10.00": "node-hue-api-13", //DONE

  //api-12. red-lanterns_36 //RED LANTERNS @:36
  //  lightState.create().on().bri(100).sat(255).hue(0)
  "36.00": "node-hue-api-12", //DONE
  //api-13. star-flower-flicker_138 //FLICKER STAR FLOWERS
  // lightState.create().on().bri(25).sat(100).hue(12750).transitionTime(20)
  "98.00": "node-hue-api-13", //DONE
  //api-14. red-pink-tree_148 //RED LANTERN TREE & @1:48&@1:54 PINK LIGHT OF ITS FLOWERS //
  "95.40": "node-hue-api-14", //DONE
  //api-15. shining-trees_202 //OPEN FOREST / SHINING TREES
  // lightState.create().on().brightness(255).transition(10000).rgb(0, 181, 24)
  "121.20": "node-hue-api-15", //DONE
  //api-11. trees-green-hum_211 //GREEN PULSE FOR THE HUMMMMMMMMMMM √
  // lightState.create().on().brightness(100).transition(3000).rgb(10, 79, 19)
  "126.60": "node-hue-api-11",
  //api-11. trees-green-hum_211 //GREEN PULSE FOR THE HUMMMMMMMMMMM √
  // lightState.create().on().brightness(100).transition(3000).rgb(10, 79, 19)
  "144.00": "node-hue-api-10",
  "139.80": "node-hue-api-9",
  // node-hue-api-18
  // lightState.create().turnOff().transition(3000)
  "196.67": "node-hue-api-18",
  "199.80": "node-hue-api-10",
  //21. //api-12. red-lanterns_36 //RED LANTERNS @3:40
  // lightState.create().on().bri(100).sat(255).hue(0)
  "204.00": "node-hue-api-12"

};

exports["default"] = Handlers;
module.exports = exports["default"];