import express from 'express'

import { deleteAnswer, editAnswer, postAnswer } from '../controllers/Answers.js'

const router = express.Router();

router.patch('/post/:id', postAnswer)
router.put('/updateAnswer/:id', editAnswer);
router.delete('/deleteAnswer/:id', deleteAnswer);

export default router;