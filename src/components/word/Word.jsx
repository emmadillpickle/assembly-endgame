import "./Word.css"

export default function Word({word}) {

    const letters = word.split("").map((letter) => {
        return <span>{letter.toUpperCase()}</span>
    })

    return (
        <section className="word">
            {letters}
        </section>
    )
}