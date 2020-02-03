import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleLeft,
    faBomb,
    faMap,
    faTheaterMasks,
    faGrinTears,
    faAtom,
    faSpaceShuttle,
    faHatWizard,
    faHeart,
    faBrain,
    faQuestion,
    faRobot,
    faGamepad,
    faSchool,
    faGhost,
    faBookDead,
    faBolt,
    faExclamation,
    faChild,
    faGraduationCap,
    faBiohazard,
    faDragon,
    faBible,
    faFighterJet,
    faFilm,
    faPlay
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Rating from 'react-rating'



const Border = styled.div`
    width: 75%;
    border: solid #718096 0.5px;
`

const CardDetails = ({ content }) => {

    const [isTrailer, setIsTrailer] = useState(false)
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [content])

    const scrollToTrailer = isTrailer => {
        setIsTrailer(isTrailer)
        if (isTrailer) {
            document.getElementById("trailer-div").scrollIntoView( {
                behavior: "smooth",
                block: "end"
            })
        }
    }

    const renderGenreIcons = genres => {
        const iconMap = {
            'Action': <FontAwesomeIcon icon={faBomb} />,
            'Adventure': <FontAwesomeIcon icon={faMap} />,
            'Comedy': <FontAwesomeIcon icon={faGrinTears} />,
            'Drama': <FontAwesomeIcon icon={faTheaterMasks} />,
            'Sci-Fi': <FontAwesomeIcon icon={faAtom} />,
            'Ecchi': <FontAwesomeIcon icon={faExclamation} />,
            'Space': <FontAwesomeIcon icon={faSpaceShuttle} />,
            'Fantasy': <FontAwesomeIcon icon={faDragon} />,
            'Romance': <FontAwesomeIcon icon={faHeart} />,
            'Mystery': <FontAwesomeIcon icon={faQuestion} />,
            'Mecha': <FontAwesomeIcon icon={faRobot} />,
            'Game': <FontAwesomeIcon icon={faGamepad} />,
            'School': <FontAwesomeIcon icon={faSchool} />,
            'Thriller': <FontAwesomeIcon icon={faGamepad} />,
            'Supernatural': <FontAwesomeIcon icon={faGhost} />,
            'Horror': <FontAwesomeIcon icon={faBiohazard} />,
            'Historical': <FontAwesomeIcon icon={faBookDead} />,
            'Magic': <FontAwesomeIcon icon={faHatWizard} />,
            'Super Power': <FontAwesomeIcon icon={faBolt} />,
            'Seinen': <FontAwesomeIcon icon={faGraduationCap} />,
            'Shounen': <FontAwesomeIcon icon={faChild} />,
            'Psychological': <FontAwesomeIcon icon={faBrain} />,
            'Demons': <FontAwesomeIcon icon={faBible} />,
            'Military': <FontAwesomeIcon icon={faFighterJet} />,
        }
        return genres.map((genre, key) => {
            return (
                <div className=" mr-3 my-2" key={key}>
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
            <div className="flex flex-col my-4 bg-gray-100 rounded p-6">
                <div className="pb-3">
                    <span>
                        <b>Age Rating: </b> {content.rating}
                    </span>
                </div>
                <div className="pb-3">
                    <ul>
                        <b>Studios: </b>
                        {content.studios.map((studio, key) => <li className="ml-4" key="key">{studio.name}</li>)}
                    </ul>
                </div>
                <div className="pb-3">
                    <span>
                        <b>Released: </b> {content.premiered}
                    </span>
                </div>
                <div className="pb-3">
                    <span>
                        <b>Status: </b>  {content.status}
                    </span>
                </div>
                {content.type === 'TV' ? <div className="pb-3">
                    <span>
                        <b>Episodes: </b> {content.episodes}
                    </span>
                </div> : null}
                <div>
                    <span>
                        <b>Duration: </b> {content.duration}
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
        return (
            <div className="mt-4">
                {type}
            </div>
        )
    }

    const renderAltTitle = (title, altTitle) => {
        if (altTitle !== null) {
            if (title.toLowerCase() !== altTitle.toLowerCase()) {
                return (
                    <div className="flex flex-row mb-6 justify-center items-center">
                        <span className="text-lg">Also known as:</span>
                        <h1 className="pl-3 text-lg mr-2">{title}</h1>
                    </div>
                )
            }
            return null
        }
    }

    const renderTrailer = () => {
        if (isTrailer) {
            return (
                <div className="flex flex-row justify-center">
                    <ReactPlayer width="100%" url={content.trailer_url} />
                </div>
            )
        }
        return null
    }

    return (
        <div className="mb-40 w-full">
            <div className="flex flex-row text-gray-800 pl-6 md:pl-12 xl:pl-8 mb-10">
                <button className="text-4xl focus:outline-none">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    </Link>
                </button>
            </div>
            <div className="flex flex-wrap md:flex-no-wrap">
                <div className="flex flex-col w-full sm:w-1/3 items-center p-5">
                    <div className="sm:hidden flex flex-row mb-6 justify-center items-center">
                        <h1 className="text-3xl mr-2">{content.title_english ? content.title_english : content.title}</h1>
                    </div>
                    <img className="w-auto h-auto" src={content.image_url} alt={`${content.title} cover art`} />
                    {renderContentType(content.type)}
                    {renderMetadata(content)}
                    <button onClick={() => scrollToTrailer(!isTrailer)} href="/#"><FontAwesomeIcon icon={faPlay} className="mr-2" />Trailer</button>
                    <button href="/#"><FontAwesomeIcon icon={faFilm} className="mr-2" />Stream</button>
                </div>
                <div className="flex-col p-5 items-center sm:w-2/3">
                    <div className="hidden sm:block">
                        <div className="flex flex-row mb-6 justify-center items-center">
                            <h1 className="text-3xl mr-2">{content.title_english ? content.title_english : content.title}</h1>
                        </div>
                        {renderAltTitle(content.title, content.title_english)}
                        <div className="flex flex-row justify-center">
                            <Border className="mb-6" />
                        </div>
                    </div>
                    <div className="m-2 mb-4 leading-relaxed">
                        <p>{content.synopsis}</p>
                    </div>
                    <div className="m-2"><b>Genres:</b></div>
                    <div className="flex flex-wrap m-2 items-center">
                        {renderGenreIcons(content.genres)}
                    </div>
                    <div className="m-2">
                        <Rating
                            initialRating={content.score}
                            readonly
                            stop={10}
                        />
                    </div>
                    {renderTrailer()}
                </div>
            </div>
        </div>
    )
}


export default CardDetails;
