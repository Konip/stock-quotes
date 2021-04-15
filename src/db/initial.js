import apple from "../assets/apple.svg"
import tesla from "../assets/tesla.svg"
import spotify from "../assets/spotify1.svg"
import intel from "../assets/intel.svg"
import amazon from "../assets/amazon1.svg"
import microsoft from "../assets/microsoft.svg"
import general from "../assets/general.svg"
import facebook from "../assets/facebook.svg"
import nike from "../assets/nike.svg"
import mcdonalds from "../assets/mcdonalds.svg"

import YENGBP from "../assets/YENGBP.svg"
import USDEUR from "../assets/USDEUR.svg"
import BYNGBP from "../assets/BYNGBP.svg"
import USDILS from "../assets/USDILS.svg"
import EURINR from "../assets/EURINR.svg"
import EURTWD from "../assets/EURTWD.svg"

import EURINRd from "../assets/EURINRd.svg"
import EURTWDd from "../assets/EURTWDd.svg"
import BYNGBPd from "../assets/BYNGBPd.svg"
import USDEURd from "../assets/USDEURd.svg"
import USDILSd from "../assets/USDILSd.svg"
import YENGBPd from "../assets/YENGBPd.svg"

import bitcoin from "../assets/bitcoin.svg"
import litecoin from "../assets/litecoin.svg"
import ripple from "../assets/ripple.svg"
import etherium from "../assets/etherium.svg"
import monero from "../assets/monero.svg"
import zcash from "../assets/zcash.svg"
import eos from "../assets/eos.svg"
import stellar from "../assets/stellar.svg"

import usd from "../assets/usd.svg"
import euro from "../assets/euro.svg"
import pound from "../assets/pound.svg"
import southkoreanwon from "../assets/south-korean-won.svg"
import yuan from "../assets/yuan.svg"
import brazilianreal from "../assets/brazilian-real.svg"
import pzloty from "../assets/pzloty.svg"
import baht from "../assets/baht.svg"
import indianrupee from "../assets/indian-rupee.svg"
import czechkoruna from "../assets/czech-koruna.svg"
import philippinepeso from "../assets/philippine-peso.svg"

import usdD from "../assets/usdD.svg"
import euroD from "../assets/euroD.svg"
import poundD from "../assets/poundD.svg"
import southkoreanwonD from "../assets/south-korean-wonD.svg"
import yuanD from "../assets/yuanD.svg"
import brazilianrealD from "../assets/brazilian-realD.svg"
import pzlotyD from "../assets/pzlotyD.svg"
import bahtD from "../assets/bahtD.svg"
import indianrupeeD from "../assets/indian-rupeeD.svg"
import czechkorunaD from "../assets/czech-korunaD.svg"
import philippinepesoD from "../assets/philippine-pesoD.svg"

import DE from "../assets/DE.svg"
import US from "../assets/US.svg"
import FR from "../assets/FR.svg"
import GB from "../assets/GB.svg"
// Home
export const initial = {
    STOCK: [
        { pair: "AAPL", name: "APPLE INC", img: apple, imgD: apple },
        { pair: "TSLA", name: "TESLA INC", img: tesla, imgD: tesla },
        { pair: "SPOT", name: "SPOTIFY TECHNOLOGY S.A", img: spotify, imgD: spotify },
        { pair: "INTC", name: "INTEL CORP", img: intel, imgD: intel },
        { pair: "AMZN", name: "AMAZON COM INC", img: amazon, imgD: amazon },
        { pair: "MSFT", name: "MICROSOFT CORPORATION", img: microsoft, imgD: microsoft },

        // { pair: "AAPL", name: "Apple inc", img: apple, imgD: apple },
        // { pair: "TSLA", name: "Tesla inc", img: tesla, imgD: tesla },
        // { pair: "SPOT", name: "Spotify technology S.A", img: spotify, imgD: spotify },
        // { pair: "INTC", name: "Intel corp", img: intel, imgD: intel },
        // { pair: "AMZN", name: "Amazon com inc", img: amazon, imgD: amazon },
        // { pair: "MSFT", name: "Microsoft corporation", img: microsoft, imgD: microsoft },
    ],
    FOREX: [
        { pair: "USDEUR", name: "Доллар США / Евро", img: USDEUR, imgD: USDEURd },
        { pair: "JPYGBP", name: "Японская иена / Британский фунт", img: YENGBP, imgD: YENGBPd },
        { pair: "EURINR", name: "Евро / Индийская рупия", img: EURINR, imgD: EURINRd },
        { pair: "USDILS", name: "Доллар США  / Новый израильский шекель", img: USDILS, imgD: USDILSd },
        { pair: "BYNGBP", name: "Белорусский рубль / Британский фунт", img: BYNGBP, imgD: BYNGBPd },
        { pair: "EURTWD", name: "Евро / Новый тайваньский доллар", img: EURTWD, imgD: EURTWDd },
    ],
    CRYPTO: [
        { pair: "BTCUSD", name: "Биткоин / Доллар США", img: bitcoin, imgD: bitcoin },
        { pair: "ETHUSD", name: "Эфириум / Доллар США", img: etherium, imgD: etherium },
        { pair: "LTCUSD", name: "Лайткоин / Доллар США", img: litecoin, imgD: litecoin },
        { pair: "XRPUSD", name: "Рипл / Доллар США", img: ripple, imgD: ripple },
        { pair: "XMRUSD", name: "Монеро / Доллар США", img: monero, imgD: monero },
        { pair: "ZECUSD", name: "Zcash / Доллар США", img: zcash, imgD: zcash },
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

// stock-market
export const initialTitle = {
    STOCK: [
        { title: "США", pair: 'US', img: US, imgD: US },
        { title: "Германия", pair: 'DE', img: DE, imgD: DE },
        { title: "Франция", pair: 'FR', img: FR, imgD: FR },
        // { title: "Великобритания", pair: 'USD', img: GB, imgD: GB },
        // { title: "AMZN", pair: 'USD', img: amazon },
        // { title: "MSFT", pair: 'USD', img: microsoft },
    ],
    FOREX: [
        { title: "Доллар США", pair: 'USD', img: usd, imgD: usdD },
        { title: "Евро", pair: 'EUR', img: euro, imgD: euroD },
        { title: "Британский фунт", pair: 'GBP', img: pound, imgD: poundD },
        { title: "Китайский юань", pair: 'CNY', img: yuan, imgD: yuanD },
        { title: "Польский злотый", pair: 'PLN', img: pzloty, imgD: pzlotyD },
        { title: "Тайский бат", pair: 'THB', img: baht, imgD: bahtD },
    ],
    CRYPTO: [
        { title: 'BTC', pair: 'BTC', img: bitcoin, imgD: bitcoin },
        { title: 'ETH', pair: 'ETH', img: etherium, imgD: etherium },
        { title: 'EOS', pair: 'EOS', img: eos, imgD: eos },
        { title: 'LTC', pair: 'LTC', img: litecoin, imgD: litecoin },
        { title: "XLM", pair: 'XLM', img: stellar, imgD: stellar },
        { title: "XMR", pair: 'XMR', img: monero, imgD: monero },
    ],
}

export const initialForex = {
    STOCK: {
        US: [
            { pair: "GE", name: "GENERAL ELECTRIC", img: general, imgD: general },
            { pair: "FB", name: "FACEBOOK INC", img: facebook, imgD: facebook },
            { pair: "NKE", name: "NIKE INC", img: nike, imgD: nike },
            { pair: "MDNDF", name: "McDonald’s", img: mcdonalds, imgD: mcdonalds },
            { pair: "AMZN", name: "AMAZON COM INC", img: amazon, imgD: amazon },
            { pair: "MSFT", name: "MICROSOFT CORPORATION", img: microsoft, imgD: microsoft },
        ],
        DE: [
            { pair: "AAPL", name: "APPLE INC", img: microsoft, imgD: microsoft },
            { pair: "TSLA", name: "TESLA INC", img: tesla, imgD: tesla },
            { pair: "SPOT", name: "SPOTIFY TECHNOLOGY S.A", img: spotify, imgD: spotify },
            { pair: "INTC", name: "INTEL CORP", img: intel, imgD: intel },
            { pair: "AMZN", name: "AMAZON COM INC", img: amazon, imgD: amazon },
            { pair: "MSFT", name: "MICROSOFT CORPORATION", img: microsoft, imgD: microsoft },
        ],
        FR: [
            { pair: "AAPL", name: "APPLE INC", img: microsoft, imgD: microsoft },
            { pair: "TSLA", name: "TESLA INC", img: tesla, imgD: tesla },
            { pair: "SPOT", name: "SPOTIFY TECHNOLOGY S.A", img: spotify, imgD: spotify },
            { pair: "INTC", name: "INTEL CORP", img: intel, imgD: intel },
            { pair: "AMZN", name: "AMAZON COM INC", img: amazon, imgD: amazon },
            { pair: "MSFT", name: "MICROSOFT CORPORATION", img: microsoft, imgD: microsoft },
        ],
    },
    FOREX: {
        USD: [
            { pair: "USDEUR", name: "Доллар США / Евро", img: euro, imgD: euroD },// 1D + // 1M +
            { pair: "USDKRW", name: "Доллар США / Южнокорейская вона", img: southkoreanwon, imgD: southkoreanwonD },// 1D + // 1M +
            { pair: "USDGBP", name: "Доллар США / Британский фунт", img: pound, imgD: poundD },// 1D + // 1M +
            { pair: "USDPLN", name: "Доллар США / Польский злотый", img: pzloty, imgD: pzlotyD },// 1D + // 1M +
            { pair: "USDCNY", name: "Доллар США / Китайский юань", img: yuan, imgD: yuanD },// 1D + // 1M +
            { pair: "USDTHB", name: "Доллар США / Тайский бат", img: baht, imgD: bahtD },// 1D + // 1M +
            { pair: "USDBRL", name: "Доллар США / Бразильский реал", img: brazilianreal, imgD: brazilianrealD },// 1D + // 1M +
            { pair: "USDINR", name: "Доллар США / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
        ],
        EUR: [
            { pair: "EURUSD", name: "Евро / Доллар США", img: usd, imgD: usdD },// 1D + // 1M +
            { pair: "EURKRW", name: "Евро / Южнокорейская вона", img: southkoreanwon, imgD: southkoreanwonD },// 1D + // 1M +
            { pair: "EURGBP", name: "Евро / Британский фунт", img: pound, imgD: poundD },// 1D + // 1M +
            { pair: "EURPLN", name: "Евро / Польский злотый", img: pzloty, imgD: pzlotyD },// 1D + // 1M +
            { pair: "EURCNY", name: "Евро / Китайский юань", img: yuan, imgD: yuanD },// 1D + // 1M +
            { pair: "EURTHB", name: "Евро / Тайский бат", img: baht, imgD: bahtD },// 1D + // 1M +
            { pair: "EURBRL", name: "Евро / Бразильский реал", img: brazilianreal, imgD: brazilianrealD },// 1D + // 1M +
            { pair: "EURINR", name: "Евро / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
        ],
        GBP: [
            { pair: "GBPEUR", name: "Британский фунт / Евро", img: euro, imgD: euroD },// 1D + // 1M +
            { pair: "GBPKRW", name: "Британский фунт / Южнокорейская вона", img: southkoreanwon, imgD: southkoreanwonD },// 1D + // 1M +
            { pair: "GBPUSD", name: "Британский фунт / Доллар США", img: usd, imgD: usdD },// 1D + // 1M +
            { pair: "GBPPLN", name: "Британский фунт / Польский злотый", img: pzloty, imgD: pzlotyD },// 1D + // 1M +
            { pair: "GBPCNY", name: "Британский фунт / Китайский юань", img: yuan, imgD: yuanD },// 1D + // 1M +
            { pair: "GBPTHB", name: "Британский фунт / Тайский бат", img: baht, imgD: bahtD },// 1D + // 1M +
            { pair: "GBPBRL", name: "Британский фунт / Бразильский реал", img: brazilianreal, imgD: brazilianrealD },// 1D + // 1M +
            { pair: "GBPINR", name: "Британский фунт / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
        ],
        CNY: [
            { pair: "CNYEUR", name: "Китайский юань / Евро", img: euro, imgD: euroD },// 1D + // 1M +
            { pair: "CNYKRW", name: "Китайский юань / Южнокорейская вона", img: southkoreanwon, imgD: southkoreanwonD },// 1D + // 1M +
            { pair: "CNYGBP", name: "Китайский юань / Британский фунт", img: pound, imgD: poundD },// 1D + // 1M +
            { pair: "CNYPLN", name: "Китайский юань / Польский злотый", img: pzloty, imgD: pzlotyD },// 1D + // 1M +
            { pair: "CNYUSD", name: "Китайский юань / Доллар США", img: usd, imgD: usdD },// 1D + // 1M +
            { pair: "CNYTHB", name: "Китайский юань / Тайский бат", img: baht, imgD: bahtD },// 1D +  // 1M +
            { pair: "CNYBRL", name: "Китайский юань / Бразильский реал", img: brazilianreal, imgD: brazilianrealD },// 1D + // 1M +
            { pair: "CNYINR", name: "Китайский юань / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
        ],
        PLN: [
            { pair: "PLNEUR", name: "Польский злотый / Евро", img: euro, imgD: euroD },// 1D + // 1M +
            { pair: "PLNKRW", name: "Польский злотый / Южнокорейская вона", img: southkoreanwon, imgD: southkoreanwonD },// 1D - // 1M +
            { pair: "PLNGBP", name: "Польский злотый / Британский фунт", img: pound, imgD: poundD },// 1D + // 1M +
            { pair: "PLNUSD", name: "Польский злотый / Доллар США", img: usd, imgD: usdD },// 1D + // 1M +
            { pair: "PLNCNY", name: "Польский злотый / Китайский юань", img: yuan, imgD: yuanD },// 1D + // 1M +
            { pair: "PLNTHB", name: "Польский злотый / Тайский бат", img: baht, imgD: bahtD },// 1D + // 1M +
            { pair: "PLNBRL", name: "Польский злотый / Бразильский реал", img: brazilianreal, imgD: brazilianrealD },// 1D - // 1M +
            { pair: "PLNINR", name: "Польский злотый / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
        ],
        THB: [
            { pair: "THBEUR", name: "Тайский бат / Евро", img: euro, imgD: euroD }, // 1D + // 1M +
            { pair: "THBKRW", name: "Тайский бат / Южнокорейская вона", img: southkoreanwon, imgD: southkoreanwonD },// 1D + // 1M +
            { pair: "THBGBP", name: "Тайский бат / Британский фунт", img: pound, imgD: poundD },// 1D + // 1M +
            { pair: "THBPLN", name: "Тайский бат / Польский злотый", img: pzloty, imgD: pzlotyD }, // 1D - // 1M +
            { pair: "THBCNY", name: "Тайский бат / Китайский юань", img: yuan, imgD: yuanD },// 1D + // 1M +
            { pair: "THBUSD", name: "Тайский бат / Доллар США", img: usd, imgD: usdD },// 1D + // 1M +
            { pair: "THBINR", name: "Тайский бат / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "THBPHP", name: "Тайский бат / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
    },
    CRYPTO: {
        BTC: [
            { pair: "BTCUSD", name: "Биткоин / Доллар США", img: usd, imgD: usdD },
            { pair: "BTCEUR", name: "Биткоин / Евро", img: euro, imgD: euroD },
            { pair: "BTCGBP", name: "Биткоин / Британский фунт", img: pound, imgD: poundD },
            { pair: "BTCCNY", name: "Биткоин / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "BTCPLN", name: "Биткоин / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "BTCCZK", name: "Биткоин / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "BTCINR", name: "Биткоин / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "BTCPHP", name: "Биткоин / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
        ETH: [
            { pair: "ETHUSD", name: "Эфириум / Доллар США", img: usd, imgD: usdD },
            { pair: "ETHEUR", name: "Эфириум / Евро", img: euro, imgD: euroD },
            { pair: "ETHGBP", name: "Эфириум / Британский фунт", img: pound, imgD: poundD },
            { pair: "ETHCNY", name: "Эфириум / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "ETHPLN", name: "Эфириум / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "ETHCZK", name: "Эфириум / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "ETHINR", name: "Эфириум / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "ETHPHP", name: "Биткоин / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
        EOS: [
            { pair: "EOSUSD", name: "EOS / Доллар США", img: usd, imgD: usdD },
            { pair: "EOSEUR", name: "EOS / Евро", img: euro, imgD: euroD },
            { pair: "EOSGBP", name: "EOS / Британский фунт", img: pound, imgD: poundD },
            { pair: "EOSCNY", name: "EOS / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "EOSPLN", name: "EOS / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "EOSCZK", name: "EOS / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "EOSINR", name: "EOS / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "EOSPHP", name: "EOS / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
        LTC: [
            { pair: "LTCUSD", name: "Лайткоин / Доллар США", img: usd, imgD: usdD },
            { pair: "LTCEUR", name: "Лайткоин / Евро", img: euro, imgD: euroD },
            { pair: "LTCGBP", name: "Лайткоин / Британский фунт", img: pound, imgD: poundD },
            { pair: "LTCCNY", name: "Лайткоин / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "LTCPLN", name: "Лайткоин / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "LTCCZK", name: "Лайткоин / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "LTCINR", name: "Лайткоин / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "LTCPHP", name: "Лайткоин / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
        XLM: [
            { pair: "XLMUSD", name: "Стеллар / Доллар США", img: usd, imgD: usdD },
            { pair: "XLMEUR", name: "Стеллар / Евро", img: euro, imgD: euroD },
            { pair: "XLMGBP", name: "Стеллар / Британский фунт", img: pound, imgD: poundD },
            { pair: "XLMCNY", name: "Стеллар / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "XLMPLN", name: "Стеллар / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "XLMCZK", name: "Стеллар / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "XLMINR", name: "Стеллар / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "XLMPHP", name: "Стеллар / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
        XMR: [
            { pair: "XMRUSD", name: "Монеро / Доллар США", img: usd, imgD: usdD },
            { pair: "XMREUR", name: "Монеро / Евро", img: euro, imgD: euroD },
            { pair: "XMRGBP", name: "Монеро / Британский фунт", img: pound, imgD: poundD },
            { pair: "XMRCNY", name: "Монеро / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "XMRPLN", name: "Монеро / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "XMRCZK", name: "Монеро / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "XMRINR", name: "Монеро / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "XMRPHP", name: "Монеро / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
    }
}
