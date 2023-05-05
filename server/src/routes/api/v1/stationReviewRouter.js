import express from "express";
import objection from "objection";
const { ValidationError } = objection
import { Review } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js";

const stationReviewsRouter = new express.Router({ mergeParams: true })

stationReviewsRouter.post("/", async (req, res) => {
    const { body, rating, hasPolicePresence, hasSittingWater } = req.body
    
    //const formInput = cleanUserInput(reviewBody)
    //const { body, rating, hasPolicePresence, hasSittingWater } = reviewBody
    const { stationId } = req.params
    const userId = req.user.id
    console.log(userId)
    try{
        const newReview = await Review.query().insertAndFetch({
            body, rating, hasPolicePresence, hasSittingWater, userId, stationId
    })
        return res.status(201).json({ review: newReview })
    } catch(error) {
        console.log(error)
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

export default stationReviewsRouter