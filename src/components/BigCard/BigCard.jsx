import { useDispatch } from 'react-redux'
import BigChart from '../BigChart/BigChart'
import "./BigCard.css"
import TimeFramesBig from './../TimeFrames/TimeFramesBig';
import { addActive } from '../../store/stock-reducer';
import { initialReducer } from '../../db/initial';
import preloader from '../../assets/preloader.svg'

export default function BigCard({ type, request, activeRow, activeTime, data, colorTheme, description, sector, industry, currency,
    country, symbol, name, exchange, website, CEO, employees, paper, headquarters, code, frame, pair, secCurrency,
    demographics, loading
}) {

    const dispatch = useDispatch()
    let initialTime = "1W"
    if (activeTime !== initialTime) initialTime = activeTime

    function req(type, time, pair, frame) {
        if (initialReducer[type][pair]) {
            dispatch(addActive({ type, time, pair }))
        }
        request(type, time, pair, frame)
    }

    return (
        <div className="big-card">
            <div className="wrapper">
                <div className={colorTheme ? "top-card-light" : "top-card-dark"}>
                    {loading
                        ?
                        <img className="preloader-spinner" src={preloader} alt="" />
                        :
                        <BigChart data={data} active={initialTime} colorTheme={colorTheme} currency={currency} />
                    }
                </div>
                {country
                    //----------STOCK----------
                    ?
                    <div className="low-card">
                        <div className="left-block">
                            <div className={colorTheme ? "time-frames-light" : "time-frames-dark"}>
                                <TimeFramesBig active={initialTime} colorTheme={colorTheme} frame={frame}
                                    onClickItem={(active, frame) => req(type, active, pair, frame)} />
                            </div>

                            <div className={colorTheme ? "info-light" : "info-dark"}>
                                <div className="info-row">
                                    <strong>{symbol} </strong>{name}
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
                                    <div className={colorTheme ? "link" : "link-dark"}>
                                        <strong>Сайт: </strong>
                                        <a href={website}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16px" width="16px"
                                                viewBox="0 0 24 24" className="sc-16r8icm-0 kyoBCp"><path d="M11.877 15.9787C11.8146 16.8242 
                                            11.4524 17.6196 10.8555 18.2217L9.94675 19.1305C9.27191 19.7958 8.36141 20.1672 7.41381 
                                            20.1638C6.46621 20.1604 5.5584 19.7825 4.88834 19.1124C4.21828 18.4423 3.84034 17.5345 
                                            3.83695 16.5868C3.83355 15.6392 4.20497 14.7287 4.87021 14.0538L5.779 13.145C6.38116 
                                            12.5483 7.1765 12.186 8.02192 12.1235L9.67229 10.4731C8.76285 10.2319 7.80611 10.2331 
                                            6.89728 10.4766C5.98845 10.72 5.15923 11.1973 4.49215 11.8608L3.58335 12.7697C2.56946 
                                            13.7837 1.99991 15.159 2 16.5929C2.00009 18.0269 2.5698 19.4021 3.5838 20.416C4.59781 
                                            21.43 5.97305 21.9995 7.40698 21.9994C8.84092 21.9994 10.2161 21.4296 11.23 
                                            20.4156L12.1388 19.5068C12.802 18.8395 13.279 18.0102 13.5225 17.1014C13.7659 
                                            16.1926 13.7673 15.236 13.5265 14.3265L11.877 15.9787Z">
                                                </path><path d="M15.9793 11.8768C16.8248 11.8144 17.6202 11.4522 18.2222 
                                                10.8553L19.131 9.9465C19.7963 9.27163 20.1677 8.3611 20.1643 7.41348C20.1609 
                                                6.46585 19.783 5.55801 19.1129 4.88793C18.4429 4.21786 17.535 3.83991 16.5874 
                                                3.83651C15.6398 3.83312 14.7293 4.20455 14.0545 4.8698L13.1457 5.77863C12.549 
                                                6.3808 12.1868 7.17616 12.1242 8.02161L10.4738 9.67203C10.2327 8.76256 10.2339 
                                                7.80579 10.4773 6.89693C10.7208 5.98807 11.198 5.15883 11.8616 4.49173L12.7704 
                                                3.58291C13.7844 2.56899 15.1596 1.99943 16.5935 1.99951C18.0275 1.9996 19.4027 
                                                2.56932 20.4165 3.58336C21.4304 4.5974 22 5.97267 21.9999 7.40665C21.9998 8.84063 
                                                21.4301 10.2158 20.4161 11.2298L19.5073 12.1386C18.84 12.8018 18.0108 13.2789 
                                                17.102 13.5223C16.1932 13.7658 15.2366 13.7672 14.3271 13.5264L15.9793 11.8768Z">
                                                </path><path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 
                                                    16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 
                                                    15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 
                                                    7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 
                                                    16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 
                                                    8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 
                                                    16.4483 8.60535 16.544 8.36434 16.5441Z"></path>
                                            </svg>
                                            <strong>{website}</strong>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px"
                                                viewBox="0 0 24 24" className="sc-16r8icm-0 kyoBCp"><path d="M12 11.9998L20 4M20 4H14.1817M20 
                                            4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 
                                            4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                                    stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                                    strokeLinejoin="round"></path></svg>
                                        </a>
                                    </div>
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
                    //----------CRYPTO----------
                    paper ?
                        <div className="low-card">
                            <div className="left-block">
                                <div className={colorTheme ? "time-frames-light" : "time-frames-dark"}>
                                    <TimeFramesBig active={initialTime} colorTheme={colorTheme} frame={frame}
                                        onClickItem={(active, frame) => req(type, active, pair, frame)} />
                                </div>
                                <div className={colorTheme ? "info-light" : "info-dark"}>
                                    <div className="info-row">
                                        <strong>{name}</strong> {symbol}
                                    </div>
                                    <div className="info-row">
                                        <div className={colorTheme ? "link" : "link-dark"}>
                                            <a href={website}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16px" width="16px"
                                                    viewBox="0 0 24 24" className="sc-16r8icm-0 kyoBCp"><path d="M11.877 15.9787C11.8146 16.8242 
                                            11.4524 17.6196 10.8555 18.2217L9.94675 19.1305C9.27191 19.7958 8.36141 20.1672 7.41381 
                                            20.1638C6.46621 20.1604 5.5584 19.7825 4.88834 19.1124C4.21828 18.4423 3.84034 17.5345 
                                            3.83695 16.5868C3.83355 15.6392 4.20497 14.7287 4.87021 14.0538L5.779 13.145C6.38116 
                                            12.5483 7.1765 12.186 8.02192 12.1235L9.67229 10.4731C8.76285 10.2319 7.80611 10.2331 
                                            6.89728 10.4766C5.98845 10.72 5.15923 11.1973 4.49215 11.8608L3.58335 12.7697C2.56946 
                                            13.7837 1.99991 15.159 2 16.5929C2.00009 18.0269 2.5698 19.4021 3.5838 20.416C4.59781 
                                            21.43 5.97305 21.9995 7.40698 21.9994C8.84092 21.9994 10.2161 21.4296 11.23 
                                            20.4156L12.1388 19.5068C12.802 18.8395 13.279 18.0102 13.5225 17.1014C13.7659 
                                            16.1926 13.7673 15.236 13.5265 14.3265L11.877 15.9787Z">
                                                    </path><path d="M15.9793 11.8768C16.8248 11.8144 17.6202 11.4522 18.2222 
                                                10.8553L19.131 9.9465C19.7963 9.27163 20.1677 8.3611 20.1643 7.41348C20.1609 
                                                6.46585 19.783 5.55801 19.1129 4.88793C18.4429 4.21786 17.535 3.83991 16.5874 
                                                3.83651C15.6398 3.83312 14.7293 4.20455 14.0545 4.8698L13.1457 5.77863C12.549 
                                                6.3808 12.1868 7.17616 12.1242 8.02161L10.4738 9.67203C10.2327 8.76256 10.2339 
                                                7.80579 10.4773 6.89693C10.7208 5.98807 11.198 5.15883 11.8616 4.49173L12.7704 
                                                3.58291C13.7844 2.56899 15.1596 1.99943 16.5935 1.99951C18.0275 1.9996 19.4027 
                                                2.56932 20.4165 3.58336C21.4304 4.5974 22 5.97267 21.9999 7.40665C21.9998 8.84063 
                                                21.4301 10.2158 20.4161 11.2298L19.5073 12.1386C18.84 12.8018 18.0108 13.2789 
                                                17.102 13.5223C16.1932 13.7658 15.2366 13.7672 14.3271 13.5264L15.9793 11.8768Z">
                                                    </path><path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 
                                                    16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 
                                                    15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 
                                                    7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 
                                                    16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 
                                                    8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 
                                                    16.4483 8.60535 16.544 8.36434 16.5441Z"></path>
                                                </svg>
                                                <strong>{website}</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px"
                                                    viewBox="0 0 24 24" className="sc-16r8icm-0 kyoBCp"><path d="M12 11.9998L20 4M20 4H14.1817M20 
                                            4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 
                                            4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                                        stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                                        strokeLinejoin="round"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="info-row">
                                        <div className={colorTheme ? "link" : "link-dark"}>
                                            <a href={code}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px" viewBox="0 0 24 24"
                                                    className="sc-16r8icm-0 kyoBCp"><path d="M7 8L3 12L7 16M17 8L21 12L17 16" stroke="currentColor"
                                                        strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M10 19L14 5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                                        strokeLinejoin="round"></path></svg>
                                                <strong>Исходный код</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px"
                                                    viewBox="0 0 24 24" className="sc-16r8icm-0 kyoBCp"><path d="M12 11.9998L20 4M20 4H14.1817M20 
                                            4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 
                                            4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                                        stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                                        strokeLinejoin="round"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="info-row">
                                        <div className={colorTheme ? "link" : "link-dark"}>
                                            <a href={paper}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px"
                                                    viewBox="0 0 24 24" className="sc-16r8icm-0 kyoBCp"><path d="M13.75 3H6.75C6.28587 
                                            3 5.84075 3.18964 5.51256 3.52721C5.18437 3.86477 5 4.32261 5 4.8V19.2C5 19.6774 
                                            5.18437 20.1352 5.51256 20.4728C5.84075 20.8104 6.28587 21 6.75 21H17.25C17.7141 
                                            21 18.1592 20.8104 18.4874 20.4728C18.8156 20.1352 19 19.6774 19 19.2V8.4M13.75 3L19 
                                            8.4M13.75 3V8.4H19M15.5 12.9H8.5M15.5 16.5H8.5M10.25 9.3H8.5" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                <strong>Белая книга</strong>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="16px" width="16px"
                                                    viewBox="0 0 24 24" className="sc-16r8icm-0 kyoBCp"><path d="M12 11.9998L20 4M20 4H14.1817M20 
                                            4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 
                                            4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                                        stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                                        strokeLinejoin="round"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={colorTheme ? "right-block-light" : "right-block-dark"}>
                                <div className={colorTheme ? "description-light" : "description-dark"}>
                                    <div className="description-row">
                                        <strong>{name} </strong>{description}
                                    </div>
                                </div>
                            </div>
                        </div>
                        //----------FOREX----------
                        :
                        <div className="low-card">
                            <div className="left-block">
                                <div className={colorTheme ? "time-frames-light" : "time-frames-dark"}>
                                    <TimeFramesBig active={initialTime} colorTheme={colorTheme} frame={frame}
                                        onClickItem={(active, frame) => req(type, active, pair, frame)} />
                                </div>
                                <div className={colorTheme ? "info-light" : "info-dark"}>
                                    {name &&
                                        <div className="info-row">
                                            <strong>{`1 ${name}`}</strong>{` равен `}
                                            <strong>{data[data.length - 1].y}{` ${secCurrency}`}</strong>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className={colorTheme ? "right-block-light" : "right-block-dark"}>
                                {description &&
                                    <div className="info-row">
                                        <strong>Страны обращения:</strong> {demographics}
                                    </div>
                                }
                                <div className="info-row">
                                    <strong>{name} </strong>{description}
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
