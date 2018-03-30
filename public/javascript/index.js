import t from "./test";
// import $ from "jquery";

const a = t();

console.log(a);
$(document).ready(function () {
  console.log("ready......");
})

$(window).on("load", function () {
  console.log("loaded......")
})
