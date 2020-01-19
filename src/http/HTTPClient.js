import axios from 'axios'

class HTTPClient {
    instance = axios.create({
        baseURL: 'https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/anime/'
    })

    async get(id) {
        const req = await this.instance.get(id)
        return await req.data
    }
}

export default HTTPClient
