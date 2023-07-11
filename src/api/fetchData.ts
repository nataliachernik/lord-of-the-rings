const baseUrl = 'https://the-one-api.dev/v2'
const token = 'VvaMYMFiPrJ5Cvp6MnCT' // todo: should be stored in Vault

function fetchData<TResponse>(url: string): Promise<TResponse> {
    return fetch(`${baseUrl}/${url}`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then((res) => res.json())
}

export default fetchData
