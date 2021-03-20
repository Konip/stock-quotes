import Chart from './../Chart/Chart';
import "./Card.css"
import React, { useState } from 'react'
import Row from '../Row/Row'
import apple from "../../assets/apple.svg"
import tesla from "../../assets/tesla.svg"
import spotify from "../../assets/spotify1.svg"
import intel from "../../assets/intel.svg"
import amazon from "../../assets/amazon1.svg"
import YENGBP from "../../assets/YENGBP.svg"
import USDEUR from "../../assets/USDEUR.svg"
import BYNGBP from "../../assets/BYNGBP.svg"
import USDILS from "../../assets/USDILS.svg"
import EURINR from "../../assets/EURINR.svg"
import bitcoin from "../../assets/bitcoin.svg"
import litecoin from "../../assets/litecoin.svg"
import ripple from "../../assets/ripple.svg"
import etherium from "../../assets/etherium.svg"
import monero from "../../assets/monero.svg"
import { useSelector } from 'react-redux';


const arrayRow = {
    STOCK: [
        { pair: "APPL", name: "APPLE INC", img: apple },
        { pair: "TSLA", name: "TESLA INC", img: tesla },
        { pair: "SPOT", name: "SPOTIFY TECHNOLOGY S.A", img: spotify },
        { pair: "INTC", name: "INTEL CORP", img: intel },
        { pair: "AMZN", name: "AMAZON COM INC", img: amazon },
    ],
    FOREX: [
        { pair: "USDEUR", name: "Доллар США / Евро", img: USDEUR },
        { pair: "JPYGBP", name: "Японская иена / Британский фунт", img: YENGBP },
        { pair: "EURINR", name: "Евро / Индийская рупия", img: EURINR },
        { pair: "USDILS", name: "Доллар США  / Новый израильский шекель", img: USDILS },
        { pair: "BYNGBP", name: "Белорусский рубль / Британский фунт", img: BYNGBP },
    ],
    CRYPTO: [
        { pair: "BTCUSD", name: "Биткоин / Доллар США", img: bitcoin },
        { pair: "ETHUSD", name: "Эфириум / Доллар США", img: etherium },
        { pair: "LTCUSD", name: "Лайткоин / Доллар США", img: litecoin },
        { pair: "XRPUSD", name: "Рипл / Доллар США", img: ripple },
        { pair: "XMRUSD", name: "Монеро / Доллар США", img: monero },
    ],
}

export default function Card({ title, row, type }) {

    const [activeItem, setActiveItem] = useState()
    // console.log(activeItem)
    const data = useSelector((state) => state.stock[type])
    // console.log(STOCK)
    return (
        <div className="card">
            <div className="wrap">
                <div className="title">
                    {title}
                </div>
                <Chart data={data} />
                <div className="rows">
                    {arrayRow[type].map((arr, index) => (
                        < Row key={`${arr.pair}${arr.name}`} pair={arr.pair} name={arr.name} img={arr.img} type={type}
                            active={activeItem} index={index} onClickItem={i => setActiveItem(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

