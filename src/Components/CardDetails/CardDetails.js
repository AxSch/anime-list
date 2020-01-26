import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faBomb, faMap, faTheaterMasks, faGrinTears, faAtom, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const CardDetails = ({ content }) => {
    console.log(content)
    const renderGenreIcons = genres => {
        const iconMap = {
            'Action': <FontAwesomeIcon icon={faBomb} />,
            'Adventure': <FontAwesomeIcon icon={faMap} />,
            'Comedy': <FontAwesomeIcon icon={faGrinTears} />,
            'Drama': <FontAwesomeIcon icon={faTheaterMasks} />,
            'Sci-Fi': <FontAwesomeIcon icon={faAtom} />,
            'Space': <FontAwesomeIcon icon={faSpaceShuttle} />,
        }
        return genres.map((genre, key) => {
            return (
                <div className="m-1" key={key}>
                    <span className="pr-1">
                        {iconMap[genre.name]}
                    </span>
                    {genre.name}
                </div>
            )
        })
    }

    const renderMetadata = content => {
        return (
            <div className="flex flex-col my-4">
                <div>
                    <span>
                        <b>Age Rating: </b> {content.rating} 
                    </span>
                </div>
                <div>
                    <ul>
                    <b>Studios: </b>
        {content.studios.map((studio, key) => <li className="ml-4" key="key">{studio.name}</li>)}
                    </ul>
                </div>
                <div>
                    <span>
                        <b>Released: </b> {content.premiered}
                    </span>
                </div>
                <div>
                    <span>
                    <b>Status: </b>  {content.status}
                    </span>
                </div>
                <div>
                    <span>
                        <b>No. of episodes: </b> {content.episodes}
                    </span>
                </div>
                <div>
                    <span>
                       <b>Episode duration: </b> {content.duration}
                    </span>
                </div>
            </div>
        )
    }

    const renderContentType = type => {
        if (type === 'TV') {
            return (
                <div className="mt-4">
                    {type} series
                </div>
            )
        }
    }

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
                <div className="flex flex-col bg-blue-600 w-1/3 items-center p-5">
                    <img className="w-auto h-auto" src={content.image_url} alt={`${content.title} cover art`}/>
                    {renderContentType(content.type)}
                    {renderMetadata(content)}
                </div>
                <div className="flex-col bg-red-700 w-2/3 p-5 items-center">
                    <div className="flex flex-row mb-6 justify-center items-center">
                        <h1 className="text-3xl mr-2 pr-2">{content.title}</h1>
                    </div>
                    <div>
                        {content.title_synonyms.length > 0 ? content.title_synonyms.map(title => title) : null}
                    </div>
                    <div className="m-2 leading-relaxed">
                        <p>{content.synopsis}</p>
                    </div>
                    <div className="flex justify-between flex-wrap m-2 items-center">
                        <b>Genres:</b> {renderGenreIcons(content.genres)}
                    </div>
                <div className="m-2">Rating Component - {content.score}</div>
                <a href="/#">Streaming Link</a>
                </div>
            </div>
        </>
    )
}


export default CardDetails;