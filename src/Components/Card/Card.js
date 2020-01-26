import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`
    animation-name: slideUp;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    background-color: rgba(160, 174, 192, .8);
    @keyframes slideUp {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translate(0);
        }
    }
`

const Card = ({ result }) => {
    const [isDialog, setDialog] = React.useState(false)
    return (
        <div className="m-2 relative" onMouseOver={() => setDialog(true)} onMouseLeave={() => setDialog(false)}>
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full h-full" src={result.image_url} alt="anime cover art" />
            </div>
            {isDialog ?
                <StyledDiv className="z-10 bottom-0 text-white p-2 rounded overflow-hidden absolute w-full">
                    <div>
                        <h1 className="text-lg"><b>{result.title}</b></h1>
                    </div>
                    <div>
                        <span>Released: {result.premiered}</span>
                    </div>
                    <div>
                        <span>{result.status}</span>
                    </div>
                    <div>
                        <span>Rating: {result.score}</span>
                    </div>
                </StyledDiv>
                : null}
        </div>
    )
}

export default Card
