import { languages } from "../../data/languages.js"
import "./Languages.css"

export default function Languages() {

    const languageChips = languages.map(language => {

        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }

        return <span style={styles}>{language.name}</span>
    })

    return (
        <section className="languages">
            {languageChips}
        </section>
    )
}