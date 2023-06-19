import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../globalVariable";
import MyOrders from "./MyOrders";
import { Link } from "react-router-dom";

export default function Orders() {
  const { loginEmail, setLoginEmail } = useContext(StateContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => { 
    axios
      .post("https://cakedelights-backend.onrender.com/myorders", { email: loginEmail })
      .then((response) => {
        setOrders(response.data);
        console.log('orders: ', orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if(orders===null){
    return (
      <div className="text-center containers mx-auto my-48">
      <h1 className="text-3xl my-4 text-rose-500 font-bold text-center">No Order Available</h1>
      <h2 className="text-3xl my-4 text-rose-500 font-bold text-center">Buy your First Cake, Now!</h2>
       <button className="bg-rose-600 px-4 my-2 py-2 text-white rounded-full"><Link to="/">Buy Now</Link></button>
       </div>
    )
  }
  else{
  return (
    <>
    <h1 className="text-5xl flex justify-center my-8 text-rose-600">My Orders</h1>
      {orders.map((item) => (
        <MyOrders
          key={item.orderID} // Add the key prop with a unique value
          name={item.item}
          size={item.size}
          amount={item.price}
          orderid={item.orderID}
          transactionid={item.transactionID}
          time={item.createdAt}
        />
      ))}
    </>
  );
}
}