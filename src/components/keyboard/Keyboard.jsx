import "./Keyboard.css"
import { clsx } from 'clsx';

export default function Keyboard({handleClick, guessedLetters, currentWord, isGameOver}) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const letters = alphabet.split("").map((letter) => {
        const isGuessed = guessedLetters.includes(letter)
        const isRight = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)

        const className = clsx({
            "right": isRight,
            "wrong": isWrong
        })

        return (
            <button 
                key={letter} 
                onClick={() => handleClick(letter)}
                className={className}
                disabled={isGameOver}
                aria-disabled={guessedLetters.includes(letter)}
                aria-label={`Letter ${letter}`}
            >
                {letter.toUpperCase()}
            </button>)
    })

    return (
        <section className="keyboard">
            {letters}
        </section>
    )
}