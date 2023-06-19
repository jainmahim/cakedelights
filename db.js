  const express = require("express");
  const mongoose = require("mongoose");
  var mongoURL =
  "mongodb+srv://ronak:learnbackend@cluster0.dqbgywd.mongodb.net/cake";
  mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
  const router = express.Router();

  var db = mongoose.connection;
  db.on("connected", () => {
    console.log("DB Connected");
  });
  db.on("error", () => {
    console.log("DB failed!");
  });

  const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
  });
  const users = mongoose.model("users", userSchema);

  const orderSchema = new mongoose.Schema(
    {
      email: {
        type: String,
      },
      item: {
        type: String,
      },
      size: {
        type: String,
      },
      price: {
        type: Number,
      },
      orderID: {
        type: String,
      },
      transactionID: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );
  const order = mongoose.model("order", orderSchema);


  router.post("/myorders", async function (req, res) {
    console.log("myorders called");
    try {
      const check = await order.find({ email: req.body.email });

      if (check) {
        res.send(check);
      } else {
        res.json("notexist");
      }
    } catch (e) {
      res.json("fail");
    }
  });

  module.exports = {
    db,
    users,
    order,
    router,
  };
