"use strict";
// Basic types
let id = 5;
let company = 'Randell Hera';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5, 6];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Mr-Hera', true];
let employee;
employee = [
    [1, 'Randell'],
    [2, 'Hera']
];
let pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Hera'
};
// Type Assertion
let cid = 1;
// let customerId = cid as string
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Unknown'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} has been registered successfully!`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());
