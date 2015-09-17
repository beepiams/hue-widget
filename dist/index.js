"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _handlers = require("./handlers");

var _handlers2 = _interopRequireDefault(_handlers);

var _libBootstrap = require("./lib/Bootstrap");

var _libBootstrap2 = _interopRequireDefault(_libBootstrap);

/*
Feel free to Extend Bootstrap with new elements.
*/

var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResults = function displayResults(result) {
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
    state = lightState.create().turnOff().transition(3000);

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

var WidgetBootstrap = (function (_Bootstrap) {
  _inherits(WidgetBootstrap, _Bootstrap);

  function WidgetBootstrap() {
    _classCallCheck(this, WidgetBootstrap);

    _get(Object.getPrototypeOf(WidgetBootstrap.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(WidgetBootstrap, [{
    key: "handler",
    value: function handler(message) {
      _get(Object.getPrototypeOf(WidgetBootstrap.prototype), "handler", this).call(this, message);

      if (_handlers2["default"].hasOwnProperty(message)) {

        // console.log(Handlers[message]);

        api.activateScene(_handlers2["default"][message]).then(displayResults).done();

        // Handlers[message]();
        //  lightState.create().alert("select").longAlert()
      }
    }
  }]);

  return WidgetBootstrap;
})(_libBootstrap2["default"]);

exports["default"] = WidgetBootstrap;
module.exports = exports["default"];