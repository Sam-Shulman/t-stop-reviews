import express from "express";
import objection from "objection";
const { ValidationError } = objection
import { Review } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js";

const stationReviewsRouter = new express.Router({ mergeParams: true })

stationReviewsRouter.post("/", async (req, res) => {
    const formInput = cleanUserInput(req.body)
    const { body, rating, hasPolicePresence, hasSittingWater } = formInput
    const { stationId } = req.params
    const userId = req.user.id
    try{
        const newReview = await Review.query().insertAndFetch({
            body, rating, hasPolicePresence, hasSittingWater, userId, stationId
    })
        return res.status(201).json({ review: newReview })
    } catch(error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

//`api/v1/stations/${stationId}/reviews/${reviewId}` 

stationReviewsRouter.delete("/:id", async (req, res) => {
    debugger
    const { id } = req.params
    debugger
    try {
      await Review.query().deleteById(id)
      return res.status(200).json({message: "Comment was deleted"})
    } catch (error) {
      return res.status(500).json({ errors: error})
    }
  })

export default stationReviewsRouter