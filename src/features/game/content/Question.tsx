import {FC} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'

import {Quote} from '../../../common/models'
import {LooseObject, GameStatus} from './types'

import styles from './Question.module.css'

interface QuestionProps {
    characterIdMap: LooseObject,
    quote: Quote,
    answer?: string,
    setAnswer: Function,
    gameStatus: GameStatus
}

const Question: FC<QuestionProps> = ({
    quote,
    characterIdMap,
    answer,
    setAnswer,
    gameStatus
}) => {
    const selectId = `select-character-${quote._id}`
    let isValid = false, isInvalid = false

    if (gameStatus === GameStatus.Completed) {
        isValid = answer === quote.character
        isInvalid = answer !== quote.character
    }

    return (
        <Card className={styles.card}>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
                <blockquote className={`blockquote ${styles.quoteText}`}>
                    <p>{quote.dialog}</p>
                    <footer className='blockquote-footer'>
                        Someone famous in <cite>Lord of the Rings</cite> Universe
                    </footer>
                </blockquote>
                <Stack direction="horizontal" gap={2} className={styles.answerContainer}>
                    <Form.Label htmlFor={selectId} className={styles.answerLabel}>
                        This quote belongs to:
                    </Form.Label>
                    <Form.Select
                        id={selectId}
                        value={answer}
                        onChange={e => setAnswer(quote._id, e.target.value)}
                        isValid={isValid}
                        isInvalid={isInvalid}
                        className={styles.answerSelect}
                        aria-label="select character"
                    >
                        <option>Select the character</option>
                        {Object.entries(characterIdMap).map(
                            ([id, name]) => <option value={id} key={id}>{name}</option>
                        )}
                    </Form.Select>
                </Stack>
                {(gameStatus === GameStatus.Completed && isInvalid)
                    && <div className={styles.correctAnswer}>Correct answer is: {characterIdMap[quote.character]}</div>
                }
            </Card.Body>
        </Card>
    )
}

export default Question
