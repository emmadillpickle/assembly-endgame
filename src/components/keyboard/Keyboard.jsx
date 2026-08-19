import "./Keyboard.css"

export default function Keyboard() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const letters = alphabet.split("").map((letter) => {
        return (<button>{letter.toUpperCase()}</button>)
    })

    return (
        <section className="keyboard">
            {letters}
        </section>
    )
}