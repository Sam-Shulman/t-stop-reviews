import express from "express";
import objection from "objection";
const { ValidationError } = objection
import { Review, User, Vote } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js";
import ReviewSerializer from "../../../serializers/ReviewSerializer.js";

const stationReviewsRouter = new express.Router({ mergeParams: true })

stationReviewsRouter.get("/", async (req,res)=> {
    try {
        const user = req.user
        const userId = req.user.id
        const findUser = await User.query().findById(userId)
        const relatedReviews = await findUser.$relatedQuery("reviews")
        const serializedReviews = await ReviewSerializer.showDetails(relatedReviews)

        return res.status(200).json({ reviews: serializedReviews });
    } catch (error) {
        res.status(500).json({ errors: error.message });
    }
})

stationReviewsRouter.post("/", async (req, res) => {
    const { body } = req;
    const formInput = cleanUserInput(req.body)
    const {rating, hasPolicePresence, hasSittingWater } = formInput
    const userId = req.user.id;
    const { stationId } = req.params
    try{
        const newReview = await Review.query().insertAndFetch({
            body, 
            rating, 
            hasPolicePresence, 
            hasSittingWater, 
            userId, 
            stationId
    });
        const serializedReview = await ReviewSerializer.singleShowDetails(newReview)
        return res.status(201).json({ review: serializedReview });
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(422).json({ errors: error.data });
        } else {
            res.status(500).json({ errors: error.message });
        }
    }
});

export default stationReviewsRouter