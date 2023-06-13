const baseUrl = 'https://the-one-api.dev/v2'
const token = 'ow7XQtfJm-_kV9u6pWBa'

function fetchData(url: string) {
    return fetch(`${baseUrl}/${url}`, {
        headers: {Authorization: `Bearer ${token}`}
    })
    .then((res) => res.json())
}

export default fetchData
