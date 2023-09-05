'use client'

import ProductCard from "./product_card";

const productos = [
  {
    name:"juan"
  },
  {
    name:"pedro"
  }
];


export default function Products(params) {
  return (
    <div className="flex flex-wrap justify-evenly">
      {productos.map((product, index) => (
        <ProductCard key={index} name={product.name} />                    
      ))}
    </div>
  );
}
