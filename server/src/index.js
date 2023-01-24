const express = require('express');
const app = express();
const path = require('path')
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use('/static', express.static(path.join(__dirname, 'uploads')))

app.listen(process.env.PORT, () => {
    console.log(`Started server on PORT - ${process.env.PORT}`);
    console.log(`POSTGRES DB - ${process.env.DATABASE_URL}`)
});

app.use(cors());
app.use('/', routes);
