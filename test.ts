

let a = 5;
let b: string = 'asd';
let c = true;
let d: any = '123';

type returnTest = number | string

function test(a: string): returnTest {
	return '2';
}

const test2 = (a: string): returnTest => {
	return 'red';
}

type Point = {
	x: number;
	y: number;
}

type D3Point = Point & {
	z: number;
}

interface IPoint {
	x: number;
	y: number;
}

interface I3DPoint extends IPoint {
	z: number;
}

const cdPoint = (point: I3DPoint) => {
	const dPoint: I3DPoint = point as I3DPoint;
}

function print(coord: I3DPoint) { }

interface IInfo {
	desc: string;
	isActive: boolean;
}

interface ITags {
	name: string;
	value: number;
}

// test 
interface IArticle {
	userId: number;
	id: number;
	title: string;
	info: IInfo;
	tags: ITags[]
}

type TInfo = {
	desc: string;
	isActive: boolean;
}

type TTags = {
	name: string;
	value: number;
}

type TArticle = {
	userId: number;
	id: number;
	title: string;
	info: TInfo
	tags: TTags[]
}


let c1: 'test' = 'test';

type actionType = 'up' | 'down';
let c2: actionType = 'up';
c2 = 'down';

interface ComplexAction {
	s: string
}

function performAction(action: actionType | ComplexAction) {
	switch (action) {
		case 'down':
			return -1;
		case 'up':
			return 1
	}
}

class PointOne {
	readonly x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	a() { }
}

class D3PointOne extends PointOne {
	z: number;
	constructor(x: number, y: number, z: number) {
		super(x, y);
		this.z = z;
	}

	a(name?: string) { }

}

const pointOne = new PointOne(0, 0);
const D3pointOne = new D3PointOne(0, 0, 0);

class StaticTest {
	static c = 'test';

	static test() { }
}

const st = StaticTest.test();
const st1 = StaticTest.c;

abstract class Test3 {
	myMethod() { }
}

class Test4 extends Test3 { }
// new Test4().myMethod();

interface Test5 {
	test: () => number;
}

class Test6 implements Test5 {
	test(): number {
		return 3;
	};
}

enum Direction {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

enum Decision {
	Yes = 1,
	No = calcEnum()
}

function calcEnum() {
	return 2;
}

function runEnum(obj: { Up: string }) { }

runEnum(Direction);

enum Test {
	A
}

let testOne = Test.A; // A
let nameA = Test[testOne]; // A

const enum ConstEnum {
	A, B
}

let cEnum = ConstEnum.A;

enum Dice {
	One = 1,
	Two,
	Three
}

function runDice(dice: Dice) {
	switch (dice) {
		case Dice.One:
			return 1;
		case Dice.Two:
			return 2;
		case Dice.Three:
			return 3;
		default:
			const a: never = dice;
	}
}

function logTime<T>(num: T): T {
	console.log(new Date());
	return num;
}

function logTime2<T>(num: T) {
	if (typeof num === 'string') {
		num.toLocaleUpperCase();
	}
	return num;
}

interface MyInterface {
	transform: <T, F>(a: T) => T;
}

class MyGenClass<T> {
	value: T
}

const myGenClass = new MyGenClass<number>;
myGenClass.value = 23;

interface TimeStamp {
	stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
	console.log(num.stamp);
	return num;
}


// ******* TYPE MANIPULATION *******

type P = keyof Point;

function MyF() {
	return { a: 1 };
}

type MyFType = () => { a: number }
type K = ReturnType<MyFType>

const MyArray = [
	{ name: 'Person name', age: 23 }
];

type Person = typeof MyArray[number];
type Age = typeof MyArray[number]['age'];

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
	message: string;
}

interface Cat {
	test: number;
}

type EmailMessageContents = MessageOf<Email>
type CatMessageContents = MessageOf<Cat>

interface TestTwo {
	[key: string]: number;
}

type OptionFlags<Type> = {
	[Property in keyof Type]: boolean
}

type world = 'world';
type greeting = `Hello ${world}`;



