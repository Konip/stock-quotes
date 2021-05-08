import React from 'react'
import "./BigChart.css"
import { Line } from 'react-chartjs-2'
import * as plugins from "chartjs-plugin-crosshair"
import Lottie from '../Lottie/Lottie'


export default function BigChart({ data, active, colorTheme, currency }) {
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
            mode: 'index',
            intersect: false,
            axis: 'x',
            callbacks: {
                label: function (tooltipItem, data) {
                    return ` ${currency} ${tooltipItem.value}`
                }
            }
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
                        display: false,
                    },
                    type: "time",
                    time: {
                        unit: "day",
                        tooltipFormat: "ll",

                    },
                    // distribution: 'series',
                }
            ],
            yAxes: [
                {
                    position: 'right',
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
            mode: 'index',
            intersect: false,
            axis: 'x',
            callbacks: {
                label: function (tooltipItem, data) {
                    return ` ${currency} ${tooltipItem.value}`
                }
            }
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
                        display: false,
                    },
                    type: "time",
                    time: {
                        unit: "day",
                        tooltipFormat: "ll",

                    },
                    ticks: {
                        padding: 0,
                        margin: 0,
                    },
                    // distribution: 'series',
                }
            ],
            yAxes: [
                {
                    position: 'right',
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
            mode: 'index',
            intersect: false,
            axis: 'x',
            callbacks: {
                label: function (tooltipItem, data) {
                    return ` ${currency} ${tooltipItem.value}`
                }
            }
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
                        display: false,
                    },
                    type: "time",
                    time: {
                        parser: "YYYY-MM-DD HH:mm",
                        tooltipFormat: "D MMM HH:mm",
                    },
                }
            ],
            yAxes: [
                {
                    type: 'linear',
                    position: 'right',
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
            mode: 'index',
            intersect: false,
            axis: 'x',
            callbacks: {
                label: function (tooltipItem, data) {
                    return ` ${currency} ${tooltipItem.value}`
                }
            }
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
                        display: false,
                    },
                    type: "time",
                    time: {
                        parser: "YYYY-MM-DD HH:mm",
                        tooltipFormat: "D MMM HH:mm",
                    },
                }
            ],
            yAxes: [
                {
                    type: 'linear',
                    position: 'right',
                    gridLines: {
                        display: false,
                    },
                }
            ]
        },

    }
    return (
        <div className="big-chart">
            {data && data.length > 0 ?
                <Line options={active === "1D" && colorTheme ? options1DayBlack : active === "1D" && !colorTheme ? options1DayWhite :
                    colorTheme ? optionsBlack : optionsWhite}
                    data={
                        colorTheme ?
                            {
                                datasets: [
                                    {
                                        backgroundColor: "rgba(216,240,250,1)",
                                        borderColor: "rgba(117,134,150,1)",
                                        pointHoverBackgroundColor: "#000000",
                                        color: "#000000",
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
                                        color: "#000000",
                                        data: data,
                                        tension: 0,
                                    }
                                ],
                            }
                    } />
                :
                <div className="big-preloader">
                    <Lottie />
                </div>

            }
        </div>
    )
}
