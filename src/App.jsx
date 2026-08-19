import React from "react"
import Confetti from "react-confetti"
import Header from "./components/header/Header"
import Status from "./components/status/Status"
import Languages from "./components/languages/Languages"
import Word from "./components/word/Word"
import Keyboard from "./components/keyboard/Keyboard"
import NewGameButton from "./components/new-game-button/NewGameButton"
import { languages } from "./data/languages.js"
import { getRandomWord } from "./utils/utils.js"
import "./App.css"

export default function Hangman() {
  
  // state variables
  const [currentWord, setCurrentWord] = React.useState(getRandomWord())
  const [guessedLetters, setGuessedLetters] = React.useState([])

  // derived variables
  const wrongGuessCount = guessedLetters.filter((letter) => !currentWord.includes(letter)).length
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const didWeKillALanguage = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
  const numGuessesLeft = languages.length - 1

  // static
  function onGuess(letter) {
    setGuessedLetters(prevGuessedLetters => {
      return guessedLetters.includes(letter) ?
        prevGuessedLetters : 
        [...prevGuessedLetters, letter]
    })
  }

  return (
      <main>
          {isGameWon && <Confetti 
            width={window.innerWidth}
            height={window.innerHeight}
          />}
          <Header />
          <Status 
            isGameWon={isGameWon}
            isGameOver={isGameOver}
            didWeKillALanguage={didWeKillALanguage}
            languages={languages}
            wrongGuessCount={wrongGuessCount}
          />
          <Languages
            languages={languages}
            wrongGuessCount={wrongGuessCount}
          />
          <Word 
            word={currentWord} 
            guessedLetters={guessedLetters}
            isGameOver={isGameOver}
          />
          <Keyboard 
            handleClick={onGuess} 
            guessedLetters={guessedLetters} 
            currentWord = {currentWord}
            isGameOver ={isGameOver}
          />
          {isGameOver && <NewGameButton 
            setGuessedLetters={setGuessedLetters}
            setCurrentWord={setCurrentWord}
          />}

          {/* Combined visually-hidden aria-live region for status updates */}
          <section 
              className="sr-only" 
              aria-live="polite" 
              role="status"
          >
              <p>
                  {currentWord.includes(lastGuessedLetter) ? 
                      `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                      `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                  }
                  You have {numGuessesLeft} attempts left.
              </p>
              <p>Current word: {currentWord.split("").map(letter => 
              guessedLetters.includes(letter) ? letter + "." : "blank.")
              .join(" ")}</p>
          
          </section>
      </main>
  )
}
