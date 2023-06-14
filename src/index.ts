// Basic types
let id: number = 5
let company: string = 'Randell Hera'
let isPublished = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5, 6]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Mr-Hera', true]
let employee: [number, string][]

employee = [
    [1, 'Randell'],
    [2, 'Hera']
]

let pid: number | string = 22
pid = '22'

// Enum
enum Direction1 {
    Up=1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up='Up',
    Down='Down',
    Left='Left',
    Right='Right'
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Hera'
}

// Type Assertion
let cid: any = 1
// let customerId = cid as string
let customerId = <string>cid

// Functions
function addNum(x:number, y:number):number {
    return x + y
}

// Void
function log(message: string | number): void {
    console.log(message)
}

// Interfacse
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Unknown'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
interface PersonInterface {
    id: number
    name: string
    register(): string
}
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} has been registered successfully!`
    }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

// Subclasses
class Employee extends Person {
    position: string

    constructor (id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Brad', 'John', 'Jill'])

strArray.push('Hello')
