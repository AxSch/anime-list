import React, { Component } from 'react'
import HTTPClient from '../../http/HTTPClient'

class ListView extends Component {
    constructor() {
        super()
        this.state = {
            resultsData: []
        }
    }

    async fetchData() {
        const api = new HTTPClient()
        const urlIDs = [
            '1',
            '790',
            '19',
            '5114',
            '2001',
            '1535',
            '13601',
            '28223',
            '431',
            '164',
            '18679',
            '1210',
            '28851',
            '9253', 
            '30484',
            '777',
            '22535',
            '31240',
            '4981',
            '10087',
            '47',
            '20',
            '1735',
            '33',
            '30',
            '37521'
        ]
        const res = await urlIDs.map(async id => await api.get(id))
        const resValues = await Promise.all(res)

        this.setState({resultsData: resValues})
    }
    componentDidMount() {
        this.fetchData()
     }

    render() {
        console.log('data', this.state.resultsData)
        return (
            <>
                HEllllo
            </>
        )
    }
}

export default ListView
