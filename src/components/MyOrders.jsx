import React from 'react';

export default function MyOrders(props) {
  return (
    <div className='bg-rose-400 w-full my-8 text-white p-5 containers mx-auto flex'>
        <div className='w-1/2'>
        <h1 className='text-xl my-1'>Item : {props.name}</h1>
        <p className='text-xl my-1'>Size : {props.size}</p>
        <p className='text-xl my-1'>Amount : {props.amount}</p>
        </div>
        <div className='w-1/2'>
        <p  className='text-xl my-1'>Order ID : {props.orderid}</p>
        <p className='text-xl my-1'>Transaction ID : {props.transactionid}</p> 
        <p  className='text-xl my-1'>Time : {props.time}</p>
        </div>
       
    </div>
  )
}
