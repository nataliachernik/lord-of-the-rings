import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import fetchData from '../../api/fetchData'
import {GeneralResponse, Character} from '../../models'

const limitPerPage = 12
const Characters = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true)
            setError(false)

            try {
                const {
                    docs: data,
                    pages
                } = await fetchData<GeneralResponse<Character>>(`character?page=${page}&limit=${limitPerPage}`)
                setCharacters(data)
                setPageCount(pages)
            } catch (e) {
                setError(true)
            }

            setLoading(false)
        }

        fetchCharacters()
    }, [page])

    if (loading) {
        return <p>Loading characters, please wait...</p>
    }

    if (error) {
        return <p>Failed to load characters.</p>
    }

    const handlePageClick = (event: {selected: number}) => {
        setPage(event.selected + 1)
    };

    const renderCharacters = characters.map(character => {
        return (
            <p key={character._id}>
                {character.name}
            </p>
        )
    })

    return (
        <>
            <h2>Characters</h2>
            <div className="characters">{renderCharacters}</div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Characters