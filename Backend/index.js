const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const { connectionInstance } = require("./src/database/db.js");
const { HoldingModel } = require("./src/models/holding.models.js");
const { PositionModel } = require("./src/models/positions.model.js");
const { OrderModel } = require("./src/models/orders.model.js");
const app = express();


app.use(cors());
app.use(bodyParser.json());

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((position) => {
//     let newPosition = new PositionModel({
//       name: position.name,
//       qty: position.qty,
//       avg: position.avg,
//       price: position.price,
//       net: position.net,
//       day: position.day,
//       isLoss : position.isLoss,
//     });
//      newPosition.save();
//   });
//   res.send("Done!")
// });
app.get('/allHoldings' , async(req,res) => {
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
})
app.get('/allPositions' , async(req,res) => {
    let allPositions = await PositionModel.find({});
    res.json(allPositions);
})
app.post("/newOrder" , async(req,res) => {
    let newOrder = new OrderModel({
        name:req.body.name,
        qty:req.body.qty,
        price : req.body.price,
        mode : req.body.mode
    });

    await newOrder.save();
    res.send("Order Saved");
})
const PORT  = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectionInstance();
  console.log(
    `Server is started on http://localhost:${PORT}`
  );
});
