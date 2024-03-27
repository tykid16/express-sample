const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");

app.get("/", (req, res) => {
  res.render("index", { text: "Node.js and Express" });
});

app.use("/user", userRouter);

// app.use(express.static("public"));
app.set("view engine", "ejs");

function myLogger(req, res, next) {
  console.log("LOGGED");
  next();
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
