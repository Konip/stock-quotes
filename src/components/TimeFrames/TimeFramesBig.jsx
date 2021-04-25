import "./TimeFramesBig.css"

const arrTimeFrames = {
    full: ["5m", "15m", "1H", "1D", "1W", "1M", "All"],
    inco: ["1D", "1W", "1M"]
}

export default function TimeFramesBig({ active, onClickItem, colorTheme, frame }) {

    return (
        <div className="timeBig">
            <ul>
                {frame && arrTimeFrames[frame].map((arr, index) => (
                    <li className={active === arr && colorTheme ? "timeBig-light active" : active === arr && !colorTheme ? "timeBig-dark active" :
                        active !== arr && colorTheme ? "timeBig-light" : "timeBig-dark"}
                        key={index} onClick={() => onClickItem(arr, frame)}>
                        <span className={colorTheme ? "date-light" : "date-dark"}>{arr}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
