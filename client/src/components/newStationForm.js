import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import translateServerErrors from "./../services/translateServerErrors"

const newStationForm = (props) => {
    const [newStation, setNewStation] = useState ({
        name: "",
        line: "",
        location: "",
        imgUrl: ""
    })
const [errors, setErrors] = useState({})
const [shouldRedirect, setShouldRedirect] = useState(false)

const addNewStation = async () => {
    try {
        const response = await fetch ("/api/v1/stations" , {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(newStation)
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

const handleSubmit = (event) => {
    event.preventDefault()
    addNewStation()
}

if (shouldRedirect) {
    return <Redirect push to="/" />
}

return (
    <div>
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
        
        <label>
            ImgUrl:
        <input 
            type="img"
            name="imgUrl"
            id="imgUrl"
            onChange={handleInputChange}
            value={newStation.imgUrl}
            />
        </label>

    <div className="button-group">
        <input className="button" type="submit" value={"Submit"} />
    </div>

    </div>
)
}

export default newStationForm