import VoteSerializer from "./VoteSerializer.js"
class ReviewSerializer {
    static async getSummary(review) {
        const allowedAttributes = ["id", "body", "rating", "hasPolicePresence", "hasSittingWater"]
        let serializedReview = {}
        for (const attribute of allowedAttributes) {
            serializedReview[attribute] = review[attribute]
        }
        const relatedVotes = await review.$relatedQuery("votes")
        const serializedVotes = relatedVotes.map((vote) =>
        VoteSerializer.getSummary(vote))
        serializedReview.votes = serializedVotes
        return serializedReview
    }
}

export default ReviewSerializer