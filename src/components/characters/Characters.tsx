import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import clsx from 'clsx'

import fetchData from '../../api/fetchData'
import {GeneralResponse, Character} from '../../models'
import TileGrid from '../../common/components/TileGrid/TileGrid'
import Tile from './tile/Tile'

import styles from './Characters.module.css'

const limitPerPage = 12
const pageLinkClassName = 'page-link'
const pageItemClassName = 'page-item'

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

    if (loading && !pageCount) { // show only for initial loading
        return <p>Loading characters, please wait...</p>
    }

    if (error) {
        return <p>Failed to load characters.</p>
    }

    const handlePageClick = (event: {selected: number}) => {
        setPage(event.selected + 1)
    };

    return (
        <>
            <h2>Characters</h2>
            <div className={clsx(loading && styles.loadingCharacters)}>
                <TileGrid>
                    {characters.map(character => (
                        <Tile character={character} key={character._id} />
                    ))}
                </TileGrid>
            </div>
            {!!pageCount &&
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName={clsx('pagination', loading && styles.disabledPagination)}
                    pageClassName={pageItemClassName}
                    pageLinkClassName={pageLinkClassName}
                    breakClassName={pageItemClassName}
                    breakLinkClassName={pageLinkClassName}
                    activeClassName='active'
                    activeLinkClassName={pageLinkClassName}
                    previousClassName={pageItemClassName}
                    nextClassName={pageItemClassName}
                    previousLinkClassName={pageLinkClassName}
                    nextLinkClassName={pageLinkClassName}
                    marginPagesDisplayed={3}
                />
            }
        </>
    )
}

export default Characters