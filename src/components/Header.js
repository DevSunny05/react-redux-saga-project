import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartData = useSelector((state) => state.cartData);
 
  return (
    <div className=" bg-gradient-to-r from-slate-900 to-slate-500 flex align " style={{ height: "75px", alignItems:'center',justifyContent:'space-between'  }}>
      <Link to='/'><h1 className=" m-2 text-3xl text-white">E-Commerce</h1></Link>
      <Link to='/cart'>
      <div style={{ float: "right", margin: "25px", position: "relative" }}>
        <span
          style={{
            position: "absolute",
            height: "20px",
            width: "20px",
            zIndex: "100",
            borderRadius: "50%",
            color: "#fff",
            backgroundColor: "green",
            top: "-12px",
            right: "-12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1px",
            border: "1px solid white",
          }}
        >
          {cartData.length}
        </span>
        <AiOutlineShoppingCart size={30} />
      </div>
      </Link>
    </div>
  );
};

export default Header;
