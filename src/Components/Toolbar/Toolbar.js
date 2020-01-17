import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Toolbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const renderNavBarLinks = () => {
        return (
            <>
                <a href="#" className="block font-semibold rounded hover:bg-gray-700 px-2 py-1 sm:mt-0 sm:ml-2">Home</a>
                <a href="#" className="mt-1 block font-semibold rounded hover:bg-gray-700 px-2 py-1 sm:mt-0 sm:ml-2">Search - coming soon</a>
            </>
        )
    }
    console.log(isOpen)

    return (
        <>
            <header className="fixed w-full bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3">
                <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                    {/* <div className="px-2"></div> */}
                    <div className="text-white text-4xl">
                        <h1>Anime List</h1>
                    </div>
                    <div className="sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 text-2xl focus:text-white focus:outline-none hover:text-white">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} text-center text-white px-2 pt-2 pb-4 sm:flex sm:items-center`}>{renderNavBarLinks()}</div>
            </header>
        </>
    )
}

export default Toolbar
