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
    name: string
}
