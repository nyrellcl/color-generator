import React from 'react'
import { Link } from 'react-router-dom'

function StartGame() {
    return (
        <section>
            <h1>Let's Guess the Color!</h1>
            <Link to="/game"><button type="button">Let's Play!</button></Link>
        </section>
    )
}
export default StartGame