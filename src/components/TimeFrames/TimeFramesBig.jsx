import "./TimeFramesBig.css"


export default function TimeFramesBig({ active, onClickItem }) {
    const arrTimeFrames = ["1D", "1W", "1M"]

    return (
        <div className="time-big">
            <ul>
                {arrTimeFrames.map((arr, index) => (
                    <li className={active == arr ? "time active" : "time"}
                        key={index} onClick={() => onClickItem(arr)}>
                        <span>{arr}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
