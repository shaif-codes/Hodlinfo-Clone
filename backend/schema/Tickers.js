import mongoose, {Schema, model} from "mongoose";

const ticketSchema = new Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String,
});

const Tickers = model("tickets", ticketSchema);

export default Tickers;