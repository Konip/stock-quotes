import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Chart from './../Chart/Chart';
import "./Card.css"
import TimeFrames from '../TimeFrames/TimeFrames';

import apple from "../../assets/apple.svg"
import tesla from "../../assets/tesla.svg"
import spotify from "../../assets/spotify1.svg"
import intel from "../../assets/intel.svg"
import amazon from "../../assets/amazon1.svg"
import microsoft from "../../assets/microsoft.svg"
import YENGBP from "../../assets/YENGBP.svg"
import USDEUR from "../../assets/USDEUR.svg"
import BYNGBP from "../../assets/BYNGBP.svg"
import USDILS from "../../assets/USDILS.svg"
import EURINR from "../../assets/EURINR.svg"
import EURTWD from "../../assets/EURTWD.svg"
import bitcoin from "../../assets/bitcoin.svg"
import litecoin from "../../assets/litecoin.svg"
import ripple from "../../assets/ripple.svg"
import etherium from "../../assets/etherium.svg"
import monero from "../../assets/monero.svg"
import zcash from "../../assets/zcash.svg"
import { addActive, addActiveType } from '../../store/stock-reducer';
import Row from './../Row/Row';


const arrayRow = {
    STOCK: [
        { pair: "AAPL", name: "APPLE INC", img: apple },
        { pair: "TSLA", name: "TESLA INC", img: tesla },
        { pair: "SPOT", name: "SPOTIFY TECHNOLOGY S.A", img: spotify },
        { pair: "INTC", name: "INTEL CORP", img: intel },
        { pair: "AMZN", name: "AMAZON COM INC", img: amazon },
        { pair: "MSFT", name: "MICROSOFT CORPORATION", img: microsoft },
    ],
    FOREX: [
        { pair: "USDEUR", name: "Доллар США / Евро", img: USDEUR },
        { pair: "JPYGBP", name: "Японская иена / Британский фунт", img: YENGBP },
        { pair: "EURINR", name: "Евро / Индийская рупия", img: EURINR },
        { pair: "USDILS", name: "Доллар США  / Новый израильский шекель", img: USDILS },
        { pair: "BYNGBP", name: "Белорусский рубль / Британский фунт", img: BYNGBP },
        { pair: "EURTWD", name: "Евро / Новый тайваньский доллар", img: EURTWD },
    ],
    CRYPTO: [
        { pair: "BTCUSD", name: "Биткоин / Доллар США", img: bitcoin },
        { pair: "ETHUSD", name: "Эфириум / Доллар США", img: etherium },
        { pair: "LTCUSD", name: "Лайткоин / Доллар США", img: litecoin },
        { pair: "XRPUSD", name: "Рипл / Доллар США", img: ripple },
        { pair: "XMRUSD", name: "Монеро / Доллар США", img: monero },
        { pair: "ZECUSD", name: "Zcash / Доллар США", img: zcash },
    ],
}

function Card({ title, type, request, activeRow, activeTime, data, colorTheme }) {
    const dispatch = useDispatch()

    function req(type, time, pair) {
        dispatch(addActive({ type, time, pair }))
        dispatch(addActiveType(type))
        request(type, time, pair);
    }
    console.log(activeTime)
    return (
        <div className={colorTheme ? "card-light" : "card-dark"}>
            <div className="wrap">
                <div className={colorTheme ? "title-light" : "title-dark"}>
                    {title}
                </div>
                <Chart data={data} active={activeTime} colorTheme={colorTheme} />

                <TimeFrames active={activeTime} colorTheme={colorTheme}
                    onClickItem={(active) => req(type, active, activeRow)} />

                <div className="rows">
                    {arrayRow[type].map((arr, index) => (
                        < Row key={`${arr.pair}${arr.name}`} pair={arr.pair} name={arr.name} img={arr.img} type={type}
                            active={activeRow} index={index} onClickItem={(pair) => req(type, activeTime, pair)}
                            colorTheme={colorTheme}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card
