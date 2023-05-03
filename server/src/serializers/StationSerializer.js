class StationSerializer {
    static async getSummary(station) {
        const allowedAttributes = ["id", "name", "line", "location"]
        let serializedStation = {}
        for (const attribute of allowedAttributes) {
            serializedStation[attribute] = station[attribute]
        }
        return serializedStation
    }
}

export default StationSerializer