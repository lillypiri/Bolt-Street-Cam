const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("SERVER LIVES")
})

app.listen(7777, () => {
  console.log("SERVER IS LIVE ON port 7777")
});

