import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Toolbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const renderNavBarLinks = () => {
        return (
            <>
                <a href="#" className="block font-semibold rounded hover:bg-gray-700 px-2 py-1">Home</a>
                <a href="#" className="mt-1 block font-semibold rounded hover:bg-gray-700 px-2 py-1">Search - coming soon</a>
            </>
        )
    }

    return (
        <>
            <header className="bg-gray-900">
                <div className="flex items-center justify-between px-4 py-3">
                    <div></div>
                    <div className="text-white text-4xl">
                        <h1>Anime List</h1>
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 text-2xl focus:text-white focus:outline-none hover:text-white">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
                {isOpen ? <div className="text-center text-white px-2 pt-2 pb-4">{renderNavBarLinks()}</div> : null}
            </header>
        </>
    )
}

export default Toolbar
