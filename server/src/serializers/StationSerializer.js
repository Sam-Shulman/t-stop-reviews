class StationSerializer {
    static async getSummary(station) {
        const allowedAttributes = ["id", "name", "line", "location"]
        let serializedStation = {}
        for (const attribute of allowedAttributes) {
            serializedStation[attribute] = station[attribute]
        }
        serializedStation.reviews = await station.$relatedQuery("reviews")
        return serializedStation
    }
}

export default StationSerializer