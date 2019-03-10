"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _TopNav = _interopRequireDefault(require("../navigation/TopNav"));

var StandardLayout = function StandardLayout(_ref) {
  var children = _ref.children;
  return (0, _core.jsx)("div", null, (0, _core.jsx)(_TopNav.default, null), (0, _core.jsx)("div", null, children));
};

var _default = StandardLayout;
exports.default = _default;