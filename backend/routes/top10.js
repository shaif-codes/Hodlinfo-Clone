import express from 'express'
import Tickers from '../schema/Tickers.js';
const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const tickers = await Tickers.find();
        if(!tickers.length){
            res.status(404).send("No data found");
            return;
        }

        res.status(200).send(tickers);
    }
    catch(err){
        console.log("error occur while fetching data from database: ", err);
        res.status(500).send(err);
    } 
})

export default router;