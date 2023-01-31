import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto z-50">
      {products.slice(0, 8).map((product) => (
        <Product key={product.id} {...product} />
      ))}

      <img src="https://links.papareact.com/dYz" alt="" className="md:col-span-full" />

      <div className="md:col-span-2">
        {products.slice(9, 10).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

        {products.slice(10).map((product) => (
          <Product key={product.id} {...product} />
        ))}
    </div>
  );
}

export default ProductFeed;
