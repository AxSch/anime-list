import React from 'react'

const Card = ({ result }) => {
    return (
        <div className="m-2">
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full h-full" src={result.image_url} alt="anime cover art" />
            </div>
        </div>
    )
}

export default Card
