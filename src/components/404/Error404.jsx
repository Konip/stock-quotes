import React from 'react'
import "./Error404.css"

export default function Error404() {
    return (

        // <div className="bsod">
         <div className="bsod"> 
            <h1 className="neg title"><span className="bg">Error - 404</span></h1>
            <p>An error has occured, to continue:</p>
            <p>* Return to our homepage.<br />
                * Send us an e-mail about this error and try later.</p>
            <nav className="nav">
                <a href="#" className="link">index</a>&nbsp;|&nbsp;<a href="#" className="link">webmaster</a>
            </nav>
        </div>

    )
}