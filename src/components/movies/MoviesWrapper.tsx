import { Suspense } from 'react'

import Movies from './Movies'
const MoviesWrapper = () => {
    return (
        <Suspense fallback={<p>Loading Movies... Please wait.</p>}>
            <Movies />
        </Suspense>
    )
}

export default MoviesWrapper