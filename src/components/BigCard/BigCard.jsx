import { useDispatch } from 'react-redux'
import BigChart from '../BigChart/BigChart'
import "./BigCard.css"
import TimeFramesBig from './../TimeFrames/TimeFramesBig';
import { addActive } from '../../store/stock-reducer';

export default function BigCard({ type, request, activeRow, activeTime, data, colorTheme, description, sector, industry, currency }) {
    // console.log(data)
    const dispatch = useDispatch()

    function req(type, time, pair) {
        dispatch(addActive({ type, time, pair }))
        request(type, time, pair)
    }

    return (
        <div className="big-card">
            <div className="wrapper">

                <div className={colorTheme ? "top-card-light" : "top-card-dark"}>
                    <BigChart data={data} active={activeTime} colorTheme={colorTheme} currency={currency} />
                </div>
                <div className="low-card">
                    <div className="left-block">
                        <div className={colorTheme ? "time-frames-light" : "time-frames-dark"}>
                            <TimeFramesBig active={activeTime} colorTheme={colorTheme}
                                onClickItem={(active) => req(type, active, activeRow)} />
                        </div>
                        <div className={colorTheme ? "text-light" : "text-dark"}>
                            <strong>Здесь могла быть ваша реклама</strong>
                        </div>
                    </div>

                    <div className={colorTheme ? "right-block-light" : "right-block-dark"}>
                        <div className={colorTheme ? "news-light" : "news-dark"}>
                            <strong>{sector ? `Сектор: ${sector}` : ""}</strong> <br />
                            <strong>{industry ? `Отрасль: ${industry}` : ""}</strong> <br />
                            <br />
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
