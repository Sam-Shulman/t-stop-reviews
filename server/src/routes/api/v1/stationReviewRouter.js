import express from "express";
import objection from "objection";
const { ValidationError } = objection
import { Review } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js";
import reviewsVoteRouter from "./reviewVotesRouter.js";
import ReviewSerializer from "../../../serializers/ReviewSerializer.js";

const stationReviewsRouter = new express.Router({ mergeParams: true })
stationReviewsRouter.use("/:reviewId/votes", reviewsVoteRouter)


stationReviewsRouter.post("/", async (req, res) => {
    const formInput = cleanUserInput(req.body)
    const { body, rating, hasPolicePresence, hasSittingWater } = formInput
    const { stationId } = req.params
    const userId = req.user.id
    try{
        const newReview = await Review.query().insertAndFetch({
            body, rating, hasPolicePresence, hasSittingWater, userId, stationId
    })
        console.log(newReview)
        return res.status(201).json({ review: newReview })
    } catch(error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

stationReviewsRouter.get("/:id", async (req, res) => {
    try {
        const reviews = await Review.query()
        const serializedReviews = await Promise.all(
            reviews.map(async (review) => {
              return await ReviewSerializer.getSummary(review)
            })
          )
        return res.status(200).json({ reviews: serializedReviews })
    } catch (err) {
        return res.status(500).json({ errors: err })
    }
})

export default stationReviewsRouter