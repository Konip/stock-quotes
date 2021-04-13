import apple from "../assets/apple.svg"
import tesla from "../assets/tesla.svg"
import spotify from "../assets/spotify1.svg"
import intel from "../assets/intel.svg"
import amazon from "../assets/amazon1.svg"
import microsoft from "../assets/microsoft.svg"
import YENGBP from "../assets/YENGBP.svg"
import USDEUR from "../assets/USDEUR.svg"
import BYNGBP from "../assets/BYNGBP.svg"
import USDILS from "../assets/USDILS.svg"
import EURINR from "../assets/EURINR.svg"
import EURTWD from "../assets/EURTWD.svg"
import bitcoin from "../assets/bitcoin.svg"
import litecoin from "../assets/litecoin.svg"
import ripple from "../assets/ripple.svg"
import etherium from "../assets/etherium.svg"
import monero from "../assets/monero.svg"
import zcash from "../assets/zcash.svg"
import german from "../assets/german.jpg"
import DE from "../assets/DE.svg"
import US from "../assets/US.svg"
import FR from "../assets/FR.svg"
import GB from "../assets/GB.svg"

export const initial = {
    STOCK: [
        { pair: "AAPL", name: "APPLE INC", img: apple },
        { pair: "TSLA", name: "TESLA INC", img: tesla },
        { pair: "SPOT", name: "SPOTIFY TECHNOLOGY S.A", img: spotify },
        { pair: "INTC", name: "INTEL CORP", img: intel },
        { pair: "AMZN", name: "AMAZON COM INC", img: amazon },
        { pair: "MSFT", name: "MICROSOFT CORPORATION", img: microsoft },
    ],
    FOREX: [
        { pair: "USDEUR", name: "Доллар США / Евро", img: USDEUR },
        { pair: "JPYGBP", name: "Японская иена / Британский фунт", img: YENGBP },
        { pair: "EURINR", name: "Евро / Индийская рупия", img: EURINR },
        { pair: "USDILS", name: "Доллар США  / Новый израильский шекель", img: USDILS },
        { pair: "BYNGBP", name: "Белорусский рубль / Британский фунт", img: BYNGBP },
        { pair: "EURTWD", name: "Евро / Новый тайваньский доллар", img: EURTWD },
    ],
    CRYPTO: [
        { pair: "BTCUSD", name: "Биткоин / Доллар США", img: bitcoin },
        { pair: "ETHUSD", name: "Эфириум / Доллар США", img: etherium },
        { pair: "LTCUSD", name: "Лайткоин / Доллар США", img: litecoin },
        { pair: "XRPUSD", name: "Рипл / Доллар США", img: ripple },
        { pair: "XMRUSD", name: "Монеро / Доллар США", img: monero },
        { pair: "ZECUSD", name: "Zcash / Доллар США", img: zcash },
    ],
}
export const initial1 = {
    STOCK: {
        "AAPL": "AAPL",
        "TSLA": "TSLA",
        "SPOT": "SPOT",
        "INTC": "INTC",
        "AMZN": "AMZN",
        "MSFT": "MSFT"
    },
    FOREX: {
        "USDEUR": "USDEUR",
        "JPYGBP": "JPYGBP",
        "EURINR": "EURINR",
        "USDILS": "USDILS",
        "BYNGBP": "BYNGBP",
        "EURTWD": "EURTWD",
    },
    CRYPTO: {
        "BTCUSD": "BTCUSD",
        "ETHUSD": "ETHUSD",
        "LTCUSD": "LTCUSD",
        "XRPUSD": "XRPUSD",
        "XMRUSD": "XMRUSD",
        "ZECUSD": "ZECUSD",
    }
}

export const initialStockMarket = {
    STOCK: [
        { title: "США", img: US },
        { title: "Германия", img: DE },
        { title: "Франция", img: FR },
        { title: "Великобритания", img: GB },
        // { title: "AMZN", img: amazon },
        // { title: "MSFT", img: microsoft },
    ],
    FOREX: [
        { title: "USDEUR", img: USDEUR },
        { title: "JPYGBP", img: YENGBP },
        { title: "EURINR", img: EURINR },
        { title: "USDILS",  img: USDILS },
        { title: "BYNGBP",  img: BYNGBP },
        { title: "EURTWD",  img: EURTWD },
    ],
    CRYPTO: [
        { title: "BTCUSD", name: "Биткоин / Доллар США", img: bitcoin },
        { title: "ETHUSD", name: "Эфириум / Доллар США", img: etherium },
        { title: "LTCUSD", name: "Лайткоин / Доллар США", img: litecoin },
        { title: "XRPUSD", name: "Рипл / Доллар США", img: ripple },
        { title: "XMRUSD", name: "Монеро / Доллар США", img: monero },
        { title: "ZECUSD", name: "Zcash / Доллар США", img: zcash },
    ],
}
export const initialForex = {
    STOCK: [
        { pair: "AAPL", name: "APPLE INC", img: apple },
        { pair: "TSLA", name: "TESLA INC", img: tesla },
        { pair: "SPOT", name: "SPOTIFY TECHNOLOGY S.A", img: spotify },
        { pair: "INTC", name: "INTEL CORP", img: intel },
        { pair: "AMZN", name: "AMAZON COM INC", img: amazon },
        { pair: "MSFT", name: "MICROSOFT CORPORATION", img: microsoft },
    ],
    FOREX: [
        { pair: "USDEUR", name: "Доллар США / Евро", img: USDEUR },
        { pair: "USDEUR", name: "Доллар США / Евро", img: USDEUR },
        { pair: "USDKRW", name: "Доллар США / Южнокорейская вона", img: USDEUR },
        { pair: "USDGBP", name: "Доллар США / Британский фунт", img: USDEUR },
        { pair: "USDPLN", name: "Доллар США / Польский злотый", img: USDEUR },
        { pair: "USDCNY", name: "Доллар США / Китайский юань", img: USDEUR },
        { pair: "USDTHB", name: "Доллар США / Тайский бат", img: USDEUR },
        { pair: "USDBRL", name: "Доллар США / Бразильский реал", img: USDEUR },
       
    ],
    CRYPTO: [
        { pair: "BTCUSD", name: "Биткоин / Доллар США", img: bitcoin },
        { pair: "ETHUSD", name: "Эфириум / Доллар США", img: etherium },
        { pair: "LTCUSD", name: "Лайткоин / Доллар США", img: litecoin },
        { pair: "XRPUSD", name: "Рипл / Доллар США", img: ripple },
        { pair: "XMRUSD", name: "Монеро / Доллар США", img: monero },
        { pair: "ZECUSD", name: "Zcash / Доллар США", img: zcash },
    ],
}