const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  let sum = a + b;
  res.send(sum.toString());
});

app.get("/simpleInterest", (req, res) => {
  const pp = parseInt(req.query.pp);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  let si = (pp * rate * time) / 100;
  let totalAmount = pp + si;
  res.json({
    si: si.toString(),
    totalAmount: totalAmount.toString(),
  });
  console.log(pp, rate, time, totalAmount);
  console.log(si);
});

app.listen(3000, () => {
  console.log("App is running on the port 3000");
});
