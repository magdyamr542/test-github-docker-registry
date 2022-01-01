const express = require("express");

const main = () => {

const app = express();

app.get("/" , (req,res) => {
  console.log("GET /");
  res.send({message : "Hello world"});
})

const PORT = 3333;

app.listen(PORT , ()=> {
  console.log(`Server up on port ${PORT}`)
});

}

main();
