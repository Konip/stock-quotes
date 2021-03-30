import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <Link to="markets">
                <h1>Markets</h1>
            </Link>
        </div>
    )
}
