import React from 'react'
import Toolbar from '../Toolbar/Toolbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <div className="fixed top-0 z-10 w-full">
                <Toolbar />
            </div>
            <div className="mt-32">
                {children}
            </div>
            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </div>
    )
}

export default Layout
