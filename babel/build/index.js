"use strict";

function f1() {
  var n = 5;
  if (true) {
    var _n = 10;
    console.log(_n);
  }
  console.log(n);
}
f1();