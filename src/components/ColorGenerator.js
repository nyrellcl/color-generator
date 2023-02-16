import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const getRandomColor = () => {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    //returns a new array of string containing 6 digits from the digits variable and returns to generate random color
    const color = new Array(6).fill('').map(() =>
        digits[Math.floor(Math.random() * digits.length)]).join('');
    ;

    //returns digits from new Array and interpolates it into a hexademical color
    return `#${color}`
}

function ColorGenerator() {

    const [color, setColor] = useState('')
    const [answers, setAnswers] = useState([''])
    const [selectionResult, setIsSelectionResult] = useState(undefined)

    const generateColor = () => {
        const actualColor = getRandomColor()
        setColor(actualColor)
        //sets Answers so that the correct answer is loaded randomly every time
        setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()));
    }

    useEffect(() => {
        generateColor();
    }, [])// <-- Dependancy array needed, if not this function runs every single time component re-renders

    const handleAnswerClicked = answer => {
        if (answer === color) {
            setIsSelectionResult(true);
            generateColor();
        } else {
            setIsSelectionResult(false)
        }
        return (
            <section className="start-screen">
                <article>
                    <h1>Let's Guess the Color!</h1>
                </article>
            </section>
        )
    }

    return (
        <>
        <header>
              <nav className='nav-bar'>
                  <Link to="/color-generator"><button type='button' className="game-exit">Exit Game</button></Link>
              </nav>
          </header>
      <main>
          <section className="guess-container">
        <h1 className="guess-container__title">Guess the color!</h1>
        <article className="guess-me" style={{ background: color }}>

          <div className='btn-group'>
            {answers.map((answer) => (
              <button onClick={() => handleAnswerClicked(answer)} key={answer}>{answer}</button>
            ))}

          </div>

          {selectionResult === false && <div className="wrong">Wrong Answer</div>}
          {selectionResult === true && <div className="correct">Correct Answer!</div>}
        </article>
      </section>
      </main>
        </>

    )
}

export default ColorGenerator