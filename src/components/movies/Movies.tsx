import { useEffect, useState } from 'react';

import fetchData from '../../api/fetchData'
import {GeneralResponse, Movie} from '../../models'
import Tile from './tile/Tile'
import TileGrid from '../../common/components/TileGrid/TileGrid'

const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)

            try {
                const {docs: data} = await fetchData<GeneralResponse<Movie>>('movie')
                setMovies(data)
            } catch (e) {
                setError(true)
            }

            setLoading(false)
        }

        fetchMovies()
    }, [])

    if (loading) {
        return <p>Loading movies, please wait...</p>
    }

    if (error) {
        return <p>Failed to load movies.</p>
    }

    return (
        <>
            <h2>Movies</h2>
            <TileGrid>
                {movies.map(movie => (
                    <Tile movie={movie} key={movie._id} />
                ))}
            </TileGrid>
        </>
    )
}

export default Movies