import React from 'react'
import CardContainer from '../Card/CardContainer'
import "./Home.css"

const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"

export default function Home() {
    return (
        <div className="markets">
            <CardContainer title={"Акции"} type={STOCK} delay={1}/>
            <CardContainer title={"Валюты"} type={FOREX} delay={2}/>
            <CardContainer title={"Криптовалюты"} type={CRYPTO} delay={3}/>
        </div>
    )
}
