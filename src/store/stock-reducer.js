import { buildChartData } from "./buildChartData"
import { dataAPI, startAPI } from './../API/API';
import { initialReducer } from '../db/initial'
import { description } from '../db/description'
import { db } from '../db/db'

const ADD_DATA_STOCK = "ADD_DATA_STOCK"
const ADD_DATA_FOREX = "ADD_DATA_FOREX"
const ADD_DATA_CRYPTO = "ADD_DATA_CRYPTO"
const ACTIVE = "ACTIVE"
const ACTIVE_TYPE = "ACTIVE_TYPE"
const COLOR_THEME = "COLOR_THEME"
const CHART = "CHART"
const DESCRIPTION = "DESCRIPTION"
const CURRENCY = "CURRENCY"
const TIME_FRAMES = "TIME_FRAMES"
const PAIR = "PAIR"
const CHART_TIMER = "CHART_TIMER"

const initialState = {
    STOCK: [
        {
            x: '2021-04-23 11:45:00',
            y: '134.3410'
        },
        {
            x: '2021-04-23 11:50:00',
            y: '134.5500'
        },
        {
            x: '2021-04-23 11:55:00',
            y: '134.5001'
        },
        {
            x: '2021-04-23 12:00:00',
            y: '134.3800'
        },
        {
            x: '2021-04-23 12:05:00',
            y: '134.4199'
        },
        {
            x: '2021-04-23 12:10:00',
            y: '134.5099'
        },
        {
            x: '2021-04-23 12:15:00',
            y: '134.3350'
        },
        {
            x: '2021-04-23 12:20:00',
            y: '134.2900'
        },
        {
            x: '2021-04-23 12:25:00',
            y: '134.2850'
        },
        {
            x: '2021-04-23 12:30:00',
            y: '134.2800'
        },
        {
            x: '2021-04-23 12:35:00',
            y: '134.3906'
        },
        {
            x: '2021-04-23 12:40:00',
            y: '134.1650'
        },
        {
            x: '2021-04-23 12:45:00',
            y: '134.3450'
        },
        {
            x: '2021-04-23 12:50:00',
            y: '134.5100'
        },
        {
            x: '2021-04-23 12:55:00',
            y: '134.5450'
        },
        {
            x: '2021-04-23 13:00:00',
            y: '134.5900'
        },
        {
            x: '2021-04-23 13:05:00',
            y: '134.5400'
        },
        {
            x: '2021-04-23 13:10:00',
            y: '134.7084'
        },
        {
            x: '2021-04-23 13:15:00',
            y: '134.6600'
        },
        {
            x: '2021-04-23 13:20:00',
            y: '134.7448'
        },
        {
            x: '2021-04-23 13:25:00',
            y: '134.7100'
        },
        {
            x: '2021-04-23 13:30:00',
            y: '134.7361'
        },
        {
            x: '2021-04-23 13:35:00',
            y: '134.7600'
        },
        {
            x: '2021-04-23 13:40:00',
            y: '134.9800'
        },
        {
            x: '2021-04-23 13:45:00',
            y: '134.8821'
        },
        {
            x: '2021-04-23 13:50:00',
            y: '134.8670'
        },
        {
            x: '2021-04-23 13:55:00',
            y: '134.8400'
        },
        {
            x: '2021-04-23 14:00:00',
            y: '134.6210'
        },
        {
            x: '2021-04-23 14:05:00',
            y: '134.7583'
        },
        {
            x: '2021-04-23 14:10:00',
            y: '134.8780'
        },
        {
            x: '2021-04-23 14:15:00',
            y: '134.9300'
        },
        {
            x: '2021-04-23 14:20:00',
            y: '134.8000'
        },
        {
            x: '2021-04-23 14:25:00',
            y: '134.7900'
        },
        {
            x: '2021-04-23 14:30:00',
            y: '134.9200'
        },
        {
            x: '2021-04-23 14:35:00',
            y: '135.0300'
        },
        {
            x: '2021-04-23 14:40:00',
            y: '135.0500'
        },
        {
            x: '2021-04-23 14:45:00',
            y: '134.9350'
        },
        {
            x: '2021-04-23 14:50:00',
            y: '134.9073'
        },
        {
            x: '2021-04-23 14:55:00',
            y: '134.9968'
        },
        {
            x: '2021-04-23 15:00:00',
            y: '134.8501'
        },
        {
            x: '2021-04-23 15:05:00',
            y: '134.6650'
        },
        {
            x: '2021-04-23 15:10:00',
            y: '134.6750'
        },
        {
            x: '2021-04-23 15:15:00',
            y: '134.7600'
        },
        {
            x: '2021-04-23 15:20:00',
            y: '134.7200'
        },
        {
            x: '2021-04-23 15:25:00',
            y: '134.7450'
        },
        {
            x: '2021-04-23 15:30:00',
            y: '134.6950'
        },
        {
            x: '2021-04-23 15:35:00',
            y: '134.9001'
        },
        {
            x: '2021-04-23 15:40:00',
            y: '134.8600'
        },
        {
            x: '2021-04-23 15:45:00',
            y: '134.7800'
        },
        {
            x: '2021-04-23 15:50:00',
            y: '134.7600'
        },
        {
            x: '2021-04-23 15:55:00',
            y: '134.5200'
        },
        {
            x: '2021-04-23 16:00:00',
            y: '134.3000'
        },
        {
            x: '2021-04-23 16:05:00',
            y: '134.3000'
        },
        {
            x: '2021-04-23 16:10:00',
            y: '134.2100'
        },
        {
            x: '2021-04-23 16:15:00',
            y: '134.2500'
        },
        {
            x: '2021-04-23 16:20:00',
            y: '134.2400'
        },
        {
            x: '2021-04-23 16:25:00',
            y: '134.2458'
        },
        {
            x: '2021-04-23 16:30:00',
            y: '134.2600'
        },
        {
            x: '2021-04-23 16:35:00',
            y: '134.2200'
        },
        {
            x: '2021-04-23 16:40:00',
            y: '134.2000'
        },
        {
            x: '2021-04-23 16:45:00',
            y: '134.2500'
        },
        {
            x: '2021-04-23 16:50:00',
            y: '134.2000'
        },
        {
            x: '2021-04-23 16:55:00',
            y: '134.1900'
        },
        {
            x: '2021-04-23 17:00:00',
            y: '134.2100'
        },
        {
            x: '2021-04-23 17:05:00',
            y: '134.2700'
        },
        {
            x: '2021-04-23 17:10:00',
            y: '134.3200'
        },
        {
            x: '2021-04-23 17:15:00',
            y: '134.2700'
        },
        {
            x: '2021-04-23 17:20:00',
            y: '134.2700'
        },
        {
            x: '2021-04-23 17:25:00',
            y: '134.2500'
        },
        {
            x: '2021-04-23 17:30:00',
            y: '134.2600'
        },
        {
            x: '2021-04-23 17:35:00',
            y: '134.2700'
        },
        {
            x: '2021-04-23 17:40:00',
            y: '134.2600'
        },
        {
            x: '2021-04-23 17:45:00',
            y: '134.2700'
        },
        {
            x: '2021-04-23 17:50:00',
            y: '134.2900'
        },
        {
            x: '2021-04-23 17:55:00',
            y: '134.2700'
        },
        {
            x: '2021-04-23 18:00:00',
            y: '134.2500'
        },
        {
            x: '2021-04-23 18:05:00',
            y: '134.2600'
        },
        {
            x: '2021-04-23 18:10:00',
            y: '134.2900'
        },
        {
            x: '2021-04-23 18:15:00',
            y: '134.3000'
        },
        {
            x: '2021-04-23 18:20:00',
            y: '134.3000'
        },
        {
            x: '2021-04-23 18:25:00',
            y: '134.2500'
        },
        {
            x: '2021-04-23 18:30:00',
            y: '134.2900'
        },
        {
            x: '2021-04-23 18:35:00',
            y: '134.2600'
        },
        {
            x: '2021-04-23 18:40:00',
            y: '134.2500'
        },
        {
            x: '2021-04-23 18:45:00',
            y: '134.2600'
        },
        {
            x: '2021-04-23 18:50:00',
            y: '134.2700'
        },
        {
            x: '2021-04-23 18:55:00',
            y: '134.2500'
        },
        {
            x: '2021-04-23 19:00:00',
            y: '134.2600'
        },
        {
            x: '2021-04-23 19:05:00',
            y: '134.2500'
        },
        {
            x: '2021-04-23 19:10:00',
            y: '134.2601'
        },
        {
            x: '2021-04-23 19:15:00',
            y: '134.2500'
        },
        {
            x: '2021-04-23 19:20:00',
            y: '134.2401'
        },
        {
            x: '2021-04-23 19:25:00',
            y: '134.2200'
        },
        {
            x: '2021-04-23 19:30:00',
            y: '134.2500'
        },
        {
            x: '2021-04-23 19:35:00',
            y: '134.2700'
        },
        {
            x: '2021-04-23 19:40:00',
            y: '134.2700'
        },
        {
            x: '2021-04-23 19:45:00',
            y: '134.2600'
        },
        {
            x: '2021-04-23 19:50:00',
            y: '134.2600'
        },
        {
            x: '2021-04-23 19:55:00',
            y: '134.2600'
        },
        {
            x: '2021-04-23 20:00:00',
            y: '134.2900'
        }
    ],
    FOREX: [
        {
            x: '2021-04-23 13:40:00',
            y: '0.82870'
        },
        {
            x: '2021-04-23 13:45:00',
            y: '0.82830'
        },
        {
            x: '2021-04-23 13:50:00',
            y: '0.82840'
        },
        {
            x: '2021-04-23 13:55:00',
            y: '0.82860'
        },
        {
            x: '2021-04-23 14:00:00',
            y: '0.82890'
        },
        {
            x: '2021-04-23 14:05:00',
            y: '0.82890'
        },
        {
            x: '2021-04-23 14:10:00',
            y: '0.82880'
        },
        {
            x: '2021-04-23 14:15:00',
            y: '0.82920'
        },
        {
            x: '2021-04-23 14:20:00',
            y: '0.82910'
        },
        {
            x: '2021-04-23 14:25:00',
            y: '0.82880'
        },
        {
            x: '2021-04-23 14:30:00',
            y: '0.82880'
        },
        {
            x: '2021-04-23 14:35:00',
            y: '0.82850'
        },
        {
            x: '2021-04-23 14:40:00',
            y: '0.82900'
        },
        {
            x: '2021-04-23 14:45:00',
            y: '0.82920'
        },
        {
            x: '2021-04-23 14:50:00',
            y: '0.82930'
        },
        {
            x: '2021-04-23 14:55:00',
            y: '0.82970'
        },
        {
            x: '2021-04-23 15:00:00',
            y: '0.82970'
        },
        {
            x: '2021-04-23 15:05:00',
            y: '0.82940'
        },
        {
            x: '2021-04-23 15:10:00',
            y: '0.82930'
        },
        {
            x: '2021-04-23 15:15:00',
            y: '0.82910'
        },
        {
            x: '2021-04-23 15:20:00',
            y: '0.82920'
        },
        {
            x: '2021-04-23 15:25:00',
            y: '0.82900'
        },
        {
            x: '2021-04-23 15:30:00',
            y: '0.82880'
        },
        {
            x: '2021-04-23 15:35:00',
            y: '0.82890'
        },
        {
            x: '2021-04-23 15:40:00',
            y: '0.82870'
        },
        {
            x: '2021-04-23 15:45:00',
            y: '0.82870'
        },
        {
            x: '2021-04-23 15:50:00',
            y: '0.82830'
        },
        {
            x: '2021-04-23 15:55:00',
            y: '0.82840'
        },
        {
            x: '2021-04-23 16:00:00',
            y: '0.82840'
        },
        {
            x: '2021-04-23 16:05:00',
            y: '0.82820'
        },
        {
            x: '2021-04-23 16:10:00',
            y: '0.82790'
        },
        {
            x: '2021-04-23 16:15:00',
            y: '0.82820'
        },
        {
            x: '2021-04-23 16:20:00',
            y: '0.82810'
        },
        {
            x: '2021-04-23 16:25:00',
            y: '0.82810'
        },
        {
            x: '2021-04-23 16:30:00',
            y: '0.82810'
        },
        {
            x: '2021-04-23 16:35:00',
            y: '0.82820'
        },
        {
            x: '2021-04-23 16:40:00',
            y: '0.82810'
        },
        {
            x: '2021-04-23 16:45:00',
            y: '0.82810'
        },
        {
            x: '2021-04-23 16:50:00',
            y: '0.82800'
        },
        {
            x: '2021-04-23 16:55:00',
            y: '0.82780'
        },
        {
            x: '2021-04-23 17:00:00',
            y: '0.82760'
        },
        {
            x: '2021-04-23 17:05:00',
            y: '0.82780'
        },
        {
            x: '2021-04-23 17:10:00',
            y: '0.82790'
        },
        {
            x: '2021-04-23 17:15:00',
            y: '0.82760'
        },
        {
            x: '2021-04-23 17:20:00',
            y: '0.82760'
        },
        {
            x: '2021-04-23 17:25:00',
            y: '0.82760'
        },
        {
            x: '2021-04-23 17:30:00',
            y: '0.82760'
        },
        {
            x: '2021-04-23 17:35:00',
            y: '0.82750'
        },
        {
            x: '2021-04-23 17:40:00',
            y: '0.82740'
        },
        {
            x: '2021-04-23 17:45:00',
            y: '0.82730'
        },
        {
            x: '2021-04-23 17:50:00',
            y: '0.82730'
        },
        {
            x: '2021-04-23 17:55:00',
            y: '0.82740'
        },
        {
            x: '2021-04-23 18:00:00',
            y: '0.82720'
        },
        {
            x: '2021-04-23 18:05:00',
            y: '0.82710'
        },
        {
            x: '2021-04-23 18:10:00',
            y: '0.82700'
        },
        {
            x: '2021-04-23 18:15:00',
            y: '0.82710'
        },
        {
            x: '2021-04-23 18:20:00',
            y: '0.82710'
        },
        {
            x: '2021-04-23 18:25:00',
            y: '0.82700'
        },
        {
            x: '2021-04-23 18:30:00',
            y: '0.82700'
        },
        {
            x: '2021-04-23 18:35:00',
            y: '0.82680'
        },
        {
            x: '2021-04-23 18:40:00',
            y: '0.82690'
        },
        {
            x: '2021-04-23 18:45:00',
            y: '0.82680'
        },
        {
            x: '2021-04-23 18:50:00',
            y: '0.82680'
        },
        {
            x: '2021-04-23 18:55:00',
            y: '0.82670'
        },
        {
            x: '2021-04-23 19:00:00',
            y: '0.82650'
        },
        {
            x: '2021-04-23 19:05:00',
            y: '0.82650'
        },
        {
            x: '2021-04-23 19:10:00',
            y: '0.82670'
        },
        {
            x: '2021-04-23 19:15:00',
            y: '0.82660'
        },
        {
            x: '2021-04-23 19:20:00',
            y: '0.82630'
        },
        {
            x: '2021-04-23 19:25:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 19:30:00',
            y: '0.82620'
        },
        {
            x: '2021-04-23 19:35:00',
            y: '0.82630'
        },
        {
            x: '2021-04-23 19:40:00',
            y: '0.82630'
        },
        {
            x: '2021-04-23 19:45:00',
            y: '0.82630'
        },
        {
            x: '2021-04-23 19:50:00',
            y: '0.82630'
        },
        {
            x: '2021-04-23 19:55:00',
            y: '0.82630'
        },
        {
            x: '2021-04-23 20:00:00',
            y: '0.82620'
        },
        {
            x: '2021-04-23 20:05:00',
            y: '0.82630'
        },
        {
            x: '2021-04-23 20:10:00',
            y: '0.82650'
        },
        {
            x: '2021-04-23 20:15:00',
            y: '0.82650'
        },
        {
            x: '2021-04-23 20:20:00',
            y: '0.82660'
        },
        {
            x: '2021-04-23 20:25:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 20:30:00',
            y: '0.82650'
        },
        {
            x: '2021-04-23 20:35:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 20:40:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 20:45:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 20:50:00',
            y: '0.82650'
        },
        {
            x: '2021-04-23 20:55:00',
            y: '0.82630'
        },
        {
            x: '2021-04-23 21:00:00',
            y: '0.82650'
        },
        {
            x: '2021-04-23 21:05:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 21:10:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 21:15:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 21:20:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 21:25:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 21:30:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 21:35:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 21:40:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 21:45:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 21:50:00',
            y: '0.82640'
        },
        {
            x: '2021-04-23 21:55:00',
            y: '0.82640'
        }],
    CRYPTO: [
        {
            x: '2021-04-25 06:44:57',
            y: 49673
        },
        {
            x: '2021-04-25 06:49:54',
            y: 49646
        },
        {
            x: '2021-04-25 06:54:59',
            y: 49504
        },
        {
            x: '2021-04-25 06:59:57',
            y: 49517
        },
        {
            x: '2021-04-25 07:04:58',
            y: 49445
        },
        {
            x: '2021-04-25 07:09:59',
            y: 49376
        },
        {
            x: '2021-04-25 07:14:59',
            y: 49519
        },
        {
            x: '2021-04-25 07:19:55',
            y: 49513
        },
        {
            x: '2021-04-25 07:24:59',
            y: 49298
        },
        {
            x: '2021-04-25 07:29:57',
            y: 49324
        },
        {
            x: '2021-04-25 07:34:57',
            y: 49464
        },
        {
            x: '2021-04-25 07:39:22',
            y: 49506
        },
        {
            x: '2021-04-25 07:44:50',
            y: 49583
        },
        {
            x: '2021-04-25 07:49:59',
            y: 49726.76167676
        },
        {
            x: '2021-04-25 07:54:56',
            y: 49710.37497414
        },
        {
            x: '2021-04-25 07:59:50',
            y: 49747
        },
        {
            x: '2021-04-25 08:04:57',
            y: 49755
        },
        {
            x: '2021-04-25 08:09:46',
            y: 49701
        },
        {
            x: '2021-04-25 08:14:58',
            y: 49743.4098686
        },
        {
            x: '2021-04-25 08:19:59',
            y: 49854.032095
        },
        {
            x: '2021-04-25 08:24:57',
            y: 49876
        },
        {
            x: '2021-04-25 08:29:57',
            y: 49834
        },
        {
            x: '2021-04-25 08:34:57',
            y: 49821
        },
        {
            x: '2021-04-25 08:39:58',
            y: 49774
        },
        {
            x: '2021-04-25 08:44:52',
            y: 49847.4610676
        },
        {
            x: '2021-04-25 08:49:55',
            y: 50282
        },
        {
            x: '2021-04-25 08:54:58',
            y: 50321
        },
        {
            x: '2021-04-25 08:59:52',
            y: 50217
        },
        {
            x: '2021-04-25 09:04:54',
            y: 50105
        },
        {
            x: '2021-04-25 09:09:58',
            y: 50071
        },
        {
            x: '2021-04-25 09:14:47',
            y: 49961
        },
        {
            x: '2021-04-25 09:19:59',
            y: 49854
        },
        {
            x: '2021-04-25 09:24:59',
            y: 49679.59179988
        },
        {
            x: '2021-04-25 09:29:52',
            y: 49500
        },
        {
            x: '2021-04-25 09:34:59',
            y: 49626
        },
        {
            x: '2021-04-25 09:39:58',
            y: 49386
        },
        {
            x: '2021-04-25 09:44:49',
            y: 49478
        },
        {
            x: '2021-04-25 09:49:55',
            y: 49662
        },
        {
            x: '2021-04-25 09:54:57',
            y: 49656
        },
        {
            x: '2021-04-25 09:59:54',
            y: 49600
        },
        {
            x: '2021-04-25 10:04:59',
            y: 49421
        },
        {
            x: '2021-04-25 10:09:58',
            y: 49895
        },
        {
            x: '2021-04-25 10:14:59',
            y: 49920
        },
        {
            x: '2021-04-25 10:19:46',
            y: 49926
        },
        {
            x: '2021-04-25 10:24:53',
            y: 49881.38748532
        },
        {
            x: '2021-04-25 10:29:37',
            y: 49800
        },
        {
            x: '2021-04-25 10:34:56',
            y: 49571
        },
        {
            x: '2021-04-25 10:39:59',
            y: 49565
        },
        {
            x: '2021-04-25 10:44:57',
            y: 49551
        },
        {
            x: '2021-04-25 10:49:57',
            y: 49480
        },
        {
            x: '2021-04-25 10:54:56',
            y: 49367
        },
        {
            x: '2021-04-25 10:59:57',
            y: 49472
        },
        {
            x: '2021-04-25 11:04:35',
            y: 49514
        },
        {
            x: '2021-04-25 11:09:57',
            y: 49538
        },
        {
            x: '2021-04-25 11:14:35',
            y: 49521
        },
        {
            x: '2021-04-25 11:19:54',
            y: 49614
        },
        {
            x: '2021-04-25 11:24:44',
            y: 49579
        },
        {
            x: '2021-04-25 11:29:53',
            y: 49636
        },
        {
            x: '2021-04-25 11:34:39',
            y: 49583
        },
        {
            x: '2021-04-25 11:39:36',
            y: 49547
        },
        {
            x: '2021-04-25 11:44:57',
            y: 49537.086673
        },
        {
            x: '2021-04-25 11:49:57',
            y: 49620
        },
        {
            x: '2021-04-25 11:54:59',
            y: 49716
        },
        {
            x: '2021-04-25 11:59:58',
            y: 49660
        },
        {
            x: '2021-04-25 12:04:57',
            y: 49651
        },
        {
            x: '2021-04-25 12:09:54',
            y: 49729
        },
        {
            x: '2021-04-25 12:14:50',
            y: 49916
        },
        {
            x: '2021-04-25 12:19:59',
            y: 49791
        },
        {
            x: '2021-04-25 12:24:59',
            y: 49769
        },
        {
            x: '2021-04-25 12:29:54',
            y: 49821
        },
        {
            x: '2021-04-25 12:34:57',
            y: 49755
        },
        {
            x: '2021-04-25 12:39:53',
            y: 49789
        },
        {
            x: '2021-04-25 12:44:54',
            y: 49949
        },
        {
            x: '2021-04-25 12:49:57',
            y: 49947
        },
        {
            x: '2021-04-25 12:54:54',
            y: 50002
        },
        {
            x: '2021-04-25 12:59:58',
            y: 50002
        },
        {
            x: '2021-04-25 13:04:58',
            y: 49978
        },
        {
            x: '2021-04-25 13:09:48',
            y: 50023
        },
        {
            x: '2021-04-25 13:14:59',
            y: 50057
        },
        {
            x: '2021-04-25 13:19:45',
            y: 50108.81390156
        },
        {
            x: '2021-04-25 13:24:32',
            y: 50170
        },
        {
            x: '2021-04-25 13:29:55',
            y: 49966
        },
        {
            x: '2021-04-25 13:34:56',
            y: 49969
        },
        {
            x: '2021-04-25 13:39:55',
            y: 49913
        },
        {
            x: '2021-04-25 13:44:53',
            y: 49952
        },
        {
            x: '2021-04-25 13:49:51',
            y: 49996
        },
        {
            x: '2021-04-25 13:54:55',
            y: 50027
        },
        {
            x: '2021-04-25 13:59:33',
            y: 50006
        },
        {
            x: '2021-04-25 14:04:51',
            y: 49901.295886
        },
        {
            x: '2021-04-25 14:09:47',
            y: 49997
        },
        {
            x: '2021-04-25 14:14:55',
            y: 49852
        },
        {
            x: '2021-04-25 14:19:50',
            y: 49928
        },
        {
            x: '2021-04-25 14:24:56',
            y: 49988
        },
        {
            x: '2021-04-25 14:29:58',
            y: 50161
        },
        {
            x: '2021-04-25 14:34:59',
            y: 50105
        },
        {
            x: '2021-04-25 14:39:59',
            y: 50411
        },
        {
            x: '2021-04-25 14:44:59',
            y: 50539
        },
        {
            x: '2021-04-25 14:49:55',
            y: 50555
        },
        {
            x: '2021-04-25 14:54:59',
            y: 50493
        },
        {
            x: '2021-04-25 14:57:10',
            y: 50486
        }
    ],
    ACTIVE: {
        STOCK: {
            time: "1D",
            pair: "AAPL"
        },
        FOREX: {
            time: "1D",
            pair: "USDEUR"
        },
        CRYPTO: {
            time: "1D",
            pair: "BTCUSD"
        }
    },
    CHART: [],
    active_type: 'STOCK',
    chartTime: '1W',
    pair: '',
    colorTheme: true,
    description: '',
    currency: '',
    timeFrames: ''
}

export const stockReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHART: {
            return {
                ...state,
                CHART: payload
            }
        }
        case ADD_DATA_STOCK: {
            return {
                ...state,
                STOCK: payload
            }
        }
        case ADD_DATA_FOREX: {
            return {
                ...state,
                FOREX: payload
            }
        }
        case ADD_DATA_CRYPTO: {
            return {
                ...state,
                CRYPTO: payload
            }
        }
        case ACTIVE: {
            return {
                ...state,
                ACTIVE: {
                    ...state.ACTIVE,
                    [payload.type]: {
                        time: payload.time,
                        pair: payload.pair
                    }
                }
            }
        }
        case ACTIVE_TYPE: {
            return {
                ...state,
                active_type: payload
            }
        }
        case COLOR_THEME: {
            return {
                ...state,
                colorTheme: !state.colorTheme
            }
        }
        case DESCRIPTION: {
            return {
                ...state,
                description: payload
            }
        }
        case CURRENCY: {
            return {
                ...state,
                currency: payload
            }
        }
        case TIME_FRAMES: {
            return {
                ...state,
                timeFrames: payload
            }
        }
        case PAIR: {
            return {
                ...state,
                pair: payload
            }
        }
        case CHART_TIMER: {
            return {
                ...state,
                chartTime: payload
            }
        }
        default:
            return state
    }
}
export const addDataStock = (payload) => ({ type: ADD_DATA_STOCK, payload })
export const addDataForex = (payload) => ({ type: ADD_DATA_FOREX, payload })
export const addDataCrypto = (payload) => ({ type: ADD_DATA_CRYPTO, payload })
export const addActive = (payload) => ({ type: ACTIVE, payload })
export const addActiveType = (payload) => ({ type: ACTIVE_TYPE, payload })
export const addColorTheme = (payload) => ({ type: COLOR_THEME, payload })
export const addChart = (payload) => ({ type: CHART, payload })
export const addDescription = (payload) => ({ type: DESCRIPTION, payload })
export const addCurrency = (payload) => ({ type: CURRENCY, payload })
export const addTimeFrames = (payload) => ({ type: TIME_FRAMES, payload })
export const addPair = (payload) => ({ type: PAIR, payload })
export const addChartTimer = (payload) => ({ type: CHART_TIMER, payload })

const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"
const alphaVantageKey = "LQUDEAVINLE7N2RC"
const alphaVantageKey1 = 'VZLZ58FTEXZW7QZ6'
const alphaVantageKey2 = '9A3WH6UYZEPJ88QM'
const coinAPI = "2AA5C267-67AE-4017-AF88-F84E88DC327C"

const APPLE = "AAPL"
const EUR = "EUR"
const USD = "USD"
const BTC = "BTC"
const URL = "https://www.alphavantage.co/query?function="

const DAY = "1D"

const headers = {
    headers: {
        'Content-Type': 'application/json',
        "X-CoinAPI-Key": "2AA5C267-67AE-4017-AF88-F84E88DC327C"
    }
}

const request = {
    STOCK: {
        "1D": "TIME_SERIES_INTRADAY",
        "1W": "TIME_SERIES_DAILY_ADJUSTED",
        "1M": "TIME_SERIES_DAILY_ADJUSTED",
        "6M": "TIME_SERIES_WEEKLY_ADJUSTED",
        "1Y": "TIME_SERIES_WEEKLY_ADJUSTED",
        "All": "TIME_SERIES_MONTHLY_ADJUSTED",
    },
    FOREX: {
        "1D": "FX_INTRADAY",
        "1W": "FX_DAILY",
        "1M": "FX_DAILY",
        "6M": "FX_WEEKLY",
        "1Y": "FX_WEEKLY",
        "All": "FX_MONTHLY",
    },
    CRYPTO: {
        "1W": "DIGITAL_CURRENCY_DAILY",
        "1M": "DIGITAL_CURRENCY_DAILY",
        "6M": "DIGITAL_CURRENCY_WEEKLY",
        "1Y": "DIGITAL_CURRENCY_WEEKLY",
        "All": "DIGITAL_CURRENCY_MONTHLY",
    },
}
const response = {
    STOCK: {
        "1D": "Time Series (5min)",
        "1W": "Time Series (Daily)",
        "1M": "Time Series (Daily)",
        "6M": "Weekly Adjusted Time Series",
        "1Y": "Weekly Adjusted Time Series",
        "All": "Monthly Adjusted Time Series",
    },
    FOREX: {
        "1D": "Time Series FX (5min)",
        "1W": "Time Series FX (Daily)",
        "1M": "Time Series FX (Daily)",
        "6M": "Time Series FX (Weekly)",
        "1Y": "Time Series FX (Weekly)",
        "All": "Time Series FX (Monthly)",
    },
    CRYPTO: {
        "1W": "Time Series (Digital Currency Daily)",
        "1M": "Time Series (Digital Currency Daily)",
        "6M": "Time Series (Digital Currency Weekly)",
        "1Y": "Time Series (Digital Currency Weekly)",
        "All": "Time Series (Digital Currency Monthly)",
    },
}

export function requestThunk(type, time, pair, frame) {
    console.log(type, time, pair, frame)

    let dbPair
    for (let i = 0; db.length > i; i++) {
        if (db[i].pair === pair) {
            dbPair = db[i].time
        }
    }

    return (dispatch) => {
        switch (type) {
            case STOCK: {
                fetch(`${URL}${request[type][time]}&symbol=${pair}&${time === "1D" ? "interval=5min&" : ""}apikey=${alphaVantageKey}`)
                    .then(res => res.json())
                    .then(res => {
                        const data = buildChartData(res[response[type][time]], type, time)

                        if (initialReducer[type][pair] === pair) {
                            console.log('1')
                            return Promise.all([
                                dispatch(addChartTimer(time)),
                                dispatch(addPair(pair)),
                                dispatch(addTimeFrames(dbPair)),
                                dispatch(addActiveType(type)),
                                dispatch(addChart(data)),
                                dispatch(addDataStock(data)),
                                dispatch(addDescription(description[type][pair]))
                            ])
                        }
                        else {
                            console.log('2')
                            return Promise.all([
                                dispatch(addChartTimer(time)),
                                dispatch(addPair(pair)),
                                dispatch(addTimeFrames(dbPair)),
                                dispatch(addActiveType(type)),
                                dispatch(addChart(data)),
                                dispatch(addDescription(description[type][pair]))
                            ])
                        }
                    })
                break
            }
            case FOREX: {
                fetch(`${URL}${request[type][time]}&from_symbol=${pair.slice(0, 3)}&to_symbol=${pair.slice(3)}${time === "1D" ? "&interval=5min" : ""}&apikey=${alphaVantageKey}`)
                    .then(res => res.json())
                    // .then(res => res['Error Message'] ? Promise.reject(res) : res )
                    .then(res => {
                        // console.log(res)
                        const data = buildChartData(res[response[type][time]], type, time)
                        // return dispatch(addDataForex(data))
                        const endStr = pair.slice(3)
                        const startStr = pair.slice(0, 3)
                        return Promise.all([
                            dispatch(addChartTimer(time)),
                            dispatch(addPair(pair)),
                            dispatch(addTimeFrames(dbPair)),
                            dispatch(addActiveType(type)),
                            dispatch(addChart(data)),
                            dispatch(addDataForex(data)),
                            dispatch(addDescription(description[type][startStr])),
                            dispatch(addCurrency(description[type][endStr]))
                        ])
                    })
                    .catch(() => console.log('что-то пошло'))
                break
            }
            case CRYPTO: {
                if (time === DAY) {
                    fetch(`https://rest.coinapi.io/v1/ohlcv/BITFINEX_SPOT_${pair.slice(0, 3)}_${pair.slice(3)}/latest?period_id=5MIN`, headers)
                        .then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            const data = buildChartData(res, type, time, pair)
                            // return dispatch(addDataCrypto(data)) && dispatch(addDescription(description[type][pair]))
                            const endStr = pair.slice(3)
                            const startStr = pair.slice(0, 3)

                            return Promise.all([
                                dispatch(addChartTimer(time)),
                                dispatch(addPair(pair)),
                                dispatch(addTimeFrames(dbPair)),
                                dispatch(addActiveType(type)),
                                dispatch(addCurrency(description[FOREX][endStr])),
                                dispatch(addChart(data)),
                                dispatch(addDataCrypto(data)),
                                dispatch(addDescription(description[type][startStr]))
                            ])
                        })
                    break
                }
                else {
                    fetch(`${URL}${request[type][time]}&symbol=${pair.slice(0, 3)}&market=${pair.slice(3)}&apikey=${alphaVantageKey}`)
                        .then(res => res.json())
                        .then(res => {
                            // console.log(res)
                            const data = buildChartData(res[response[type][time]], type, time, pair)
                            // return dispatch(addDataCrypto(data)) && dispatch(addDescription(description[type][pair]))
                            const endStr = pair.slice(3)
                            const startStr = pair.slice(0, 3)

                            return Promise.all([
                                dispatch(addChartTimer(time)),
                                dispatch(addPair(pair)),
                                dispatch(addTimeFrames(dbPair)),
                                dispatch(addActiveType(type)),
                                dispatch(addCurrency(description[FOREX][endStr])),
                                dispatch(addChart(data)),
                                dispatch(addDataCrypto(data)),
                                dispatch(addDescription(description[type][startStr]))
                            ])
                        })
                    break
                }
            }
            default:
                break;
        }
    }
}

export const startThunk = () => {

    return (dispatch) => {

        // // ------------------STOCK-------------------------

        // fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${APPLE}&interval=5min&apikey=${alphaVantageKey1}`)
        //      .then(res => res.json())
        //     .then(res => {
        //         const data = buildChartData(res["Time Series (5min)"], STOCK, DAY)
        //         // console.log(data)
        //         return dispatch(addDataStock(data))
        //     })

        // // ------------------FOREX-------------------------

        // fetch(`https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${USD}&to_symbol=${EUR}&interval=5min&apikey=${alphaVantageKey1}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         const data = buildChartData(res["Time Series FX (5min)"], FOREX, DAY)
        //         // console.log(data)
        //         return dispatch(addDataForex(data))
        //     })

        // // ------------------CRYPTO-------------------------

        // fetch('https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=5MIN', headers)
        //      .then(res => res.json())
        //     .then(res => {
        //         const data = buildChartData(res, CRYPTO, DAY)
        //         dispatch(addDataCrypto(data))
        //     })
    }
}
