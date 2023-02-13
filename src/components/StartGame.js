import React from 'react'
import { Link } from 'react-router-dom'
import {QuestionSquare} from "react-bootstrap-icons"

function StartGame() {
    return (
        <section className="start-container">
            <QuestionSquare className="question-mark"/>
            <h1 className='start-container__title'>Let's Guess the Color!</h1>
            <article className="start-container__content">
                <h2>Press button to start</h2>
                <Link to="/game"><button type="button">Let's Play!</button></Link>

            </article>
        </section>
    )
}
export default StartGame