import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration

router.route('/').get((req, res) => {
    res.status(200).json({message: 'hll'})
})

export default router;