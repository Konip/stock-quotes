import React, { Component } from 'react'
import "./Search.css"
import { fetchCompanySearch } from '../../store/stock-reducer';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const db = [
    { title: "бургер с сыром" },
    { title: "бургер с огурцом" },
    { title: "бургер" },
    { title: "сыр" },
    { title: "хлеб" },
    { title: "молоко" },
    { title: "яблоко" },
    { title: "апельсин" },
]

export default class Search1 extends Component {

    constructor() {
        super()
        this.state = {
            searchRequest: "",
            searchResults: "",
            show: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.clearSearch = this.clearSearch.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        // e.persist();
        this.setState({ searchRequest: this.textInput.value })
        let arr = []

        if (this.textInput.value.length > 1) {

            for (let i = 0; i < db.length; i++) {
                let searchReqStart = new RegExp('^' + this.textInput.value + '.*')
                let searchReqMiddle = new RegExp(' ' + this.textInput.value + '.*')

                if (searchReqStart.test(db[i].title) || searchReqStart.test(db[i].title)) {
                    arr.push(db[i])

                }
                console.log(arr)
            }
            // console.log(this.state.searchRequest)
            let inp = document.querySelector(".company-search-results")
            let parent = document.createElement('div')
            parent.classList.add("red")
            arr.map(a => {
                console.log(a)
                inp.append(parent)
                parent.innerHTML = a.title
                // console.log(a)
                // inp.append(parent)
                // parent.innerHTML = a.title
            })
        }

        // this.setState({ searchRequest: this.textInput.value },
        //     () => fetchCompanySearch(this.textInput.value)
        //         .then(data => {
        //             e.persist();
        //             this.setState({
        //                 searchResults: data.bestMatches,
        //                 show: true
        //             })
        //         })
        // )


    }
    clearSearch() {
        this.setState({ searchRequest: '' });
    }

    render() {
        let searchResults = this.state.searchResults;
        // if (this.state.searchResults) {
        //     searchResults = searchResults.map((res, index) => (
        //         <li className="company-search-results-list-item" key={index}>
        //             <div onClick={() => this.setState({ show: false })}>
        //                 <div className='company-search-results-list-company-name'>
        //                     {res['2. name']}
        //                 </div>
        //                 < div className='company-search-results-list-company-ticker' >
        //                     {res['1. symbol']}
        //                 </div>
        //             </div>
        //         </li>
        //     ))
        // }
        return (
            <div className='company-search'>
                <div className='company-search-input'>
                    <form className='company-search-bar-nav'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" 
                        cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input id="input" type="text" placeholder='Search' value={this.state.searchRequest} onChange={this.handleChange}
                            ref={(input) => (this.textInput = input)}
                        />
                    </form>
                    < HighlightOffIcon onClick={this.clearSearch} />
                </div>

                <div className='company-search-results'>
                </div>
                {/* <div className='company-search-results'>
                    {this.state.show &&
                        (<>
                            <div className='modal' onClick={() => this.setState({
                                show: false,
                                searchRequest: ''
                            })}></div>
                            <ul className={`company-search-results-list`}>
                                {searchResults}
                            </ul>
                        </>)
                    }
                </div> */}
            </div>
        )
    }
}
