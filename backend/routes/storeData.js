import express from 'express';
import fetch from 'node-fetch';
import Tickers from '../schema/Tickers.js';
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const response = await fetch("https://api.wazirx.com/api/v2/tickers");
        if (!response.ok) {
            console.log("No data found");
            res.send("No data found");
            return;
        }
        const data = await response.json();
        const top10Data = Object.values(data).slice(0, 10);

        const filteredData = top10Data.map((ele)=>{
            return {
                name : ele.name,
                last : ele.last,
                buy: ele.buy,
                sell: ele.sell,
                volume: ele.volume,
                base_unit: ele.base_unit,
            }
        })
        await Tickers.deleteMany({});
        await Tickers.insertMany(filteredData);
        res.json(filteredData);

    } catch (err) {
        console.log("Error while fetching data: ", err);
        res.status(500).send("Error while fetching data");
    }
});

export default router;
