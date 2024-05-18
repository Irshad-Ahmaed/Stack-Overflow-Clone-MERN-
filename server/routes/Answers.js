import express from 'express'

import { deleteAnswer, editAnswer, postAnswer } from '../controllers/Answers.js'
import auth from '../middlewares/auth.js'

const router = express.Router();

router.patch('/post/:id', auth, postAnswer)
router.patch('/deleteAnswer/:id', auth, deleteAnswer);
router.patch('/updateAnswer/:id', auth, editAnswer);

export default router;