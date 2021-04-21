import { useDispatch } from 'react-redux';
import Chart from './../Chart/Chart';
import "./Card.css"
import TimeFrames from '../TimeFrames/TimeFrames';
import { addActive, addActiveType } from '../../store/stock-reducer';
import Row from './../Row/Row';
import { initial } from '../../db/initial'
import { Link } from 'react-router-dom';
import { db } from '../../db/db'


export default function Card({ title, type, request, activeRow, activeTime, data, colorTheme }) {
    const dispatch = useDispatch()

    function req(type, time, pair) {
        dispatch(addActive({ type, time, pair }))
        dispatch(addActiveType(type))
        request(type, time, pair)
    }
    // db.map(d => {
    //     console.log(d.name)
    // })
    // for (let i = 0; db.length > i; i++) {
    //     let low = db[i].name.toLowerCase().slice(1)
    //     let up = db[i].name[0].toUpperCase()
    //     let nw = up + low
    //     // for (let j = 0; low.length > j; j++) {
    //     //     if(j == 0) {
    //     //         return low[j].toUpperCase
    //     //     }
    //     // }
    //     db[i].name = nw
    //     console.log(db[i])
    // }
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
                    {initial[type].map((arr, index) => (
                        < Row key={`${arr.pair}${arr.name}`} pair={arr.pair} name={arr.name} img={colorTheme ? arr.img : arr.imgD} type={type}
                            active={activeRow} index={index} onClickItem={(pair) => req(type, activeTime, pair)}
                            colorTheme={colorTheme}
                        />
                    ))}
                </div>
                <div className='wrap-widget'>
                    <Link to={`/stock-market/${type}`} className={colorTheme ? "widget-light" : "widget-dark"}>
                        Больше акций
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="8" height="14"><path fill="none" fill-rule="evenodd"
                            stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M2 2l4 5-4 5"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}