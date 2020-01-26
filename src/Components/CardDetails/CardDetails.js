import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const CardDetails = ({ content }) => {
    console.log(content)
    return (
        <>
            <div className="flex flex-row text-gray-800 pl-6 md:pl-12 xl:pl-8 mb-10">
                <button className="text-2xl focus:outline-none">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    </Link>
                </button>
            </div>
            <div className="flex" >
                <div className="flex flex-col bg-blue-600 w-1/3 items-center p-3">
                    <img alt="Anime's cover art"/>
                    <a href="/#">Streaming</a>
                </div>
                <div className="flex-col bg-red-700 w-2/3 p-3 items-center">
                    <div className="">TextArea - description</div>
                    <div className="">Rating Component</div>
                </div>
            </div>
        </>
    )
}

export default CardDetails;
