/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import cross_icon from "../../assets/cross_icon.png";
const ListProduct = () => {
  const [allproducts, setallproducts] = useState([]);
  const productlist = async () => {
    let res = await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setallproducts(data);
      });
  };

  useEffect(() => {
    productlist();
  }, []);

  const removeProduct = async (index) => {
    let res = await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: index }),
    });
    await res.json();
    console.log("removed");
    await productlist();
  };

  return (
    <div className="listproduct flex flex-col gap-[2vw] justify-center ml-[5vw] mt-[3vw] h-[90vh] text-[1.4vw]">
      <h1 className="font-bold uppercase flex justify-center">
        All Products List
      </h1>
      <div className="listproduct-format-main  grid grid-cols-6 gap-[3vw] text-[1.2vw] justify-items-center font-semibold">
        <p className=" ">Products</p>
        <p className=" ">Title</p>
        <p className=" ">Old Price</p>
        <p className=" ">New Price</p>
        <p className=" ">Category</p>
        <p className=" ">Remove</p>
      </div>
      <div className="listproduct-allproducts overflow-y-scroll ">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <div
              className="listproduct-format  grid grid-cols-6 gap-[3vw] justify-items-center text-[1vw] mt-[1vw]"
              key={index}
            >
              <img
                src={product.image}
                alt=""
                className="listproduct-producticon w-[7vw] h-[7vw] object-contain"
              />
              <p className="flex items-center">{product.name}</p>
              <p className="flex items-center">${product.old_price}</p>
              <p className="flex items-center">${product.new_price}</p>
              <p className="flex items-center">{product.category}</p>

              <img
                src={cross_icon}
                className="listproduct-removeicon mt-[3vw] w-[1.2vw]"
                alt=""
                onClick={() => {
                  removeProduct(product.id);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
