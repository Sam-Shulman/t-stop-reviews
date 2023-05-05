import express from "express"
import { Station } from "../../../models/index.js"
import StationSerializer from "../../../serializers/StationSerializer.js"
import stationReviewsRouter from "./stationReviewRouter.js"

const stationRouter = new express.Router()
stationRouter.use("/:stationId", stationReviewsRouter)

stationRouter.get("/", async (req, res) => {
    try {
        const stations = await Station.query()
        const serializedStations = await Promise.all(
            stations.map(async (station) => {
              return await StationSerializer.getSummary(station)
            })
          )
        return res.status(200).json({ stations: serializedStations })
    } catch (err) {
        return res.status(500).json({ errors: err })
    }
})

stationRouter.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const showStation = await Station.query().findById(id)
        const serializedStation = await StationSerializer.getSummary(showStation)
        return res.status(200).json({ station: serializedStation })
    } catch (err) {
        return res.status(500).json({ errors: err })
    }
})

export default stationRouter