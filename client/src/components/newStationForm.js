import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import translateServerErrors from "../services/translateServerErrors"
import Dropzone from "react-dropzone"
import ErrorList from "./layout/ErrorList.js"

const NewStationForm = (props) => {
    const [newStation, setNewStation] = useState ({
        name: "",
        line: "",
        location: "",
        imgUrl: {}
    })
    const [errors, setErrors] = useState({})
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const [files, setFiles] = useState([])

    const addNewStation = async event => {
        const newStationBody = new FormData()
        newStationBody.append("name", newStation.name)
        newStationBody.append("line", newStation.line)
        newStationBody.append("location", newStation.location)
        newStationBody.append("imgUrl", newStation.imgUrl)

        try {
            const response = await fetch ("/api/v1/stations" , {
                method: "POST",
                headers: {
                    "Accept": "image/jpeg"
                },
                body: newStationBody
            })

            if(!response.ok) {
                if(response.status === 422) {
                    const body = await response.json()
                    const newErrors = translateServerErrors(body.errors)
                    return setErrors(newErrors)
                } else {
                    const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw (error)
                }
            } else {
                const body = await response.json()
            //     const bodyStation = body.station
            //     setNewStation({
            //         bodyStation
            // })
                setShouldRedirect(true)
            }
        } catch (err) {
        console.error(`Error in addNewStation fetch: ${err.message}`)
        }
    }

    const handleInputChange = (event) => {
        event.preventDefault()
        setNewStation({
            ...newStation,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleImageUpload = (acceptedImage) => {
        setNewStation({
        ...newStation,
        imgUrl: acceptedImage[0]
        })
        setFiles([
            <p key={acceptedImage[0].path}>
                {acceptedImage[0].path} - {acceptedImage[0].size} bytes
            </p>
        ])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addNewStation()
    }

    if (shouldRedirect) {
        return <Redirect push to="/" />
    }

    return (
        <>
            <ErrorList errors={errors}/>
            <h1> Add A New Station </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Station Name: 
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleInputChange}
                        value={newStation.name}
                    />
                </label>

                <label>
                    Line:
                <input 
                        type="text"
                        name="line"
                        id="line"
                        onChange={handleInputChange}
                        value={newStation.line}
                    />
                </label>

                <label>
                    Location:
                <input
                        type="text"
                        name="location"
                        id="location"
                        onChange={handleInputChange}
                        value={newStation.location}
                    />
                </label>
            
                <Dropzone 
                    type="image" 
                    name="imgUrl" 
                    id="imgUrl" 
                    onDrop={handleImageUpload} 
                    value={newStation.imgUrl}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Upload Your Image - drag 'n' drop or click to upload</p>
                            </div>
                        </section>
                    )}
                </Dropzone>

                <ul>{files}</ul>

                <div className="button-group">
                    <input className="button" type="submit" value="Submit" />
                </div>
            </form>
        </>
    )
}

export default NewStationForm