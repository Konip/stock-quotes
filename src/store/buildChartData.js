
export function buildChartData(data, type, time, pair = '') {
    // debugger
    // console.log(type, time, pair)
    const chartData = []
    let y = ""
    let count = 0
    let toggle = false
    let pair1 = pair.slice(3)
    
    const response = {
        STOCK: {
            "1D": "4. close",
            "1W": "5. adjusted close",
            "1M": "5. adjusted close",
            "6M": "5. adjusted close",
            "1Y": "5. adjusted close",
            "All": "5. adjusted close",
        },
        FOREX: "4. close",
        CRYPTO: `4a. close (${pair1})`,
        // CRYPTO: "4b. close (USD)"
    }
    const amountOfData = {
        STOCK: {
            "1W": 5,
            "1M": 22,
            "6M": 27,
            "1Y": 53,
            "All": 100,
        },
        FOREX: {
            "1W": 7,
            "1M": 22,
            "6M": 27,
            "1Y": 53,
            "All": 100,
        },
        CRYPTO: {
            "1W": 7,
            "1M": 30,
            "6M": 27,
            "1Y": 53,
            "All": 100,
        }
    }

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
        count = amountOfData[type][time]

        if (type === "STOCK") y = response[type][time]
        else y = response[type]


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
