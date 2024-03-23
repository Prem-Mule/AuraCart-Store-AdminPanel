/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import upload_area from "../../assets/upload_area.svg";
const Addproduct = () => {
  const [image, setimage] = useState(false);
  const imagehandler = (e) => {
    // console.log(e.target.files[0]);
    setimage(e.target.files[0]);
  };

  const [productDetails, setproductDetails] = useState({
    name: "",
    category: "women",
    old_price: "",
    new_price: "",
    image: "",
  });

  const changeHandler = (e) => {
    setproductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const addproduct = async () => {
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);
    const response = await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
    responseData = await response.json(); // Parse JSON response
    console.log("1", response);
    console.log("##", responseData);
    if (responseData.success) {
      product.image = responseData.image_url;
      //   console.log(product);
      //   console.log(JSON.stringify(product));
      //   console.log("product", product);
      const resp = await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "applicaton/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.success) {
            alert("Product added successfully");
            // Empty the form fields
            setproductDetails({
              name: "",
              category: "women",
              old_price: "",
              new_price: "",
              image: "",
            });
            setimage(false);
          } else {
            alert("Failed to add");
          }
        });
      //   responseData = await resp.json();
      //   console.log("2", resp);
      //   console.log(responseData);
    }
  };
  return (
    <div className="flex flex-col m-[2vw] rounded-[1vw] px-[4vw] py-[2vw] gap-[2vw] bg-zinc-800 h-fit w-[60%]">
      <div className="addproduct-itemfields ">
        <p className="text-[1.1vw] mb-[0.5vw] font-semibold">Product Title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={changeHandler}
          placeholder="Type here"
          className="w-[70%] rounded-sm  text-zinc-800 h-[1.8vw] text-[1.3vw]"
        />
      </div>
      <div className="addproduct-price flex flex-col  gap-[2vw]">
        <div className="addproduct-itemfield">
          <p className="text-[1.1vw] mb-[0.5vw] font-semibold">Price</p>
          <input
            type="text"
            name="old_price"
            placeholder="Type here"
            value={productDetails.old_price}
            onChange={changeHandler}
            className="w-[70%] rounded-sm  text-zinc-800 h-[1.8vw] text-[1.3vw]"
          />
        </div>
        <div className="addproduct-itemfield">
          <p className="text-[1.1vw] mb-[0.5vw] font-semibold">Offer Price</p>
          <input
            type="text"
            name="new_price"
            value={productDetails.new_price}
            onChange={changeHandler}
            placeholder="Type here"
            className="w-[70%] rounded-sm  text-zinc-800 h-[1.8vw] text-[1.3vw]"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p className="text-[1.1vw] mb-[0.5vw] font-semibold">
          Product Category
        </p>
        <select
          name="category"
          value={productDetails.category}
          onChange={changeHandler}
          className="add-product-selector w-[70%] rounded-sm bg-zinc-200 text-zinc-800 font-semibold h-[1.8vw] text-[1.3vw]"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="addproduct-thumbnail-img"
          />
        </label>
        <input
          type="file"
          name="image"
          value={productDetails.image}
          id="file-input"
          hidden
          onChange={imagehandler}
        />
      </div>
      <button
        className="addproduct-btn bg-cyan-400 font-bold w-1/4 py-[0.7vw]"
        onClick={addproduct}
      >
        Add
      </button>
    </div>
  );
};

export default Addproduct;
