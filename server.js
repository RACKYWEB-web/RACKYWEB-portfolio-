const express = require("express");
const app = express();

app.use(express.json());

// homepage route (FIX for Cannot GET /)
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// form route
app.post("/api/form", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Data received successfully",
    data: req.body
  });
});

app.listen(process.env.PORT || 3000);
