import React from 'react'
import CardContainer from '../Card/CardContainer'
import "./Home.css"

const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"

export default function Home() {
    return (
        <div className="markets">
            <div className="cards">
                <CardContainer title={"Акции"} type={STOCK} />
                <CardContainer title={"Валюты"} type={FOREX} />
                <CardContainer title={"Криптовалюты"} type={CRYPTO} />
            </div>
        </div>
    )
}
