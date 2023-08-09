import styles from "./Keyboard.module.css"


const KEYS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
]

type KeyboardProps = {
    activeLetter: string[]
    inactiveLetters: string[]
    disabled?: boolean
    addGuessedLetter: (letter: string) => void
}

export const Keyboard = ({ activeLetter, disabled = false, inactiveLetters, addGuessedLetter }: KeyboardProps) => {
    return (
        <div className={styles.keyboard}>
            {KEYS.map(key => {
                const isActive = activeLetter.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""
                            }`}
                        disabled={isInactive || isActive || disabled}
                        key={key}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    );
}

export default Keyboard;