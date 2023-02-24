import React from 'react'
import { Link } from 'react-router-dom'

function MainPage() {
    return (
        <section className="main-start">
            <h1 className='main-start__title'>Welcome to the Game of Colors</h1>
            <article className="main-start__content">
                <h2>Play the games below</h2>
                <div className='main-start__content__btns'>
                    <Link to="/color-generator-start"><button type="button" className='main-start__content__btns__color-gen'>Color Guesser</button></Link>
                    <Link to="/color-game"><button disabled type="button" className='main-start__content__btns__color-game'>Coming Soon!</button></Link>
                </div>

            </article>
        </section>
    )
}

export default MainPage