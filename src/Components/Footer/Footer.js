import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faGhost } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer className="flex justify-center bg-gray-900 text-white py-3">
            <p className="">Made with <FontAwesomeIcon className="text-blue-500" icon={faMusic} /> & <FontAwesomeIcon className="text-white" icon={faGhost} /> by AxSch</p>
        </footer>
    )
}

export default Footer
