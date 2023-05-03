class ReviewSerializer {
    static getSummary(review) {
        console.log(review)
        const allowedAttributes = ["id", "name", "rating", "hasPolicePresence", "hasSittingWater", "story", "stationId"]
        let serializedReview = {}
        for (const attribute of allowedAttributes) {
            serializedReview[attribute] = review[attribute]
        }
        return serializedReview
    }
}

export default ReviewSerializer

