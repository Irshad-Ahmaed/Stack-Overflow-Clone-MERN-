import express from 'express'

import { deleteAnswer, postAnswer } from '../controllers/Answers.js'

const router = express.Router();

router.patch('/post/:id', postAnswer)
router.patch('/updateAnswer/:id', deleteAnswer);

export default router;