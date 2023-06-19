import React, { useContext, useState } from "react";
import axios from "axios";
import { StateContext } from "../../globalVariable";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const { loggedIn, setLoggedIn } = useContext(StateContext);
  const { loginEmail, setLoginEmail } = useContext(StateContext);
  const navigate=useNavigate();
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_6vUjuVQsqDiepw",
      amount: data.amount,
      currency: "INR",
      name: "Cake Delights",
      description: "Cake Delights Payment Gateway",
      image: props.img,
      order_id: data.id,
      handler: async (response) => {
        console.log(response);
        try {
          const email = loginEmail;
          console.log('email: '+email)
          const verifyUrl = "https://cakedelights-backend.onrender.com/verify";
          const { data } = await axios.post(verifyUrl, { response: response,amount:props.price[0][size],email:email, name:props.name, size:size});
          console.log(data);
          console.log("loginEmail: "+email);

          if (data == "Payment verified successfully") {
            alert(
              "Payment verified successfully, Thankyou for shopping with us."
            );
          } else {
            alert("Sorry..Payment failed!!");
          }
        } catch (error) {
          console.log(error);
          alert(error);
        }
      },
      theme: {
        color: "#FDA4AF",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async (amount) => {
    if (loggedIn == true) {
      try {
        const orderUrl = "https://cakedelights-backend.onrender.com/orders";
        const { data } = await axios.post(orderUrl, { amount: amount });
        console.log(data);
        initPayment(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    else{
      navigate("/login");
      alert("Please Log In First")
    }
  };

  const [size, setSize] = useState("oneTier");
  return (
    <div className="w-full shadow-lg max-w-sm bg-rose-700 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-2xl font-semibold tracking-tight text-white text-center mt-2">
        {props.name}
      </h5>

      <img
        className="rounded-lg py-3 md:h-96 w-full sm:h-64"
        src={props.img}
        alt="cake"
      />

      <div className="px-5 pb-5">
        <div className="flex justify-center">
          <span className="text-2xl font-bold mr-1 text-white dark:text-white">
            {" "}
            RS. {props.price[0][size]}{" "}
          </span>
          <span className="text-2xl ml-1 font-bold text-white dark:text-white line-through">
            {props.price[0][size] * 1.2}
          </span>
        </div>
        <div className="flex items-center justify-between my-2">
          <select
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
            className="text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {props.size.map((sizes) => {
              return <option>{sizes}</option>;
            })}
          </select>

          {/* <a
            href={`https://api.whatsapp.com/send?phone=916367205027&text=Hi%2C%20I%20am%20interested%20to%20buy%20*${props.name}*`}
          > */}
          <button
            onClick={() => handlePayment(props.price[0][size])}
            className="text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
          </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}
