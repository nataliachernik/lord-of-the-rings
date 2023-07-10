import {FC} from 'react'
import Card from 'react-bootstrap/Card'

import {Movie} from '../../../common/models'

import styles from './Tile.module.css'

interface TileProps {
    movie: Movie
}

const Tile: FC<TileProps> = ({movie}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <div className={styles.cardText}>
                    <span>Runtime (min): {movie.runtimeInMinutes}</span>
                    <span>Budget (MM): {movie.budgetInMillions}</span>
                    <span>Box Office Revenue (MM): {movie.boxOfficeRevenueInMillions}</span>
                    <span>Academy Award Nominations: {movie.academyAwardNominations}</span>
                    <span>Academy Award Wins: {movie.academyAwardWins}</span>
                    <span>Rotten Tomatoes Score: {movie.rottenTomatoesScore}</span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Tile
