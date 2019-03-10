"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _TopNav = _interopRequireDefault(require("./TopNav.styles"));

var TopNav = function TopNav() {
  return (0, _core.jsx)("nav", {
    css: _TopNav.default
  }, "Hey");
};

var _default = TopNav;
exports.default = _default;