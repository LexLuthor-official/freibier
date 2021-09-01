const express = require("express");

const server = express();
const app = server;

const PORT = 3030;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(PORT, () => {
console.log(`Example app listening at http://localhost:${PORT}`)
})

server.use(express.json());
server.use(express.urlencoded({ extended: true }));