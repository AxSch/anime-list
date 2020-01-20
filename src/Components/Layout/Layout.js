import React from 'react'
import Toolbar from '../Toolbar/Toolbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <div className="fixed top-0 z-10 w-full">
                <Toolbar />
            </div>
            <div className="mt-40">
                {children}
            </div>
            <div>
            <Footer />
                {/* <h1 className="bg-red-700">hi</h1> */}
            </div>
        </div>
    )
}

export default Layout
