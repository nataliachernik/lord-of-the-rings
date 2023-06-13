import { useEffect, useState } from 'react';

import fetchData from '../../api/fetchData'
import {GeneralResponse, Movie} from '../../models'

const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            setError(false)

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

    const renderMovies = movies.map(movie => {
        return (
            <p key={movie._id}>
                {movie.name}
            </p>
        )
    })

    return (
        <>
            <h2>Movies</h2>
            <div className="movies">{renderMovies}</div>
        </>
    )
}

export default Movies