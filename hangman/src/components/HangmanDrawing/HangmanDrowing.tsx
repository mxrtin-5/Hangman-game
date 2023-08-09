import './HangmanDrowing.css'

const Head =(
    <div className='head-hangman'/>
)

const Body = (
    <div className='body-hangman'/>
)

const RIGHT_ARM =(
    <div className='right-arm'/>
)

const LEFT_ARM =(
    <div className='left-arm'/>
)

const RIGHT_LEG = (
    <div className='right-leg'/>
)

const LEFT_LEG = (
    <div className='left-leg'/>
)

const BODY_PARTS = [Head, Body, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses?: number
}

export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
    return (
        <div className="hangman-drawing-container">
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className='ya-me-quede-sin-ideas'/>
            <div className='hangman-drawing-styles'/>
            <div className='hangman-drawing-style'/>
            <div className="hangman-drawing"/>
        </div>
    );
}

export default HangmanDrawing;