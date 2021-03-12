/**************************************
List of assert methods - See  http://chaijs.com/api/assert/#method_assert
                        for the full list
fail(actual, expected, msg)
equal(a, b)
notEqual
isAbove     isAtLeast
isBelow     isAtMost
typeOf
isOk        strictEqual         deepEqual
isNotOk     strictNotEqual      deepNotEqual
isTrue      isNotTrue
isFalse     isNotFalse
isNull      isNaN           isNotNull       isNotNaN
exists      notExists
isUndefined isDefined
isFunction  isObject    isArray isString    isNumber
isBoolean
instanceOf
match       notMatch        <-- regular expressions
property    notProperty
propertyVal notPropertyVal
lengthOf
hasAnyKeys  hasAllKeys      containsAllKeys <!--- in objects
throws      doesNotThrow
closeTo     approximately
oneOf       <--- look in an array
changes     doesNotChange
increases   increasesBy     increasesButNotBy
decreases   decreasesBy     decreasesButNotBy
**************************************/
// Unit Testing with Mocha and Chai
//

const assert = require("chai").assert;
const R = require("../app");

describe("Field test for Killer Robot", function () {
  let num = 6;
  let str = "sldkjsaljdlsjlkjlsfjlsjlsajflkajl";

  it("Check num is numeric", function () {
    assert.isNumber(num);
  });

  it("Str is a string", function () {
    assert.isString(str);
  });

  it.skip("Str is boolean", function () {
    assert.isBoolean(str);
  });

  let robot = R;

  it("Check robot talks strings", function () {
    assert.isString(robot.talk(), "string");
  });

  it.skip("Check robot talks strings will be skipped", function () {
    assert.isString(robot.talk(), "string");
  });

  it("Check that robot uses allowed phrases", function () {
    for (let i = 0; i < 8; i++) {
      let phrase = robot.talk();
      assert.oneOf(phrase, robot.phrases);
    }
  });

  it("Make sure robot has ammo to fire", function () {
    for (let i = 0; i < 5; i++) {
      robot.fireCannon();
      assert.isAtLeast(robot.ammo, 0);
    }
  });
});
