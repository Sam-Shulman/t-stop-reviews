class ReviewSerializer {
    static async getSummary(review) {
        const allowedAttributes = ["id", "name", "rating", "hasPolicePresence", "hasSittingWater", "story"]
        let serializedReview = {}
        for (const attribute of allowedAttributes) {
            serializedReview[attribute] = review[attribute]
        }
        return serializedReview
    }
}

export default ReviewSerializer

