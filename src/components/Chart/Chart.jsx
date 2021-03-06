import React from 'react'
import "./Chart.css"
import { Line } from 'react-chartjs-2'
import Lottie from '../Lottie/Lottie'

const optionsWhite = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "nearest",
        intersect: false,
    },
    plugins: {
        crosshair: {
            line: {
                color: 'white',  // crosshair line color
                width: 1        // crosshair line width
            },
            sync: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
        }
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: true,
                },
                type: "time",
                time: {
                    unit: "day",
                    tooltipFormat: "ll",

                },
                // distribution: 'series',
                ticks: {
                    display: true
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
            }
        ]
    },

}
const optionsBlack = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "nearest",
        intersect: false,
    },
    plugins: {
        crosshair: {
            line: {
                color: 'black',  // crosshair line color
                width: 1        // crosshair line width
            },
            sync: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
        }
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: true,
                },
                type: "time",
                time: {
                    unit: "day",
                    tooltipFormat: "ll",

                },
                // distribution: 'series',
                ticks: {
                    display: true
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
            }
        ]
    },

}
const options1DayWhite = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "nearest",
        intersect: false,
    },
    plugins: {
        crosshair: {
            line: {
                color: 'white',  // crosshair line color
                width: 1        // crosshair line width
            },
            sync: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
        }
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    parser: "YYYY-MM-DD HH:mm",
                    tooltipFormat: "D MMM HH:mm",
                },
                ticks: {
                    display: true
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
            }
        ]
    },
}
const options1DayBlack = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "nearest",
        intersect: false,
    },
    plugins: {
        crosshair: {
            line: {
                color: 'black',  // crosshair line color
                width: 1        // crosshair line width
            },
            sync: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
        }
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: true,
                },
                type: "time",
                time: {
                    parser: "YYYY-MM-DD HH:mm",
                    tooltipFormat: "D MMMM HH:mm",
                },
                ticks: {
                    display: true
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
            }
        ]
    },
}

export default function Chart({ data, active, colorTheme }) {
    let options = active === "1D" && colorTheme ? options1DayBlack : active === "1D" && !colorTheme ? options1DayWhite : colorTheme ? optionsBlack : optionsWhite
    return (
        <div className={colorTheme ? "chart-light" : "chart-dark"}>
            {data && data.length > 0 ?

                <Line options={options}

                    data={
                        colorTheme ?
                            {
                                datasets: [
                                    {
                                        backgroundColor: "rgba(216,240,250,1)",
                                        borderColor: "rgba(117,134,150,1)",
                                        pointHoverBackgroundColor: "#000000",
                                        fillStyle: "black",
                                        data: data,
                                        tension: 0,
                                    }
                                ],
                            }
                            :
                            {
                                datasets: [
                                    {
                                        backgroundColor: "rgb(30 48 70)",
                                        borderColor: "rgb(33 135 218)",
                                        pointHoverBackgroundColor: "#000000",
                                        data: data,
                                        tension: 0,
                                    }
                                ],
                            }
                    } />
                :
                <div className="preloader">
                    <Lottie />
                </div>
            }
        </div>
    )
}