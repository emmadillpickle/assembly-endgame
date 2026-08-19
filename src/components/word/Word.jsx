import "./Word.css"

export default function Word({word, guessedLetters, isGameOver}) {

    const letters = word.split("").map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter)
        const display = isGuessed || isGameOver ? letter.toUpperCase() : ""
        const className = isGuessed ? "guessed" : "unguessed"

        return (
            <span key={index} className={className}>
                {display}
            </span>
        )
    })

    return (
        <section className="word">
            {letters}
        </section>
    )
}