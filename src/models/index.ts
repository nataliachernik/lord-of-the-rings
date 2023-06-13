export type GeneralResponse<T> = {
    docs: T[],
    total: number,
    limit: number,
    offset: number,
    page: number,
    pages: number
}

export type Movie = {
    _id: string,
    name: string,
    runtimeInMinutes: number,
    budgetInMillions: number,
    boxOfficeRevenueInMillions: number,
    academyAwardNominations: number,
    academyAwardWins: number,
    rottenTomatoesScore: number
}

export type Character = {
    _id: string,
    name: string,
    race: string,
    gender: string,
    birth: string,
    spouse: string,
    death: string,
    realm: string,
    wikiUrl: string
}
