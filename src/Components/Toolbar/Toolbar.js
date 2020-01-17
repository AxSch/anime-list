import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

const Toolbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const renderNavBarLinks = () => {
        return (
            <>
                <a href="#/" className="block font-semibold rounded hover:bg-gray-700 px-2 py-1 lg:mt-0 lg:ml-2">Best of the decade</a>
                <a href="#/" className="block font-semibold rounded hover:bg-gray-700 px-2 py-1 lg:mt-0 lg:ml-2">Best of the 2000s</a>
                <a href="#/" className="block font-semibold rounded hover:bg-gray-700 px-2 py-1 mb-2 lg:mt-0 lg:ml-2 lg:mb-0">Best of the 90s</a>
                {/* sort padding here */}
                <a href="#/" className="block font-semibold rounded hover:bg-gray-700 px-2 py-1 mb-2 lg:mt-0 lg:ml-2 lg:mb-0">Best of the 80s</a>
            </>
        )
    }

    return (
        <>
            <header className="px-8 fixed w-full bg-gray-900 lg:flex lg:justify-between lg:px-8 lg:py-3">
                <div className="flex items-center justify-between px-4 py-3 lg:p-0">
                    <div className="text-white text-4xl">
                        <h1>Anime List</h1>
                    </div>
                    <div className="text-center text-white px-6 pt-2 pb-4 md:py-0 lg:flex lg:items-center hidden">{renderNavBarLinks()}</div>
                    <div className="lg:hidden">
                        <button className="text-2xl text-gray-500 focus:outline-none focus:text-white hover:text-white mr-6">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 text-2xl focus:text-white focus:outline-none hover:text-white">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
                <div className="items-center justify-end hidden lg:flex">
                    <button className="text-2xl text-gray-500 focus:outline-none focus:text-white hover:text-white">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} text-center text-white px-2 pt-2 pb-4 md:py-0 lg:flex lg:items-center lg:hidden`}>{renderNavBarLinks()}</div>
            </header>
        </>
    )
}

export default Toolbar
