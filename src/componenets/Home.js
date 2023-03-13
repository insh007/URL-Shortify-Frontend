// import React, { useState } from 'react'
import { useState } from 'react'
import './Home.css'

const Home = ({setInputValue}) => {
    const [value, setValue] = useState("")

    const handleClick = ()  => {
        setInputValue(value)
        setValue("")
    }

    return (
        <div className="inputContainer">
            <h1>URL <span>Shortener</span></h1>
            <div>
                <input 
                    type="text" 
                    placeholder='Paste a link here to shorten it' 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <button onClick={handleClick} >shorten</button>
            </div>
        </div>
    )
}

export default Home
