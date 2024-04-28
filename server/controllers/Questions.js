import Questions from '../models/Questions.js'
import mongoose from 'mongoose';

export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Questions(postQuestionData);
    
    try {
        await postQuestion.save();
        res.status(200).json("Posted a question successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Could'nt post a new question")
    }
}

export const getAllQuestions = async (req, res) => {
    try {
        const questionList = await Questions.find();
        res.status(200).json(questionList)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deleteQuestion = async (req, res) => {
    const {id: _id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...')
    }

    try {
        await Questions.findByIdAndDelete( _id );
        res.status(200).json({message: "successfully deleted..."})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const updateAskQuestion = async (req, res) => {
    const {id: _id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Book unavailable...')
    }

    
    const {questionTitle, questionBody, questionTags } = req.body;

    try {
        await Questions.findByIdAndUpdate(_id, {$set: {questionTitle, questionBody, questionTags}});
        res.status(200).json({message: "Question successfully updated..."})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updateViews = async(req, res)=> {
    const {id:_id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...')
    }

    const {views} = req.body;
    console.log(views);
    
    try {
        await Questions.findByIdAndUpdate(_id, {$set: {views}})
        res.status(200).json({message: "views updated..."})
    } catch (error) {
        res.status(404).json({message: error.message})
    }

}