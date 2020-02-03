import React from 'react'
import Toolbar from '../Toolbar/Toolbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className="absolute">
            <div className="fixed top-0 z-10 w-full">
                <Toolbar />
            </div>
            <div className="mt-32 w-screen">
                {children}
            </div>
            <div id="trailer-div" className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </div>
    )
}

export default Layout
