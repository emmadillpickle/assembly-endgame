import React from "react"
import Header from "./components/header/Header"
import Status from "./components/status/Status"
import Languages from "./components/languages/Languages"
import Word from "./components/word/Word"
import Keyboard from "./components/keyboard/Keyboard"
import "./App.css"

export default function Hangman() {
    const [currentWord, setCurrentWord] = React.useState("react")

    return (
        <main>
            <Header />
            <Status />
            <Languages />
            <Word word={currentWord} />
            <Keyboard />
        </main>
    )
}
