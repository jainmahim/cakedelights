const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Order = require("../db");
var KEY_ID = "rzp_test_6vUjuVQsqDiepw";
var KEY_SECRET = "O488wHNwBO3AVs01Sc4WVZ2J";

router.post("/orders", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: KEY_ID,
      key_secret: KEY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong!" });
      }
      res.status(200).json({ data: order, message: "Order Created" });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
});

router.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body.response;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      const emailString =
        typeof req.body.email === "string" ? req.body.email : "";
      const newOrder = new Order({
        email: emailString,
        item: req.body.name,
        size: req.body.size,
        price: req.body.amount,
        orderID: razorpay_order_id,
        transactionID: razorpay_payment_id,
      });
      newOrder.save();
      return res.send("Payment verified successfully");
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
});

module.exports = {router:router};
