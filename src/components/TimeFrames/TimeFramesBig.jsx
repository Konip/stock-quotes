import "./TimeFramesBig.css"


export default function TimeFramesBig({ active, onClickItem, colorTheme }) {
    const arrTimeFrames = ["1D", "1W", "1M"]

    return (
        <div className="timeBig">
            <ul>
                {arrTimeFrames.map((arr, index) => (
                     <li className={active === arr && colorTheme ? "timeBig-light active" : active === arr && !colorTheme ? "timeBig-dark active" :
                     active !== arr && colorTheme ? "timeBig-light" : "timeBig-dark"}
                        key={index} onClick={() => onClickItem(arr)}>
                        <span className={colorTheme ? "date-light" : "date-dark"}>{arr}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
