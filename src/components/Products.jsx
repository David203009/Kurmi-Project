'use client'

import ProductCard from "./product_card";

const productos = [1,2,3,4.5,6,7];


export default function Products(params) {
  return (
    <div className="flex flex-wrap justify-evenly">
      {productos.map((product, index) => (
        <ProductCard key={index} name={product.name} price={product.price} />
      ))}
    </div>
  );
}
