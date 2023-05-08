import express from "express"
import objection from "objection"
const { ValidationError } = objection
import cleanUserInput from "../../../services/cleanUserInput.js"
import Station from "../../../models/Station.js"
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

stationRouter.post("/", uploadImage.single("imgUrl"), async (req, res) => {
    try {
        const { body } = req;
        let imgUrl = '';
        if (req.file) {
            imgUrl = req.file.location;
        }
        const data = {
            ...body,
            imgUrl
        };
        const formInput = cleanUserInput(data);
        const station = await Station.query().insertAndFetch(formInput);
        return res.status(201).json({ station });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data });
        }
        return res.status(500).json({ errors: error });
    }
});

export default stationRouter