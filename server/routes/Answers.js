import express from 'express'

import { editAnswer, postAnswer } from '../controllers/Answers.js'

const router = express.Router();

router.patch('/post/:id', postAnswer)
router.patch('/updateAnswer/:id', editAnswer);

export default router;