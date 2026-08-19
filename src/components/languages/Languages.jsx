import "./Languages.css"
import { clsx } from "clsx"

export default function Languages({languages, wrongGuessCount}) {

    const languageChips = languages.map((language, index) => {
        const isLanguageLost = index < wrongGuessCount

        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }

        const className = clsx("chip", isLanguageLost && "lost")

        return (
            <span 
                key={language.name} 
                style={styles}
                className={className}
            >
                {language.name}
            </span>
        )
    })

    return (
        <section className="languages">
            {languageChips}
        </section>
    )
}