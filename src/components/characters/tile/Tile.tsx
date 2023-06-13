import {FC} from 'react'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

import {Character} from '../../../models'

interface TileProps {
    character: Character
}

// todo: add empty value check

const Tile: FC<TileProps> = ({character}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{`${character.race}, ${character.gender}`}</Card.Subtitle>
                <Card.Text>
                    <Stack>
                        <span>Birth: {character.birth}</span>
                        <span>Spouse: {character.spouse}</span>
                        <span>Realm: {character.realm}</span>
                        <span>Death: {character.death}</span>
                    </Stack>
                </Card.Text>
                <Card.Link href={character.wikiUrl} target='_blank'>View on Wiki</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Tile
