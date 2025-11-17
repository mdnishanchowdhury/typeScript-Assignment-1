**🎯 Interview Questions - Blog Task**

**1. What are some differences between interfaces and types in TypeScript?**
   
TypeScript-এ interface আর type দুটোই object-এর structure বা data shape define করার জন্য ব্যবহার করা হয়। তাদের মধ্যে পার্থক্য:-

**Interface:**
1. শুধু object বা class-এর shape define করতে ব্যবহার হয়।
2. একাধিক interface extend করা যায়।
3. Classes এই interface implement করতে পারে।

**Type alias:**
1. Object, primitive, union, intersection বা tuple সব define করতে পারে।
2. Extend করতে হলে intersection ব্যবহার করতে হয়।
3. Classes implement করতে পারে না।

**Example:-**
```ts
interface Person {
    name: string;
    age: number;
}
type Employee = Person & { id: number };
```
**2. What is the use of the keyof keyword in TypeScript? Provide an example?**

keyof দিয়ে আমরা কোনো object বা interface-এর সব key কে একত্রিত করে একটি union type হিসেবে ব্যবহার করতে পারি।

**Example:-**
```ts
interface User {
    id: number;
    name: string;
    email: string;
}
type UserKeys = keyof User; 
```
**3. Explain the difference between any, unknown, and never types in TypeScript?**

**any:** কোনো ধরনের value assign করা যায়। কিন্তু type safety চলে যায়।
**Example:-**
```ts
let a: any;
a = 10;
a = "hello";
```

**unknown:** কোনো value assign করা যায়। ব্যবহার করার আগে type চেক করতে হয়।
**Example:-**
```ts
let b: unknown;
b = 10;
if (typeof b === "number") {
    console.log(b + 5);
}
```
**never:** এমন ফাংশন যা কখনো value return করে না। যেমন exception throw করা বা infinite loop।
**Example:-**
```ts
function error(): never {
    throw new Error("এই ফাংশন কখনো return করে না");
}
```
**4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum?**

**Enums** দিয়ে আমরা সম্পর্কিত constant values logical group-এ রাখতে পারি।
**Example:-**
**Numeric Enum:**
```ts
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction.Up); 
```
**String Enum:**
```ts
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
console.log(Color.Green); 
```
Enums কোডের readability এবং maintainability বাড়ায়।

**5. Provide an example of using union and intersection types in TypeScript?**

**Union Type:** একটি variable একাধিক type নিতে পারে।
**Example:-**
```ts
let value: string | number;
value = "hello";
value = 100;
```
**Intersection Type:** একাধিক type combine করে।
**Example:-**
```ts
type A = { name: string };
type B = { age: number };
type C = A & B;
const person: C = { name: "Rakib", age: 25 };
```
Union type flexibility দেয়, আর intersection type structure কে strict এবং combined রাখে।
