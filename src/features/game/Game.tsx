import {useEffect, useState} from 'react'

import fetchData from '../../api/fetchData'
import {GeneralResponse, Movie, Character, Quote} from '../../common/models'
import {LooseObject} from './content/types'
import GameContent from './content/GameContent'

// todo: might want to move movieName and characterNames to env vars
const movieName = 'The Fellowship of the Ring'
const characterNames = ['Arwen', 'Galadriel', 'Gandalf', 'Gimli', 'Saruman']
const quoteLimit = 100
const questionsNumber = 3

const Game = () => {
    const [characterIdMap, setCharacterIdMap] = useState<LooseObject>({})
    const [quotes, setQuotes] = useState<Quote[]>([]) // random quotes

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchGameData = async () => {
            setLoading(true)

            const [movieId, charIdMap] = await Promise.all([
                fetchMovieId(setError),
                fetchCharacterIds(setCharacterIdMap, setError)
            ]);

            if (movieId && charIdMap) {
                await fetchQuotes(movieId, charIdMap, setQuotes, setError)
            } else {
                setError(true)
            }

            setLoading(false)
        }

        fetchGameData()
    }, [])

    if (loading) {
        return <p>Loading the game, please wait...</p>
    }

    if (error) {
        return <p>Failed to load the game.</p>
    }

    return (
        <GameContent
            movieName={movieName}
            characterIdMap={characterIdMap}
            quotes={quotes}
        />
    )
}

const fetchMovieId = async (setError: Function) => {
    try {
        const {docs: data} = await fetchData<GeneralResponse<Movie>>(`movie?name=${movieName}`)
        if (data.length) {
            return data[0]._id
        } else {
            setError(true)
        }
    } catch (e) {
        setError(true)
    }
}

const fetchCharacterIds = async (setCharacterIdMap: Function, setError: Function) => {
    try {
        const {docs: data} = await fetchData<GeneralResponse<Character>>(
            `character?name=${characterNames.join(',')}`
        )
        if (data.length) {
            const idMap = data.reduce((acc: LooseObject, character) => {
                acc[character._id] = character.name
                return acc
            }, {})
            setCharacterIdMap(idMap)
            return idMap
        } else {
            setError(true)
        }
    } catch (e) {
        setError(true)
    }
}

const fetchQuotes = async (
    movieId: string, characterIdMap: LooseObject, setQuotes: Function, setError: Function
) => {
    try {
        const {docs: data} = await fetchData<GeneralResponse<Quote>>(`quote?movie=${movieId}&limit=${quoteLimit}`)
        if (data.length) {
            const characterIds = Object.keys(characterIdMap)
            const quotes = data.filter(({character}) => characterIds.includes(character))
            const randomQuotes = getRandomQuotes(quotes)
            setQuotes(randomQuotes)
        } else {
            setError(true)
        }
    } catch (e) {
        setError(true)
    }
}

function getRandomQuotes(quotes: Quote[]) {
    const indices = getRandomQuoteIndices(quotes.length)
    return indices.map(ind => quotes[ind])
}

function getRandomQuoteIndices(quotesNumber: number) {
    const indices = []

    while (indices.length < questionsNumber) {
        const ind = Math.floor(Math.random() * quotesNumber)
        if (indices.indexOf(ind) === -1) indices.push(ind)
    }

    return indices
}

export default Game
