/*Mini Challenge:
Create a Product type with id, name, and price.
Create a type for DiscountedProduct that:
Has all Product properties
Adds a discount property
Use Partial to create an object that only sets name and discount.
*/

type product = {
    id:string|number,
    name:string,
    price:number
}
 
type discount = {
    discount:number
}

type DiscountedProduct= product&discount;

const dp:DiscountedProduct ={
    id : "123",
    name: "demeke",
    price: 10000,
    discount: 200
};
console.log(`intersection: ${dp.id}, ${dp.name}, ${dp.price}, ${dp.discount} `)
const pdp:Partial<DiscountedProduct>={
    name : "demeke",
    discount: 400
}

console.log(`partial:  ${dp.name}, ${dp.discount} `)
