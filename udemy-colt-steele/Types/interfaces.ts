// Custom Type (Recap)
/* type Point = {
  x: number;
  y: number;
};

const pt: Point = { x: 213, y: 24 }; */

// INTERFACE
// Sadece nesneler için kullanılır.

// ONLY FOR OBJETS
// Type dan farklı olarak atama operatörü (=) kullanılmaz
interface Point2 {
  x: number;
  y: number;
}

const pt2: Point2 = { x: 123, y: 12321 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string; //alternative ⬇
  sayHi(): string;
}

// nickname optional
const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  id: 123,
  sayHi: () => "hello",
};
thomas.first = "harry";
thomas.id = 13141; // Error - readonly

// Interface Methods
interface Product {
  name: string;
  price: number;
  // method with parameter
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// Type dan farklı olarak aynı interface yeniden oluşturulup eleman eklenebilir.

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "woof";
  },
};

// Extend interface
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark";
  },
  job: "guide dog",
};

//  Interface Multiple Inheritance
interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 12312,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"],
};
