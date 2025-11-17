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

**Example**
interface Person {
    name: string;
    age: number;
}
type Employee = Person & { id: number };
