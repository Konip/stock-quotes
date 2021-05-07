import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { burger } from '../../store/stock-reducer'
import './Burger.css'

export default function Burger({ burg, colorTheme }) {
    const dispatch = useDispatch()

    const body = document.querySelector('body')

    function lock() {
        if (!burg) body.classList.add('_lock')
        else if (body.classList.value === '_lock' && burg) body.classList.remove('_lock')
        dispatch(burger())
    }
    return (
        <div className={colorTheme ? 'burger' : 'burger-dark'} onClick={() => lock()}>
            {burg
                ? <>
                    <Link className='header' to='/'>
                        Stock
               <span>Quotes</span>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4d4f51"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </>
                :
                <>
                    <Link  className='header' to='/'>
                        Stock
               <span>Quotes</span>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4d4f51"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-justify">
                        <line x1="21" y1="10" x2="3" y2="10"></line>
                        <line x1="21" y1="6" x2="3" y2="6"></line>
                        <line x1="21" y1="14" x2="3" y2="14"></line>
                        <line x1="21" y1="18" x2="3" y2="18"></line>
                    </svg>
                </>

            }
        </div>
    )
}
