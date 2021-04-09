import "./TimeFrames.css"


export default function TimeFrames({ active, onClickItem, colorTheme }) {
    const arrTimeFrames = ["1D", "1W", "1M"]

    return (
        <div className="time">
            <ul>
                {arrTimeFrames.map((arr, index) => (
                    <li className={active === arr && colorTheme ? "time-light active" : active === arr && !colorTheme ? "time-dark active" :
                    active !== arr && colorTheme ? "time-light" : "time-dark"}
                        key={index} onClick={() => onClickItem(arr)}>
                        <span className={colorTheme ? "date-light" : "date-dark"}>{arr}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
