import {FC, useState} from 'react'
import Button from 'react-bootstrap/Button'

import {Quote} from '../../../common/models'
import {GameStatus, LooseObject} from './types'
import Question from './Question'

import styles from './GameContent.module.css'

interface GameProps {
    movieName: string,
    characterIdMap: LooseObject,
    quotes: Quote[]
}

const GameContent: FC<GameProps> = ({
    movieName,
    characterIdMap,
    quotes
}) => {
    const [answers, setAnswers] = useState<LooseObject>({})
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.InProgress)

    const setAnswer = (quoteId: string, characterId: string) => {
        setAnswers({
            ...answers,
            [quoteId]: characterId
        })
    }

    const isProceedButtonEnabled = Object.keys(answers).length === quotes.length
    const completeGame = () => {
        if (gameStatus === GameStatus.InProgress) {
            setGameStatus(GameStatus.Completed)
        }
    }

    return (
        <div>
            <h2>Game</h2>
            <p className={styles.gameDescription}>
                Guess which of the characters these quotes belong to? Please select an answer to each quote to be able to see game results.
                <br />
                Hint: All quotes are taken from <i>{movieName}</i> movie.
            </p>
            <div className={styles.quotes}>
                {quotes.map(
                    quote => (
                        <Question
                            quote={quote}
                            characterIdMap={characterIdMap}
                            answer={answers[quote._id]}
                            setAnswer={setAnswer}
                            gameStatus={gameStatus}
                            key={quote._id}
                        />
                    )
                )}
            </div>
            <div className={styles.gameFooter}>
                {
                    gameStatus === GameStatus.InProgress ? (
                        <Button
                            variant="primary"
                            disabled={!isProceedButtonEnabled}
                            onClick={isProceedButtonEnabled ? completeGame : undefined}
                        >
                            See game results
                        </Button>
                    ) : <span className={styles.resultsMessage}>Lo, it was a wondrous game, worthy of celebration and merriment!</span>
                }
            </div>
        </div>
    )
}

export default GameContent
