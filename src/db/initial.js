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
import Mastercard from "../assets/Mastercard.svg"
import chevron from "../assets/chevron.svg"
import starbucks from "../assets/starbucks.svg"
import ford from "../assets/ford.svg"
import volkswagen from "../assets/volkswagen.svg"
import allianz from "../assets/allianz.svg"
import bmw from "../assets/bmw.svg"
import siemens from "../assets/siemens.svg"
import krupp from "../assets/krupp.svg"
import lufthansa from "../assets/lufthansa.svg"
import adidas from "../assets/adidas.svg"
import deutsche from "../assets/deutsche.svg"
import total from "../assets/total.svg"
import axa from "../assets/axa.svg"
import Credit_Agricole from "../assets/Credit_Agricole.svg"
import carrefour from "../assets/carrefour.svg"
import renault from "../assets/renault.svg"
import orange from "../assets/orange.svg"
import michelin from "../assets/michelin.svg"
import Sanofi from "../assets/Sanofi.svg"
import bp from "../assets/bp.svg"
import vodafone from "../assets/vodafone.svg"
import BT from "../assets/BT.svg"
import astrazeneca from "../assets/astrazeneca.svg"
import shell from "../assets/shell.svg"
import ITBAF from "../assets/ITBA.F.svg"
import standard from "../assets/standard-chartered1.svg"
import Reckitt from "../assets/Reckitt.svg"
import nestle from "../assets/nestle.svg"
import roche from "../assets/roche.svg"
import novartis from "../assets/novartis.svg"
import UBS from "../assets/UBS.svg"
import abb from "../assets/abb.svg"
import zurich from "../assets/zurich.svg"
import LafargeHolcimpng from "../assets/LafargeHolcimpng.svg"
import bankofchina from "../assets/bank-of-china.svg"
import CICHY from "../assets/CICHY.svg"
import agriculturalbank from "../assets/agricultural-bank-of-china.svg"
import chinalife from "../assets/china-life.svg"
import faw from "../assets/faw.svg"
import ChinaMinmetals from "../assets/ChinaMinmetals.svg"
import Sinochem from "../assets/Sinochem.svg"
import greenland from "../assets/greenland.svg"
import logitech from "../assets/logitech.svg"

import YENGBP from "../assets/YENGBP.svg"
import USDEUR from "../assets/USDEUR.svg"
import TRYGBP from "../assets/TRYGBP.svg"
import USDILS from "../assets/USDILS.svg"
import EURINR from "../assets/EURINR.svg"
import EURTWD from "../assets/EURTWD.svg"

import EURINRd from "../assets/EURINRd.svg"
import EURTWDd from "../assets/EURTWDd.svg"
import TRYGBPd from "../assets/TRYGBPd.svg"
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
import CH from "../assets/CH.svg"
import CN from "../assets/CN.svg"

// Home
export const initial = {
    STOCK: [
        { pair: "AAPL", name: "Apple Inc", img: apple, imgD: apple },
        { pair: "TSLA", name: "Tesla Inc", img: tesla, imgD: tesla },
        { pair: "SPOT", name: "Spotify technology SA", img: spotify, imgD: spotify },
        { pair: "INTC", name: "Intel Corp", img: intel, imgD: intel },
        { pair: "AMZN", name: "Amazon Inc", img: amazon, imgD: amazon },
        { pair: "MSFT", name: "Microsoft Corporation", img: microsoft, imgD: microsoft },
    ],
    FOREX: [
        { pair: "UDEUR", name: "Доллар США / Евро", img: USDEUR, imgD: USDEURd },
        { pair: "JPYGBP", name: "Японская иена / Британский фунт", img: YENGBP, imgD: YENGBPd },
        { pair: "EURINR", name: "Евро / Индийская рупия", img: EURINR, imgD: EURINRd },
        { pair: "USDILS", name: "Доллар США  / Новый израильский шекель", img: USDILS, imgD: USDILSd },
        { pair: "TRYGBP", name: "Турецкая лира / Британский фунт", img: TRYGBP, imgD: TRYGBPd },
        { pair: "EURTWD", name: "Евро / Новый тайваньский доллар", img: EURTWD, imgD: EURTWDd },
    ],
    CRYPTO: [
        { pair: "BTCUSD", name: "Bitcoin / Доллар США", img: bitcoin, imgD: bitcoin },
        { pair: "ETHUSD", name: "Ethereum / Доллар США", img: etherium, imgD: etherium },
        { pair: "LTCUSD", name: "Litecoin / Доллар США", img: litecoin, imgD: litecoin },
        { pair: "XRPUSD", name: "Ripple / Доллар США", img: ripple, imgD: ripple },
        { pair: "XMRUSD", name: "Monero / Доллар США", img: monero, imgD: monero },
        { pair: "ZECUSD", name: "Zcash / Доллар США", img: zcash, imgD: zcash },
    ],
}
export const initialReducer = {
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
        "TRYGBP": "TRYGBP",
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
        { title: "Великобритания", pair: 'UK', img: GB, imgD: GB },
        { title: "Швейцария", pair: 'CH', img: CH, imgD: CH },
        { title: "Китай", pair: 'CN', img: CN, imgD: CN },
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

export const initialMarket = {
    STOCK: {
        US: [
            { pair: "GE", name: "General electric", img: general, imgD: general },
            { pair: "FB", name: "Facebook Inc", img: facebook, imgD: facebook },
            { pair: "NKE", name: "Nike Inc", img: nike, imgD: nike },
            { pair: "MCD", name: "McDonald’s", img: mcdonalds, imgD: mcdonalds },
            { pair: "MA", name: "Mastercard Incorporated", img: Mastercard, imgD: Mastercard },
            { pair: "CVX", name: "Chevron corporation", img: chevron, imgD: chevron },
            { pair: "SBUX", name: "Starbucks corp", img: starbucks, imgD: starbucks },
            { pair: "FORD", name: "Ford motor company", img: ford, imgD: ford },
        ],
        DE: [
            { pair: "VOW3.FRK", name: "Volkswagen AG", img: volkswagen, imgD: volkswagen },
            { pair: "ALV.FRK", name: "Allianz SE", img: allianz, imgD: allianz },
            { pair: "BMW.FRK", name: "Bay.Motoren Werke AG", img: bmw, imgD: bmw },
            { pair: "SIE.FRK", name: "Siemens AG", img: siemens, imgD: siemens },
            { pair: "TKA.FRK", name: "Thyssenkrupp AG", img: krupp, imgD: krupp },
            { pair: "LHA.FRK", name: "Deutsche Lufthansa AG", img: lufthansa, imgD: lufthansa },
            { pair: "ADS.FRK", name: "Adidas AG", img: adidas, imgD: adidas },
            { pair: "DBK.FRK", name: "Deutsche Bank AG", img: deutsche, imgD: deutsche },

        ],
        FR: [
            { pair: "FP.PAR", name: "Total SE", img: total, imgD: total },
            { pair: "CS.PAR", name: "Axa SA", img: axa, imgD: axa },
            { pair: "ACA.PAR", name: "Crédit Agricole S.A", img: Credit_Agricole, imgD: Credit_Agricole },
            { pair: "CA.PAR", name: "Carrefour SA", img: carrefour, imgD: carrefour },
            { pair: "RNO.PAR", name: "Renault SA", img: renault, imgD: renault },
            { pair: "ORA.PAR", name: "Orange S.A", img: orange, imgD: orange },
            { pair: "ML.PAR", name: "Michelin", img: michelin, imgD: michelin },
            { pair: "SAN.PAR", name: "Sanofi", img: Sanofi, imgD: Sanofi },
        ],
        UK: [
            { pair: "RDSB.LON", name: "Royal Dutch Shell PLC", img: shell, imgD: shell },
            { pair: "BP.LON", name: "BP PLC", img: bp, imgD: bp },
            { pair: "VOD.LON", name: "Vodafone Group PLC", img: vodafone, imgD: vodafone },// + 
            { pair: "BT-A.LON", name: "BT Group PLC", img: BT, imgD: BT },
            { pair: "AZN.LON", name: "Astra Zeneca PLC", img: astrazeneca, imgD: astrazeneca },
            { pair: "IMB.LON", name: "Imperial Brands PLC", img: ITBAF, imgD: ITBAF },
            { pair: "STAN.LON", name: "Standard Chartered PLC", img: standard, imgD: standard },
            { pair: "RB.LON", name: "Reckitt Benckiser Group PLC", img: Reckitt, imgD: Reckitt },
        ],
        CH: [
            { pair: "NSRGY", name: "Nestle SA", img: nestle, imgD: nestle },
            { pair: "RHHBY", name: "Roche Holding AG", img: roche, imgD: roche },
            { pair: "NVS", name: "Novartis AG", img: novartis, imgD: novartis },
            { pair: "UBS", name: "UBS Group AG", img: UBS, imgD: UBS },
            { pair: "ABB", name: "ABB Ltd", img: abb, imgD: abb },
            { pair: "ZFSVF", name: "Zurich Insurance Group AG Ltd", img: zurich, imgD: zurich },
            { pair: "LOGI", name: "Logitech International SA", img: logitech, imgD: logitech },
            { pair: "HCMLY", name: "LafargeHolcim Ltd", img: LafargeHolcimpng, imgD: LafargeHolcimpng },
        ],
        CN: [
            { pair: "601988.SHH", name: "Bank of China Ltd", img: bankofchina, imgD: bankofchina },
            { pair: "601939.SHH", name: "China Construction Bank Corp", img: CICHY, imgD: CICHY },
            { pair: "601288.SHH", name: "Agricultural Bank of China Ltd", img: agriculturalbank, imgD: agriculturalbank },
            { pair: "601628.SHH", name: "China Life Insurance Company Ltd", img: chinalife, imgD: chinalife },
            { pair: "000800.SHZ", name: "Faw Car Company Ltd", img: faw, imgD: faw },
            { pair: "000831.SHZ", name: "Minmetals Rare Earth Company Ltd", img: ChinaMinmetals, imgD: ChinaMinmetals },
            { pair: "600500.SHH", name: "Sinochem International Corp", img: Sinochem, imgD: Sinochem },
            { pair: "600606.SHH", name: "Greenland Holdings Corp Ltd", img: greenland, imgD: greenland },
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
            { pair: "BTCUSD", name: "Bitcoin / Доллар США", img: usd, imgD: usdD },
            { pair: "BTCEUR", name: "Bitcoin / Евро", img: euro, imgD: euroD },
            { pair: "BTCGBP", name: "Bitcoin / Британский фунт", img: pound, imgD: poundD },
            { pair: "BTCCNY", name: "Bitcoin / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "BTCPLN", name: "Bitcoin / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "BTCCZK", name: "Bitcoin / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "BTCINR", name: "Bitcoin / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "BTCPHP", name: "Bitcoin / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
        ETH: [
            { pair: "ETHUSD", name: "Ethereum / Доллар США", img: usd, imgD: usdD },
            { pair: "ETHEUR", name: "Ethereum / Евро", img: euro, imgD: euroD },
            { pair: "ETHGBP", name: "Ethereum / Британский фунт", img: pound, imgD: poundD },
            { pair: "ETHCNY", name: "Ethereum / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "ETHPLN", name: "Ethereum / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "ETHCZK", name: "Ethereum / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "ETHINR", name: "Ethereum / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "ETHPHP", name: "Ethereum / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
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
            { pair: "LTCUSD", name: "Litecoin / Доллар США", img: usd, imgD: usdD },
            { pair: "LTCEUR", name: "Litecoin / Евро", img: euro, imgD: euroD },
            { pair: "LTCGBP", name: "Litecoin / Британский фунт", img: pound, imgD: poundD },
            { pair: "LTCCNY", name: "Litecoin / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "LTCPLN", name: "Litecoin / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "LTCCZK", name: "Litecoin / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "LTCINR", name: "Litecoin / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "LTCPHP", name: "Litecoin / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
        XLM: [
            { pair: "XLMUSD", name: "Stellar / Доллар США", img: usd, imgD: usdD },
            { pair: "XLMEUR", name: "Stellar / Евро", img: euro, imgD: euroD },
            { pair: "XLMGBP", name: "Stellar / Британский фунт", img: pound, imgD: poundD },
            { pair: "XLMCNY", name: "Stellar / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "XLMPLN", name: "Stellar / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "XLMCZK", name: "Stellar / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "XLMINR", name: "Stellar / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "XLMPHP", name: "Stellar / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
        XMR: [
            { pair: "XMRUSD", name: "Monero / Доллар США", img: usd, imgD: usdD },
            { pair: "XMREUR", name: "Monero / Евро", img: euro, imgD: euroD },
            { pair: "XMRGBP", name: "Monero / Британский фунт", img: pound, imgD: poundD },
            { pair: "XMRCNY", name: "Monero / Китайский юань", img: yuan, imgD: yuanD },
            { pair: "XMRPLN", name: "Monero / Польский злотый", img: pzloty, imgD: pzlotyD },
            { pair: "XMRCZK", name: "Monero / Чешская крона", img: czechkoruna, imgD: czechkorunaD },
            { pair: "XMRINR", name: "Monero / Индийская рупия", img: indianrupee, imgD: indianrupeeD },
            { pair: "XMRPHP", name: "Monero / Филиппинское песо", img: philippinepeso, imgD: philippinepesoD },
        ],
    }
}
