import React from "react";
import Product from "./Product";

export default function ProductList({ products }) {
  return (
    <div className="product-list-wrapper">
      {products.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
}
