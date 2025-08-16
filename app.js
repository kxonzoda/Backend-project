// HTTP methods - GET, PUT, POST, DELETE

// https://localhost:8080

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).json({message: "Hello "})
});

// - GET, PUT, POST, DELETE
app.get("/post", (req, res) => {
    const {firstname, lastname} = req.body
    const message = `His full name -${req.body.firstname} ${req.body.lastname}`
  res.send(message)
});

app.delete("/:id", (req,res) => {
    const {id} = req.params
    
    res.send(id)
})

app.put("/:id", (req, res) => {
    const {id} = req.params
    const body = req.body

    res.json({id, body})
})

app.listen(PORT, () => {
  console.log(`Listening on - http://localhost:${PORT}`);
});


// domain - post - endpoint
