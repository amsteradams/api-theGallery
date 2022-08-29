import express from 'express'
import { catchErrors } from '../utils/utils.js'
import { postEntry } from '../controllers/controller.js'
const router = express.Router()

router.post('/entry', postEntry)


export default router