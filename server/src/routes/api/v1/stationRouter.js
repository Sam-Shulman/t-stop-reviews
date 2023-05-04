import express from "express"
import { Station } from "../../../models/index.js"
import StationSerializer from "../../../serializers/StationSerializer.js"
import uploadImage from "../../../services/uploadImage.js"

const stationRouter = new express.Router()

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

stationRouter.post("/", uploadImage.single("image"), async (req, res) => {
    try {
        const { body } = req
        const data = {
            ...body,
            image: req.file.location,
        }
        console.log(req.file.location)
        const station = await Station.query().insertAndFetch(data)
        return res.status(201).json({ station })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default stationRouter