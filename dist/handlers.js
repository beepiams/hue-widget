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
  "300": "node-hue-api-16",
  "1000": "node-hue-api-13",

  //api-12. red-lanterns_36 //RED LANTERNS @:36
  //  lightState.create().on().bri(100).sat(255).hue(0)
  "3600": "node-hue-api-12",
  //api-13. star-flower-flicker_138 //FLICKER STAR FLOWERS
  // lightState.create().on().bri(25).sat(100).hue(12750).transitionTime(20)
  "13800": "node-hue-api-13",
  //api-14. red-pink-tree_148 //RED LANTERN TREE & @1:48&@1:54 PINK LIGHT OF ITS FLOWERS
  "15400": "node-hue-api-14",
  //api-15. shining-trees_202 //OPEN FOREST / SHINING TREES
  // lightState.create().on().brightness(255).transition(10000).rgb(0, 181, 24)
  "20200": "node-hue-api-15",
  //api-11. trees-green-hum_211 //GREEN PULSE FOR THE HUMMMMMMMMMMM √
  // lightState.create().on().brightness(100).transition(3000).rgb(10, 79, 19)
  "21100": "node-hue-api-11",
  //api-11. trees-green-hum_211 //GREEN PULSE FOR THE HUMMMMMMMMMMM √
  // lightState.create().on().brightness(100).transition(3000).rgb(10, 79, 19)
  "22400": "node-hue-api-10",
  "23300": "node-hue-api-9",
  // node-hue-api-18
  // lightState.create().turnOff().transition(3000)
  "32800": "node-hue-api-18",
  "33300": "node-hue-api-10",
  //21. //api-12. red-lanterns_36 //RED LANTERNS @3:40
  // lightState.create().on().bri(100).sat(255).hue(0)
  "34000": "node-hue-api-12"

};

exports["default"] = Handlers;
module.exports = exports["default"];