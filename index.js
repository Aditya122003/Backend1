const express = require("express")
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("Welcome to the server! Visit /hello to see a message.");
});

app.get('/hello', (req, res) => {
    res.send("Hello I am Aditya Tiwari")
})

app.listen(port || process.env.PORT, () => {
    console.log(`Server is running on port ${port}`)
})