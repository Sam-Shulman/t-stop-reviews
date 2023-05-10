import express from "express";
import { Vote } from "../../../models/index.js"

const reviewsVoteRouter = new express.Router({ mergeParams: true })
stationRouter.use("/:reviewId/votes", stationReviewsRouter)

reviewsVoteRouter.post("/", async (req,res) => {
    const { reviewId } = req.params
    const userId = req.user.id
    const { value } = req.body

    try{
        const newVote = await Vote.query().insertAndFetch({
            reviewId, userId, value
        })
        return res.status(201).json({ vote: newVote })
    } catch(error) {
        return res.status(500).json({ errors: error})
    }
})


export default reviewsVoteRouter