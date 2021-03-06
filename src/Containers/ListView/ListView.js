import React, { Component } from 'react'
import HTTPClient from '../../http/HTTPClient'
import Card from '../../Components/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import styled, { keyframes } from 'styled-components'

class ListView extends Component {
    constructor() {
        super()
        this.state = {
            resultsData: [],
            isLoading: true
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

        this.setState({ resultsData: resValues })
    }

    spinAnimation = keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    `

    componentDidMount() {
        this.fetchData()
    }

    renderCard() {
        const { resultsData } = this.state
        if (resultsData.length > 0) {
            return resultsData.map((result, id) => {
                return <Card key={id} result={result} />
            })
        }
        return null
    }

    render() {
        const { resultsData } = this.state
        let renderedElement = null
        if (resultsData.length  === 0) {
            const StyledDiv = styled.div`
                animation: ${this.spinAnimation} 3s linear infinite;
            `
            renderedElement = (
                <div className="flex flex-col items-center text-6xl mt-64 text-gray-800 h-screen">
                    <StyledDiv>
                        <FontAwesomeIcon icon={faCog} />
                    </StyledDiv>
                    <span className="text-xl">Shh! The elves are at work...</span>
                </div>
            )
        } else {
            renderedElement = this.renderCard()
        }
        return (
            <div className="m-4 mb-40 text-center">
                <div className="flex flex-row flex-wrap justify-around items-center">
                    {renderedElement}
                </div>
            </div>
        )
    }
}

export default ListView
