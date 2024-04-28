import express from 'express'

import {AskQuestion, getAllQuestions, deleteQuestion, updateAskQuestion, updateViews} from '../controllers/Questions.js'

const router = express.Router()

router.post('/Ask', AskQuestion)
router.get('/get', getAllQuestions)

router.delete('/delete/:id', deleteQuestion);
router.put('/update/:id', updateAskQuestion);
router.put('/updateViews/:id', updateViews);

export default router;