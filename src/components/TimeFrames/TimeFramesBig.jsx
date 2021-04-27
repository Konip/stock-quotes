import "./TimeFramesBig.css"

const arrTimeFrames = {
    full: ["1D", "1W", "1M", "6M", "1Y", "All"],
    inco: ["1W", "1M", "6M", "1Y", "All"]
}
let data
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
