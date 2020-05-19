const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
//let db = JSON.parse(fs.readFileSync("db.json"));
let db = fs.readFileSync("db.json");
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
app.use(cors({origin: '*'}));
let jsonParser = bodyParser.json();

app.get('/', (req, res) => {
    fs.readFile("db.json", (err, data) => {
        if (err){
            throw err;
        } 
        res.send(JSON.parse(data))
    })
});


    

    


app.put('/',jsonParser, (req, res) => {
    console.log("adding");
    console.log(JSON.stringify(req.body));
    fs.writeFile("db.json", JSON.stringify(req.body), err => {console.log(err)});
    db = req.body;
    res.send("Done");
})





