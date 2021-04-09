
export function buildChartData(data, type, time) {
    // debugger
    // console.log(data)
    const chartData = []
    let y = ""
    let count = 0
    let toggle = false

    if (time === "1D" && type === "CRYPTO") {

        for (let d of data) {

            let x = d.time_close
            let NewDataPoint = {
                x: `${x.slice(0, 10)} ${x.slice(11, 19)}`,
                y: d.price_close
            }
            chartData.push(NewDataPoint)
        }
    }

    else {

        if (time === "1D") toggle = true
        else if (time === "1W") count = 7
        else if (time === "1M") count = 30

        switch (type) {
            case "STOCK":
            case "FOREX": {
                y = "4. close"
                break
            }
            case "CRYPTO": {
                y = "4b. close (USD)"
                break
            }
        }

        for (let d in data) {
            if (time !== "1D" && count > 0 || toggle === true) {
                let NewDataPoint = {
                    x: d,
                    y: data[d][y]
                }
                chartData.push(NewDataPoint)
                count--
            }
            else break
        }
    }

    chartData.reverse()
    // console.log(chartData)
    return chartData
}
