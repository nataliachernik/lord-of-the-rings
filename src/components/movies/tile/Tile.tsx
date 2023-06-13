import {FC} from 'react'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

import {Movie} from '../../../models'

interface TileProps {
    movie: Movie
}

const Tile: FC<TileProps> = ({movie}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                    <Stack>
                        <span>Runtime (min): {movie.runtimeInMinutes}</span>
                        <span>Budget (MM): {movie.budgetInMillions}</span>
                        <span>Box Office Revenue (MM): {movie.boxOfficeRevenueInMillions}</span>
                        <span>Academy Award Nominations: {movie.academyAwardNominations}</span>
                        <span>Academy Award Wins: {movie.academyAwardWins}</span>
                        <span>Rotten Tomatoes Score: {movie.rottenTomatoesScore}</span>
                    </Stack>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Tile
