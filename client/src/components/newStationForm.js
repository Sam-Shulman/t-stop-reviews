import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import translateServerErrors from "./../services/translateServerErrors"
import Dropzone from "react-dropzone"

const newStationForm = (props) => {
    const [newStation, setNewStation] = useState ({
        name: "",
        line: "",
        location: "",
        image: ""
    })
    const [errors, setErrors] = useState({})
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const [files, setFiles] = useState([])

    // const [newStationFormData, setNewStationFormData] = useState({})

    const addNewStation = async (event) => {
        event.preventDefault()
        const newStationBody = new FormData()
        newStationBody.append("name", newStation.name)
        newStationBody.append("line", newStation.line)
        newStationBody.append("location", newStation.location)
        newStationBody.append("image", newStation.image)

        try {
            const response = await fetch ("/api/v1/stations" , {
                method: "POST",
                headers: new Headers({
                    "Accept": "image/jpeg"
                }),
                body: newStationBody
            })

            if(!response.ok) {
                if(response.status === 422) {
                    const body = await response.json()
                    const newErrors = translateServerErrors(body.errors)
                    return setErrors(newErrors)
                } else {
                    const errorMessage = `${response.status} ($response.statusText)`
                    const error = new Error(errorMessage)
                    throw (error)
                }
            } else {
                const body = await response.json()
                setNewStation([
                    ...newStation,
                    body.station
                ])
                setShouldRedirect(true)
            }
        } catch (err) {
        console.error(`Error in fetch: ${err.message}`)
        }
}

const handleInputChange = (event) => {
    setNewStation({
        ...newStation,
        [event.currentTarget.name]: event.currentTarget.value
    })
}

const handleImageUpload = (acceptedImage) => {
    console.log(acceptedImage)
    setNewStation({
      ...newStation,
      image: acceptedImage[0]
    })
    setFiles([
        <li key={acceptedImage[0].path}>
            {acceptedImage[0].path} - {acceptedImage[0].size} bytes
        </li>
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
    <h1> Add A New Station </h1>
    <form onSubmit={handleSubmit}/>
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
        
        <Dropzone type="image" name="image" id="image" onDrop={handleImageUpload} value={newStation.image}>
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
    </>
)
}

export default newStationForm