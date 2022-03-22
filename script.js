"use strict";
function deepCopy(object) {
  var newObject;
  if (!(object instanceof Object)) {
    return object;
  }
  if (object instanceof Array) {
    newObject = [];
    for (var elem of object) {
      newObject.push(deepCopy(elem));
    }
  }
  else {
    newObject = {};
    for (var key in object) {
      newObject[key] = deepCopy(object[key]);
    }
  }
  return newObject;
}
var a1 = [5, { b1: 6, b2: 7 }, [33, 22], null, undefined, Number.NaN];
var a2 = deepCopy(a1);

var h1 = {
  a: 5,
  b: { b1: 6, b2: 7 },
  c: [33, 22],
  d: null,
  e: undefined,
  f: Number.NaN,
};
var h2 = deepCopy(h1);

var v1 = "sss";
var v2 = deepCopy(v1);

var z1 = null;
var z2 = deepCopy(z1);

var n1 = Number.NaN;
var n2 = deepCopy(n1);

function test(a1, a2, h1, h2, v1, v2, z1, z2, n1, n2) {

  var testSet = [
    !(h1 === h2),
    h1.a === h2.a,
    !(h1.b === h2.b),
    h1.b.b1 === h2.b.b1,
    !(h1.c === h2.c),
    h1.c[0] === h2.c[0],
    h1.d === h2.d,
    h1.e === h2.e,
    isNaN(h2.f),
    h2.c instanceof Array,
    !(a1 === a2),
    typeof a2 === typeof a1,
    a1[0] === a2[0],
    !(a1[1] === a2[1]),
    a1[1].b1 === a2[1].b1,
    !(a1[2] === a2[2]),
    a1[2][0] === a2[2][0],
    a1[3] === a2[3],
    a1[4] === a2[4],
    isNaN(a2[5]),
    a2[2] instanceof Array,
    typeof v2 === typeof v1,
    v1 === v2,
    typeof z2 === typeof z1,
    z1 === z2,
    typeof n2 === typeof n1, isNaN(n2),
  ];

  var countPassed = 0;
  var countFailed = 0;
  for (var answer of testSet) {
    if (answer == true) {
      countPassed++;
    } else countFailed++;
  }
  console.log(`Успешно пройдено: ${countPassed} тестов\nНе пройдено: ${countFailed} тестов`)

}

test(a1, a2, h1, h2, v1, v2, z1, z2, n1, n2);