(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var a = 1000;

function t () {
  return a;
}

// import $ from "jquery";

var a$1 = t();

console.log(a$1);
$(document).ready(function () {
  console.log("ready......");
});

$(window).on("load", function () {
  console.log("loaded......");
});

})));
//# sourceMappingURL=index.js.map
