class ReviewSerializer {
    static getSummary(review) {
        const allowedAttributes = ["id", "body", "rating", "hasPolicePresence", "hasSittingWater", "userId"]
        let serializedReview = {}
        for (const attribute of allowedAttributes) {
            serializedReview[attribute] = review[attribute]
        }
        return serializedReview
    }
}

export default ReviewSerializer