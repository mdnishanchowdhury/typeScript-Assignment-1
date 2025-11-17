const formatValue = (value: string | number | boolean) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value == "number") {
        return value * 10;
    }
    else {
        return !value;
    }

}

const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    else {
        return 0;
    }
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}



type Item = {
    title: string;
    rating: number
}

const filterByRating = (items: Item[]): Item[] =>
    items.filter((item) => item.rating >= 4);



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive)
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author:${book.author}, Published ${book.publishedYear}, Available: ${book.isAvailable}`)
}


type ArrType = number | string;

const getUniqueValues = (array1: ArrType[], array2: ArrType[]): ArrType[] => {
    const result: ArrType[] = [];

    for (let i = 0; i < array1.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (array1[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result[result.length] = array1[i];
        }
    }

    for (let i = 0; i < array2.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (array2[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result[result.length] = array2[i];
        }
    }
    return result;
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (prodcuts: Product[]): number => {
    if (prodcuts.length > 0) {
        const reduceTotal = prodcuts.reduce((sum, curr) => {
            const price = curr.quantity * curr.price;
            const discountAmount = curr.discount ? price * curr.discount / 100 : 0;
            const total = price - discountAmount;
            return total + sum
        }, 0)
        return reduceTotal;
    }
    return 0;
}
