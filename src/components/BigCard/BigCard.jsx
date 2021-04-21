import { useDispatch } from 'react-redux'
import BigChart from '../BigChart/BigChart'
import "./BigCard.css"
import TimeFramesBig from './../TimeFrames/TimeFramesBig';
import { addActive } from '../../store/stock-reducer';

export default function BigCard({ type, request, activeRow, activeTime, data, colorTheme, description, sector, industry, currency,
    country, symbol, companyName, exchange, website, CEO, employees, paper, headquarters }) {
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
                {country
                    ?
                    <div className="low-card">
                        <div className="left-block">
                            <div className={colorTheme ? "time-frames-light" : "time-frames-dark"}>
                                <TimeFramesBig active={activeTime} colorTheme={colorTheme}
                                    onClickItem={(active) => req(type, active, activeRow)} />
                            </div>

                            <div className={colorTheme ? "info-light" : "info-dark"}>
                                <div className="info-row">
                                    <strong>{symbol} </strong>{companyName}
                                </div>
                                <div className="info-row">
                                    <strong>Страна: </strong>{country}
                                </div>
                                <div className="info-row">
                                    <strong>Штаб-квартира: </strong>{headquarters}
                                </div>
                                <div className="info-row">
                                    <strong>Биржа: </strong>{exchange}
                                </div>
                                <div className="info-row">
                                    <strong>Сайт: </strong><a href={website}>{website}</a>
                                </div>
                                <div className="info-row">
                                    <strong>Исполнительный директор: </strong>{CEO}
                                </div>
                                <div className="info-row">
                                    <strong>Число сотрудников: </strong>{employees}
                                </div>
                            </div>
                        </div>

                        <div className={colorTheme ? "right-block-light" : "right-block-dark"}>
                            <div className={colorTheme ? "description-light" : "description-dark"}>
                                <div className="info-row">
                                    <strong>Сектор: </strong>{sector}
                                </div>
                                <div className="info-row">
                                    <strong>Отрасль: </strong>{industry}
                                </div>
                                <div className="description-row">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    paper ?
                        <div className="low-card">
                            <div className="left-block">
                                <div className={colorTheme ? "time-frames-light" : "time-frames-dark"}>
                                    <TimeFramesBig active={activeTime} colorTheme={colorTheme}
                                        onClickItem={(active) => req(type, active, activeRow)} />
                                </div>
                                <div className={colorTheme ? "info-light" : "info-dark"}>
                                    <div className="info-row">
                                        <strong>{companyName}</strong> {symbol}
                                    </div>
                                    <div className="info-row">
                                        <strong>Сайт: </strong>{website}
                                    </div>
                                    <div className="info-row">
                                        <a href={paper}><strong>Белая книга: </strong></a>
                                    </div>
                                </div>
                            </div>

                            <div className={colorTheme ? "right-block-light" : "right-block-dark"}>
                                <div className={colorTheme ? "description-light" : "description-dark"}>
                                <div className="description-row">
                                    {description}
                                </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="low-card">
                            <div className="left-block">
                                <div className={colorTheme ? "time-frames-light" : "time-frames-dark"}>
                                    <TimeFramesBig active={activeTime} colorTheme={colorTheme}
                                        onClickItem={(active) => req(type, active, activeRow)} />
                                </div>
                                <div className={colorTheme ? "info-light" : "info-dark"}></div>
                            </div>
                            <div className={colorTheme ? "right-block-light" : "right-block-dark"}></div>
                        </div>
                }
            </div>
        </div>
    )
}
