const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send("Hellow World");
});

const port = process.env.port || 3000;

app.listen(port,()=>{
  console.log(port);
  console.log("it is listening port");
});