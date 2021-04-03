import "./TimeFrames.css"


export default function TimeFrames({ active, onClickItem }) {
    const arrTimeFrames = ["1D", "1W", "1M"]

    return (
        <div className="time">
            <ul>
                {arrTimeFrames.map((arr, index) => (
                    <li className={active == arr ? "time active" : "time"}
                        key={index} onClick={() => onClickItem(arr)}>
                        <span className="date">{arr}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
