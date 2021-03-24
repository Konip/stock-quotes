import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Row from '../Row/Row'
import Chart from './../Chart/Chart';
import "./Card.css"
import TimeFrames from '../TimeFrames/TimeFrames';

import { debounce } from "lodash";
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

const arrayRow = {
    STOCK: [
        { pair: "AAPL", name: "APPLE INC", img: apple },
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

const initial = {
    STOCK: "AAPL",
    FOREX: "USDEUR",
    CRYPTO: "BTCUSD",
}

const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"
const LOAD_DATA = "LOAD_DATA"

function Card({ title, type, request }) {

    const [activeItem, setActiveItem] = useState()
    const [activeTimeFrames, setActiveTimeFrames] = useState("1D")
    const data = useSelector((state) => state.stock[type])

    function req(type, time, pair) {
        // console.log(type)
        setActiveItem(pair);
        setActiveTimeFrames(time);

        request(type, time, pair);
    }

    // const req = debounce(request,3000)
    return (
        <div className="card">
            <div className="wrap">
                <div className="title">
                    {title}
                </div>
                <Chart data={data} active={activeTimeFrames}/>

                <TimeFrames active={activeTimeFrames}
                    onClickItem={(active) => req(type, active, !activeItem ? initial[type] : activeItem)} />

                <div className="rows">
                    {arrayRow[type].map((arr, index) => (
                        < Row key={`${arr.pair}${arr.name}`} pair={arr.pair} name={arr.name} img={arr.img} type={type}
                            active={activeItem} index={index} onClickItem={(pair) => req(type, activeTimeFrames, pair)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card
