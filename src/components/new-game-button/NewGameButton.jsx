import "./NewGameButton.css"
import { getRandomWord } from "../../utils/utils"

export default function NewGameButton({setGuessedLetters, setCurrentWord}) {

    function resetGame() {
        setGuessedLetters([])
        setCurrentWord(getRandomWord())
    }

    return (
        <section>
            <button className="new-game-button" onClick={resetGame}>
                New Game
            </button>
        </section>
    )
}