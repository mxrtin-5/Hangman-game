import { useEffect, useState, useCallback } from "react"
import words from "./data/wordsList.json"
import './App.css'
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrowing"
import HangmanWord from "./components/HangmanWord/HangmanWord"
import Keyboard from "./components/Keyboard/Keyboard"

const getWord = () =>{
  return words[Math.floor(Math.random() * words.length)]
    //* Math.random() nos da un numero random entre 0 y 1, lo multiplica por words.length y despues lo redondea para abajo con el Math.floor
}

function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord)



  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  //? el <string[]> indica que el use state es un array de strings 

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6

  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

  const addGuessLetter = useCallback((letter: string) => {

    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])

  }, [guessedLetters, isLoser, isWinner])


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()

      addGuessLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())

    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [])

  console.log(wordToGuess)
  return (
    <div className="container-body">
      <div className="lose-win">
        {isWinner && 'Winner - Refresh to try again'}
        {isLoser && 'Nice try - Refresh to try again'}
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            disabled={isWinner || isLoser}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessLetter}
            activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))} />
        </div>

      </div>
    </div>
  )
}

export default App
