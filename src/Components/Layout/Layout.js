import React from 'react'
import Toolbar from '../Toolbar/Toolbar'

const Layout = ({ children }) => {
    return (
        <div className="relative">
            <div className="fixed top-0 z-10 w-full">
                <Toolbar />
            </div>
            <div className="absolute" style={{top: '100px'}}>
                {children}
            </div>
        </div>
    )
}

export default Layout
