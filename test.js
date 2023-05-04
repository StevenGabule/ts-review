"use strict";
let a = 5;
let b = 'asd';
let c = true;
let d = '123';
function test(a) {
    return '2';
}
const test2 = (a) => {
    return 'red';
};
const cdPoint = (point) => {
    const dPoint = point;
};
function print(coord) { }
let c1 = 'test';
let c2 = 'up';
c2 = 'down';
function performAction(action) {
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}
class PointOne {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    a() { }
}
class D3PointOne extends PointOne {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    a(name) { }
}
const pointOne = new PointOne(0, 0);
const D3pointOne = new D3PointOne(0, 0, 0);
class StaticTest {
    static test() { }
}
StaticTest.c = 'test';
const st = StaticTest.test();
const st1 = StaticTest.c;
class Test3 {
    myMethod() { }
}
class Test4 extends Test3 {
}
class Test6 {
    test() {
        return 3;
    }
    ;
}
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision[Decision["No"] = calcEnum()] = "No";
})(Decision || (Decision = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) { }
runEnum(Direction);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let testOne = Test.A; // A
let nameA = Test[testOne]; // A
let cEnum = 0 /* ConstEnum.A */;
var Dice;
(function (Dice) {
    Dice[Dice["One"] = 1] = "One";
    Dice[Dice["Two"] = 2] = "Two";
    Dice[Dice["Three"] = 3] = "Three";
})(Dice || (Dice = {}));
function runDice(dice) {
    switch (dice) {
        case Dice.One:
            return 1;
        case Dice.Two:
            return 2;
        case Dice.Three:
            return 3;
        default:
            const a = dice;
    }
}
function logTime(num) {
    console.log(new Date());
    return num;
}
function logTime2(num) {
    if (typeof num === 'string') {
        num.toLocaleUpperCase();
    }
    return num;
}
class MyGenClass {
}
const myGenClass = new MyGenClass;
myGenClass.value = 23;
function logTimeStamp(num) {
    console.log(num.stamp);
    return num;
}
function MyF() {
    return { a: 1 };
}
const MyArray = [
    { name: 'Person name', age: 23 }
];
