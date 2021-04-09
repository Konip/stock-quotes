import React, { Component } from 'react'
import "./Search.css"
import { fetchCompanySearch } from '../../store/stock-reducer';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { TypeWriter } from '../../utils/TypeWriter';

const db = [
    { pair: "AAPL", name: "APPLE INC" },
    { pair: "AAPL", name: "APPLOLOLOL" },
    { pair: "AAPL", name: "APPLOLOLOL" },
    { pair: "AAPL", name: "APPLOLOLOL" },
    { pair: "AAPL", name: "APPLOLOLOL" },
    { pair: "TSLA", name: "TESLA INC" },
    { pair: "SPOT", name: "SPOTIFY TECHNOLOGY S.A" },
    { pair: "INTC", name: "INTEL CORP" },
    { pair: "AMZN", name: "AMAZON COM INC" },
    { pair: "MSFT", name: "MICROSOFT CORPORATION" },
    { pair: "USDEUR", name: "Доллар США / Евро" },
    { pair: "JPYGBP", name: "Японская иена / Британский фунт" },
    { pair: "EURINR", name: "Евро / Индийская рупия" },
    { pair: "USDILS", name: "Доллар США  / Новый израильский шекель" },
    { pair: "BYNGBP", name: "Белорусский рубль / Британский фунт" },
    { pair: "EURTWD", name: "Евро / Новый тайваньский доллар" },
    { pair: "BTCUSD", name: "Биткоин / Доллар США" },
    { pair: "ETHUSD", name: "Эфириум / Доллар США" },
    { pair: "LTCUSD", name: "Лайткоин / Доллар США" },
    { pair: "XRPUSD", name: "Рипл / Доллар США" },
    { pair: "XMRUSD", name: "Монеро / Доллар США" },
    { pair: "ZECUSD", name: "Zcash / Доллар США" },
]

document.addEventListener('DOMContentLoaded', init)

function init() {
    const txtElement = document.querySelector('.input')
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait')

    new TypeWriter(txtElement, words, wait)
}

export default class Search extends Component {

    constructor() {
        super()
        this.state = {
            searchRequest: "",
            result: [],
            show: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.clear = this.clear.bind(this)
    }

    handleChange(e) {
        e.preventDefault()

        this.setState({ searchRequest: this.textInput.value })
        let input = document.querySelector(".company-search-results")
        this.state.show = true
        if (this.textInput.value.length === 0) { this.state.show = false }
        if (this.textInput.value.length > 1) {

            input.textContent = ""

            for (let i = 0; i < db.length; i++) {
                let searchReqStart = new RegExp('^' + this.textInput.value + '.*', 'i')
                let searchReqMiddle = new RegExp(' ' + this.textInput.value + '.*', 'i')

                if (searchReqStart.test(db[i].name) || searchReqMiddle.test(db[i].name)
                    || searchReqStart.test(db[i].pair) || searchReqMiddle.test(db[i].pair)) {
                    this.state.result.push(db[i])
                }
            }
        }
        else {
            input.textContent = ""
        }

    }
    clear() {
        this.setState({ searchRequest: '' });
        let input = document.querySelector(".company-search-results")
        input.textContent = ""
        this.state.show = false
    }

    render() {
        let result = this.state.result
        return (
            <div className='company-search'>
                <div className={this.props.colorTheme ? 'company-search-input' : 'company-search-input-dark'}>
                    <form className='company-search-bar-nav'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="rgba(108,117,125,.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11"
                                cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input className='input' type="text" placeholder='Search' value={this.state.searchRequest} onChange={this.handleChange}
                            ref={(input) => (this.textInput = input)} data-wait="3000" data-words='["Bitcoin","Apple","Tesla","Microsoft"]'
                        />
                    </form>
                   
                    {this.state.show &&
                        < HighlightOffIcon onClick={this.clear} />
                    }
                </div>

                <div className='company-search-results'>
                    {
                        result.map(res => (
                            <Link className={this.props.colorTheme ? 'result-items' : 'result-items-dark'}  to="/markets" onClick={this.clear}>
                                <div className={this.props.colorTheme ? 'result-item' : 'result-item-dark'}>{`${res.pair}    ${res.name}`}</div>
                                {/* <div className="result-item"></div> */}
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}
