

export function buildChartData(data, type) {
    // console.log(data)
    const chartData = []

    for (let d in data) {
        let y = ""

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

        let NewDataPoint = {
            x: d,
            y: data[d][y]
        }
        chartData.push(NewDataPoint)
    }
    chartData.reverse()
    // console.log(chartData)
    return chartData
}
