import React from 'react'
import { useState } from 'react';
import MyOrders from './components/MyOrders';
import { StateContext } from "./globalVariable";
import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';


export default function Admin() {
    const { loginEmail, setLoginEmail} = useContext(StateContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => { 
        axios
          .get("https://cakedelights-backend.onrender.com/allorders")
          .then((response) => {
            setOrders(response.data);
            console.log('orders: ', orders);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      console.log(loginEmail)
    if(loginEmail==='jainmahi5697@gmail.com'){
  return (
   <div>
     {orders.map((item) => (
        <MyOrders
          key={item.orderID} 
          name={item.item}
          size={item.size}
          amount={item.price}
          orderid={item.orderID}
          transactionid={item.transactionID}
          time={item.createdAt}
        />
      ))} 
    </div>
  )
}

else{
    return (
        <div className='my-48 flex justify-center text-center text-6xl flex-col'>
            No Authorization!!
        </div>
    )
}
}