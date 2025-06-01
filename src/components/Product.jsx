import React from "react";

export default function Product() {
  const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 45 },
  ];
  
  return (
    <div>
      <h2>Product List</h2>
      <div>
        {products.map((product) => {
          return (
            <ol>
              <li>
                <div key={product.id}>
                  {product.name}- $-{product.price}
                </div>
              </li>
            </ol>
          );
        })}
      </div>
    </div>
  );
}
