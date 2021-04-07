import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Search1.css"
import { fetchCompanySearch } from '../../store/stock-reducer';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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
        this.setState({ searchRequest: this.textInput.value },
            () => fetchCompanySearch(this.textInput.value)
                .then(data => {
                    e.persist();
                    this.setState({
                        searchResults: data.bestMatches,
                        show: true
                    })
                })
        )
        console.log(this.state.searchResults)
    }
    clearSearch() {
        this.setState({ searchRequest: '' });
    }

    render() {
        let searchResults = this.state.searchResults;
        if (this.state.searchResults) {
            searchResults = searchResults.map((res, index) => (
                <li className="company-search-results-list-item" key={index}>
                    <div onClick={() => this.setState({ show: false })}>
                        <div className='company-search-results-list-company-name'>
                            {res['2. name']}
                        </div>
                        < div className='company-search-results-list-company-ticker' >
                            {res['1. symbol']}
                        </div>
                    </div>
                </li>
            ))
        }
        return (
            <div className='company-search'>
                <div className='company-search-input'>
                    <form className='company-search-bar-nav'>
                        <div className='company-search-first'>
                            <SearchIcon />
                            <input type="text" placeholder='Search' value={this.state.searchRequest} onChange={this.handleChange}
                                ref={(input) => (this.textInput = input)}
                            />
                        </div>
                    </form>
                    < HighlightOffIcon onClick={this.clearSearch} />
                </div>

                <div className='company-search-results'>
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
                </div>
            </div>
        )
    }
}
