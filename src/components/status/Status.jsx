import "./Status.css"
import { clsx } from "clsx"
import { getFarewellText } from "../../utils/utils.js"

export default function Status({isGameWon, isGameOver, didWeKillALanguage, languages, wrongGuessCount}) {

    function getStatus() {
        if (!isGameOver && didWeKillALanguage) {
            const languageKilled = languages[wrongGuessCount - 1].name;

            return (
                <p className="farewell-message">
                    {getFarewellText(languageKilled)}
                </p>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }

        else if (isGameOver && !isGameWon) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
    }

    const className = clsx("status", {
        "won": isGameWon,
        "lost": isGameOver && !isGameWon,
        "oh-no-theres-been-a-tragedy": !isGameOver && didWeKillALanguage
    })

    return (
        <section 
            className={className}
            aria-live="polite" 
            role="status" 
        >
            {getStatus()}
        </section>
    )
}