import React, { Component } from 'react'
import "./Search.css"
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { TypeWriter } from '../../utils/TypeWriter';
import {db} from '../../db/db'

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
        // this.request = this.request.bind(this)
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
    request(type, time, pair) {
        this.props.request(type, time, pair)
        this.clear()
    }
    clear() {
        this.setState({ searchRequest: '' });
        let input = document.querySelector(".company-search-results")
        input.textContent = ""
        this.state.show = false
    }

    render() {
        // console.log('render')
        let result = this.state.result
        let chartTime = this.props.chartTime
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
                            <Link className={this.props.colorTheme ? 'result-items' : 'result-items-dark'} to="/"
                                onClick={() => (this.request(res.type, chartTime, res.pair))}>
                                <div className={this.props.colorTheme ? 'result-item' : 'result-item-dark'}>{`${res.pair}   ${res.name}`}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}
