import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log(data);

  useEffect(()=>{
    dispatch(productList())
  },[])

  
  return (
    <>
      <div className="d-flex ">
       
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>

      </div>
      <div className="container d-flex  justify-center items-center ">
        {data.map((item) => (
          <div className="card m-auto my-4 p-2 w-60 bg-slate-100 border-2 border-inherit rounded d-flex flex-col justify-center items-center ">
            <img key={item.id} src={item.image} alt={item.id} className=" object-contain w-52 h-52"/>
            <div>Name: {item.name}</div>
            <div>Color: {item.color}</div>
            <div>Brand: {item.brand}</div>
            <div>Category: {item.category}</div>
            <div>Price: {item.price}</div>
            <div className="d-flex flex-col items-center justify-center w-full">
                <button onClick={() => dispatch(addToCart(item))} className="mx-auto  my-2 px-4 py-1 bg-cyan-700 rounded text-white w-40">Add To Cart</button>
                <button onClick={() => dispatch(removeFromCart(item.id))} className="mx-auto my-2 px-4 py-1 bg-cyan-700 rounded text-white w-40">Remove To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;

// json-server --watch db.json
