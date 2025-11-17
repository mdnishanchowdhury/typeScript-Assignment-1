1. What are some differences between interfaces and types in TypeScript?
   
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
2. What is the use of the keyof keyword in TypeScript? Provide an example?

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
