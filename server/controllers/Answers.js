import mongoose from "mongoose";
import Questions from "../models/Questions.js";

export const postAnswer = async(req, res) => {
    const {id: _id} = req.params;
    const { noOfAnswers, answerBody, userAnswered, userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...')
    }

    updateNoOfAnswer(_id, noOfAnswers)

    try {
        const updatedQuestion = await Questions.findByIdAndUpdate( _id, { $addToSet: {'answer': [{answerBody, userAnswered, userId }]}})
        res.status(200).json(updatedQuestion)
    } catch (error) {
        res.status(400).json(error + ' error in updating')
    }
}

const updateNoOfAnswer = async(_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate( _id, { $set: {'noOfAnswers': noOfAnswers}})
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnswer = async(req, res)=> {
    const {id: _id} = req.params;
    const {answerId, noOfAnswers} = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...')
    }

    if (!mongoose.Types.ObjectId.isValid(answerId)) {
        return res.status(404).send('question unavailable...')
    }

    updateNoOfAnswer(_id, noOfAnswers)

    try {
        // await Questions.findByIdAndUpdate(_id, {$pull: {'answer': {_id: answerId}}})
        await Questions.updateOne({_id}, {$pull: {'answer': {_id: answerId}}})
        res.status(200).json({message: "Successfully deleted answer..."})
    } catch (error) {
        res.status(405).json(error)
    }
}

export const editAnswer= async (req, res) =>{
    const {id: _id} = req.params;
    const {answerId, answerBody} = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...')
    }

    if (!mongoose.Types.ObjectId.isValid(answerId)) {
        return res.status(404).send('question unavailable...')
    }

    try {
        await Questions.findByIdAndUpdate(_id, {$set : {'answer': {answerBody}}})
        res.status(200).json({message: "successfully edited..."})
    } catch (error) {
        res.status(405).json(error)
    }
} 