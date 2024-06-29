import mongoose from './connection.js'
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import express from 'express';
import storeData from './routes/storeData.js'
import cors from 'cors'
import top10 from './routes/top10.js'

dotenv.config();
const port = process.env.PORT || 5000
const clientUrl = process.env.CLIENT_URL;
const app = express()

app.use(cors({
    origin: "*"
}));
app.use("/storeData", storeData);
app.use("/top10", top10);

app.get('/', (req, res) => {
    res.send('echo Hello');

})



app.listen(4000, (error) => {
    if (error) {
        console.warn(error);
        return

    }

    console.log(`server is listening on http://localhost:${port}/`)
})


