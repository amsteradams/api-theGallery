import express from 'express'
import writer from "../utils/writer.js";
const router = express.Router();

export const postEntry = async (req, res)=> {
    //console.log(req.body)
    try {
        await writer(req.body);
    } catch (error) {
        res.status(500).send('User alredy registered');
    }
    res.send(req.body)
}
