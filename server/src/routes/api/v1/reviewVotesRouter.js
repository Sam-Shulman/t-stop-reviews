import express from "express";
import { Vote } from "../../../models/index.js"
import VoteSerializer from "../../../serializers/VoteSerializer.js";

const reviewsVoteRouter = new express.Router({ mergeParams: true })


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

reviewsVoteRouter.get("/:id", async (req, res) => {
    try {
        const votes = await Vote.query()
        const serializedVotes = await Promise.all(
            votes.map(async (vote) => {
              return  VoteSerializer.getSummary(vote)
            })
          )
        return res.status(200).json({ votes: serializedVotes })
    } catch (err) {
        return res.status(500).json({ errors: err })
    }
})



export default reviewsVoteRouter