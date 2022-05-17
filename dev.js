const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 5000;
app.use(express.static(path.join(__dirname, "src")));
app.use(require('cors')())
app.use(express.json())
app.post('*', (req, res) => {
    let path = req.query.path;
    let data = req.body.data;
    fs.writeFile(require('path').join(__dirname, "src", path), JSON.stringify(data, null, 2), (err) => {
        if (err) {
            res.send(err);
        } else {
            res.status(200).end();
        }
    })
})
 
app.listen(port, () => {
console.log(`Server is listening at http://localhost:${port}`);
})