/*
  Handlers based on timestamps
*/

//  api.activateScene(sceneId)
//  .then(displayResults)
// .done();

// node-hue-api-13: beautiful warm light
// node-hue-api-14: lightState.create().on().bri(255).sat(255).rgb(224, 64, 122).transitionTime(200)

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Handlers = {
  "3.00": "node-hue-api-1", //DONE

  "13.00": "node-hue-api-18",
  "22.00": "node-hue-api-11", //DONE

  //api-12. red-lanterns_36 //RED LANTERNS @:36
  //  lightState.create().on().bri(100).sat(255).hue(0)
  "31.00": "node-hue-api-12", //DONE
  //api-13. star-flower-flicker_138 //FLICKER STAR FLOWERS
  // lightState.create().on().bri(25).sat(100).hue(12750).transitionTime(20)
  "45.00": "node-hue-api-3",
  "68.00": "node-hue-api-5",
  "70.00": "node-hue-api-8",
  "90.40": "node-hue-api-14", //DONE PINK AND PURPLE
  "95.00": "node-hue-api-13", //DONE
  //api-14. red-pink-tree_148 //RED LANTERN TREE & @1:48&@1:54 PINK LIGHT OF ITS FLOWERS //
  //api-15. shining-trees_202 //OPEN FOREST / SHINING TREES
  // lightState.create().on().brightness(255).transition(10000).rgb(0, 181, 24)
  "108.00": "node-hue-api-15", //DONE
  //api-11. trees-green-hum_211 //GREEN PULSE FOR THE HUMMMMMMMMMMM √
  // lightState.create().on().brightness(100).transition(3000).rgb(10, 79, 19)
  "126.60": "node-hue-api-11",
  //api-11. trees-green-hum_211 //GREEN PULSE FOR THE HUMMMMMMMMMMM √
  // lightState.create().on().brightness(100).transition(3000).rgb(10, 79, 19)
  // "13580": "node-hue-api-9", //HELL RED
  "142.00": "node-hue-api-10",
  "153.00": "node-hue-api-6", //YELLOW STUFF
  "187.00": "node-hue-api-18",
  // node-hue-api-18
  // lightState.create().turnOff().transition(3000)
  "194.67": "node-hue-api-18",
  "197.80": "node-hue-api-15", //PURPLE
  //21. //api-12. red-lanterns_36 //RED LANTERNS @3:40
  // lightState.create().on().bri(100).sat(255).hue(0)

  "20400": "node-hue-api-12",
  "300.00": "node-hue-api-10"

};

exports["default"] = Handlers;
module.exports = exports["default"];