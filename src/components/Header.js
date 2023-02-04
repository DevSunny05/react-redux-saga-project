import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.cartData);
 
  return (
    <div style={{ height: "75px", backgroundColor: "gray" }}>
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
    </div>
  );
};

export default Header;
