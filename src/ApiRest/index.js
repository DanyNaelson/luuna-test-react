export const apiGet = (url) => () => {
    let headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
    
    return fetch(url, {
        method: 'GET',
        headers: headers,
    })
    .then(res => res.json())
}