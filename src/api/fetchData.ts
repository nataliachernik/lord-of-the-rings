const baseUrl = 'https://the-one-api.dev/v2'
const token = 'ow7XQtfJm-_kV9u6pWBa' // todo: should be stored in Vault

function fetchData<TResponse>(url: string): Promise<TResponse> {
    return fetch(`${baseUrl}/${url}`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then((res) => res.json())
}

export default fetchData
