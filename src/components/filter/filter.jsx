import React, { useState } from "react";

const productdata = [
  { id: 1, name: "Product 1", price: 100, category: "computing" },
  { id: 2, name: "Product 2", price: 50, category: "cloth" },
  { id: 3, name: "Product 3", price: 300, category: "car" },
  { id: 4, name: "Product 4", price: 400, category: "toys" },
  { id: 5, name: "Product 5", price: 200, category: "computing" },
  { id: 6, name: "Product 6", price: 800, category: "bike" },
  { id: 7, name: "Product 7", price: 300, category: "car" },
  { id: 8, name: "Product 8", price: 250, category: "bike" },
  { id: 9, name: "Product 9", price: 280, category: "cloth" },
  { id: 10, name: "Product 10", price: 170, category: "toys" },
];

const Filter = () => {
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);

  const filterProduct = productdata.filter(product => {
    return (category === "all" || product.category === category) &&
      product.price <= maxPrice;
  });

  return (
    <div className="p-6">
      <div className="flex space-x-4 mb-4">
        <select
          className="border rounded p-2 "
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option className="text-black" value="all">All Categories</option>
          <option className="text-black" value="computing">Computing</option>
          <option className="text-black" value="computing">Cloth</option>
          <option className="text-black" value="bike">Bike</option>
          <option className="text-black" value="toys">Toys</option>
          <option className="text-black" value="car">Car</option>
        </select>
        <input
          type="range"
          className="border rounded p-2"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <span>${maxPrice}</span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filterProduct.length > 0 ? (
          filterProduct.map((product) => (
            <div
              key={product.id}
              className="border rounded p-4 shadow-md"
            >
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-8">Price: ${product.price}</p>
              <p className="text-8">Category: {product.category}</p>
            </div>
          ))
        ) : (
          <p className="text-yellow-400 text-[20px]">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
