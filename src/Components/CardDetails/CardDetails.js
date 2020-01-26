import React from 'react';
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
    faDragon
} from '@fortawesome/free-solid-svg-icons'
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

    return (
        <>
            <div className="flex flex-row text-gray-800 pl-6 md:pl-12 xl:pl-8 mb-10">
                <button className="text-2xl focus:outline-none">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    </Link>
                </button>
            </div>
            <div className="flex">
                <div className="flex flex-col bg-blue-600 w-1/3 items-center p-5">
                    <img className="w-auto h-auto" src={content.image_url} alt={`${content.title} cover art`}/>
                    {renderContentType(content.type)}
                    {renderMetadata(content)}
                </div>
                <div className="flex-col w-2/3 bg-red-700 p-5 items-center">
                    <div className="flex flex-row mb-6 justify-center items-center">
                        <h1 className="text-3xl mr-2 pr-2">{content.title}</h1>
                    </div>
                    <div>
                        {content.title_synonyms.length > 0 ? content.title_synonyms.map(title => title) : null}
                    </div>
                    <div className="m-2 mb-4 leading-relaxed">
                        <p>{content.synopsis}</p>
                    </div>
                    <div className="m-2"><b>Genres:</b></div>
                    <div className="flex flex-wrap m-2 items-center">
                        {renderGenreIcons(content.genres)}
                    </div>
                <div className="m-2">Rating Component - {content.score}</div>
                <a href="/#">Streaming Link</a>
                </div>
            </div>
        </>
    )
}


export default CardDetails;
