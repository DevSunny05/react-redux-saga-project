import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {productSearch} from '../redux/productAction'

const Header = () => {
  const cartData = useSelector((state) => state.cartData);
 const dispatch=useDispatch()
  return (
    <div className=" bg-gradient-to-r from-slate-900 to-slate-500 flex align " style={{ height: "75px", alignItems:'center',justifyContent:'space-between'  }}>
      <Link to='/'><h1 className=" m-2 text-2xl  md:text-3xl text-white sm:text-2xl">E-Commerce</h1></Link>
      <div className=" w-1/3 lg:w-3/4  md:w-1/2 sm:w-1/3">
        <input type="text " onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder="Search Products..." className="w-full p-2 bg-slate-100 rounded "/>
      </div>
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
