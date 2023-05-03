import express from "express"
import { Station } from "../../../models/index.js"

const stationRouter = new express.Router()

stationRouter.get("/", async (req, res) => {
    try {
        const stations = await Station.query()
        return res.status(200).json({ stations: stations })
    } catch (err) {
        return res.status(500).json({ errors: err })
    }
})

stationRouter.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const showStation = await Station.query().findById(id)
        return res.status(200).json({ station: showStation })
    } catch (err) {
        return res.status(500).json({ errors: err })
    }
})

export default stationRouter