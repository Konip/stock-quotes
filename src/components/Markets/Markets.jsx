import React from 'react'
import CardContainer from '../Card/CardContainer'
import Footer from '../Footer/Footer'
import "./Markets.css"

const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"

export default function Markets() {
    return (
        <div className="markets">
            <div className="cards">
                <CardContainer title={"Акции"} type={STOCK} />
                <CardContainer title={"Валюты"} type={FOREX} />
                <CardContainer title={"Криптовалюты"} type={CRYPTO} />
            </div>
            <Footer />
        </div>
    )
}
