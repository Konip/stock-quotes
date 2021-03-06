import { useDispatch } from 'react-redux';
import Chart from './../Chart/Chart';
import "./Card.css"
import TimeFrames from '../TimeFrames/TimeFrames';
import { addActive, addActiveType } from '../../store/stock-reducer';
import Row from './../Row/Row';
import { initial } from '../../db/initial'
import { Link } from 'react-router-dom';
import { initialReducer } from '../../db/initial'
import preloader from '../../assets/preloader.svg'

export default function Card({ title, type, request, activeRow, activeTime, data, colorTheme,
    activeType, pair, loading, delay }) {

    const dispatch = useDispatch()

    function req(type, time, pair, frame) {
        if (initialReducer[type][pair]) {
            dispatch(addActive({ type, time, pair }))
        }

        dispatch(addActiveType(type))
        request(type, time, pair, frame)
    }

    return (
        <div className={colorTheme ? "card-light" : "card-dark"}>
            <div className="wrap">
                <div className={colorTheme ? "title-light" : "title-dark"}
                style={{animationDelay: `${0.5 + delay * 0.1}s`}}
                >
                    {title}
                </div>
                {loading
                    ?
                    <div className="wrap-preloader">
                        <img className="preloader-spinner" src={preloader} alt="" />
                    </div>
                    :
                    <Chart data={data} active={activeTime} colorTheme={colorTheme} />
                }

                <TimeFrames active={activeTime} colorTheme={colorTheme}
                    // frame={frame}
                    onClickItem={(active, frame) => req(type, active, activeRow, frame)} />

                <div className="rows">
                    {initial[type].map((arr, index) => (
                        < Row key={`${arr.pair}${arr.name}`} pair={arr.pair} name={arr.name} img={colorTheme ? arr.img : arr.imgD} type={type}
                            active={activeRow} index={index} onClickItem={(pair, frame) => req(type, activeTime, pair, frame)}
                            colorTheme={colorTheme} frame={arr.time}
                        />
                    ))}
                </div>
                <div className='wrap-widget'>
                    <Link to={`/stock-market/${type}`} className={colorTheme ? "widget-light" : "widget-dark"}>
                        ???????????? ??????????
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="8" height="14"><path fill="none" fillRule="evenodd"
                            stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M2 2l4 5-4 5"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}