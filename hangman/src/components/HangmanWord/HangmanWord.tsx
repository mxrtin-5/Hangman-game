import './HangmanWord.css'

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export const HangmanWord = ({ guessedLetters, wordToGuess}: HangmanWordProps) => {


    return (
        <div className="hangman-word">
            {
                wordToGuess.split('').map((letter, index) =>(
                    <span className='span-letter' key={index}>
                        <span className={ guessedLetters.includes(letter)
                            ? 'span-visible' 
                            :'span-visibility'
                            }>{letter}</span>
                        </span>
                ))
            }
        </div>
    );
}

export default HangmanWord;