const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const MyRouter = require('./ApiRouter');

const port = Number(process.env.PORT) || 3000;

app.use(cors({ origin: true }))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/myApi', MyRouter)
    .use('*', (req, res) => res.status(404).json({ success: false, data: "end point not found" }))

    
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});