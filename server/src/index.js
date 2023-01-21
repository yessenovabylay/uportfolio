const express =require('express');
const { connectDb } = require('./helpers/db');
const { host, port } = require('./configuration/index');
const app = express();

const startServer = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Started server on PORT - ${process.env.PORT}`);
        console.log(`MONGO DB - ${process.env.MONGO_URL}`)
    });
}

app.get("/test", (req,res) => {
    res.send("Our server is working correctly")
});

connectDb()
    .on('error', console.log)
    .on('disconnec', connectDb)
    .once("open", startServer);