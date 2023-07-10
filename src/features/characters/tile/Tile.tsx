import {FC} from 'react'
import Card from 'react-bootstrap/Card'

import {Character} from '../../../common/models'

import styles from './Tile.module.css'

interface TileProps {
    character: Character
}

const Tile: FC<TileProps> = ({character}) => {
    const raceText = isValidValue(character.race) ? character.race : 'no race data'
    const genderText = isValidValue(character.gender) ? character.gender : 'no gender data'

    return (
        <Card>
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{`${raceText}, ${genderText}`}</Card.Subtitle>
                <div className={styles.cardText}>
                    <span>Birth: {getNonEmptyValue(character.birth)}</span>
                    <span>Spouse: {getNonEmptyValue(character.spouse)}</span>
                    <span>Realm: {getNonEmptyValue(character.realm)}</span>
                    <span>Death: {getNonEmptyValue(character.death)}</span>
                </div>
                {!!character.wikiUrl && <Card.Link href={character.wikiUrl} target='_blank'>View on Wiki</Card.Link>}
            </Card.Body>
        </Card>
    )
}

function getNonEmptyValue(value?: string) {
    return isValidValue(value) ? value : 'no data'
}

function isValidValue(value?: string) {
    return !!(value && value.trim() && value !== 'NaN')
}

export default Tile
