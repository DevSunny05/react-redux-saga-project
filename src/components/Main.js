import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log(data);

//   useEffect(()=>{
//     dispatch(productList())
//   },[])

  const product = {
    name: "phone",
    type: "mobile",
    price: 1000000,
    color: "red",
  };
  return (
    <>
      {/* <div className="d-flex ">
        <button onClick={() => dispatch(addToCart(product))}>
          Add To cart
        </button>
        <button onClick={() => dispatch(removeFromCart(product.name))}>
          Remove from cart
        </button>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
        <button onClick={() => dispatch(productList())}>
          Get Product List
        </button>
      </div> */}
      <div className="d-flex flex-col justify-center items-center ">
        {data.map((item) => (
          <div className="m-auto my-4 p-1.5 w-44  bg-slate-50 border-solid border-gray-500 ">
            <img key={item.id} src={item.image} alt={item.id} />
            <div>Name: {item.name}</div>
            <div>Color: {item.color}</div>
            <div>Brand: {item.brand}</div>
            <div>Category: {item.category}</div>
            <div>Price: {item.price}</div>
            <div>
                <button>Add To Cart</button>
                <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
