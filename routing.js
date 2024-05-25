import express from "express";
 
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/Home.html");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
