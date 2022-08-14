// Custom Type (Recap)
/* type Point = {
  x: number;
  y: number;
};

const pt: Point = { x: 213, y: 24 }; */
var pt2 = { x: 123, y: 12321 };
// nickname optional
var thomas = {
    first: "Thomas",
    last: "Hardy",
    id: 123,
    sayHi: function () { return "hello"; }
};
thomas.first = "harry";
thomas.id = 13141; // Error - readonly
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
