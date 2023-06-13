import fetchData from '../../api/fetchData'
import {GeneralResponse, Movie} from '../../models'

const fetchMovies = fetchData<GeneralResponse<Movie>>('movie')

const Movies = () => {
    const movies = fetchMovies()
    const renderMovies = movies.docs.map((movie: {_id: string, name: string}) => {
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