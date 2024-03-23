/* eslint-disable no-unused-vars */
import React from "react";
import "../Sidebar/Sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";
const Sidebar = () => {
  return (
    <div className="sidebar  font-bold p-[2vw] max-w-[22vw] text-[1.2vw] border-[1px] border-zinc-800">
      <Link to={"/addproduct"} className="sidebarlink">
        <div className="sidebar-item flex items-center gap-[1vw] bg-zinc-800 p-[1vw] ">
          <img src={add_product_icon} alt="" className="w-[3vw]" />
          <p className="uppercase">Add product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} className="sidebarlink">
        <div className="sidebar-item flex gap-[1vw] items-center bg-zinc-800 p-[1vw] ">
          <img src={list_product_icon} alt="" className="w-[3vw]" />
          <p className="uppercase">product list</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
