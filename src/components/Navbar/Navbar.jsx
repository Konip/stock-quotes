import "./Navbar.css"
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addColorTheme, burger } from '../../store/stock-reducer'

export default function Navbar({ colorTheme, burg }) {
    const dispatch = useDispatch()

    const body = document.querySelector('body')

    function lock() {
        body.classList.remove('_lock')
        dispatch(burger())
    }
    return (
        <div className={colorTheme && !burg ? 'navbar-light' : colorTheme && burg ? 'navbar-light-b' : burg ? 'navbar-dark-b' :
            'navbar-dark'} >
            < div className="logo" >
                <Link to='/'>
                    Stock
               <span>Quotes</span>
                </Link>
            </div >
            <div className="navbar-wraper">
                <div className="navbar-wrap" onClick={burg ? () => lock() : null}>
                    <NavLink exact to="/" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <div className="name">Главная</div>
                    </NavLink>
                    <div className="popup">Home</div>
                </div>
                <div className="navbar-wrap" onClick={burg ? () => lock() : null}>
                    <NavLink to="/markets" >
                        <svg className='chart' xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 26 26" fill="#bdbdbd" stroke="none"
                            strokeWidth="0.1" >
                            <path d="M23 22a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 012 0v16.7l6.17-9.25a1 1 0 011.66 0l3.1 4.65 7.2-12.6a1 1 0 011.74 1l-8 14a1 1 0 01-.87.5 1 1 0 01-.86-.45L10 11.8 3.87 21H22a1 1 0 011 1z" />
                        </svg>
                        <div className="name">График</div>
                    </NavLink>
                    <div className="popup">Chart</div>
                </div>
                <div className="navbar-wrap" onClick={burg ? () => lock() : null}>
                    <div className="nothing">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <div className="name">Информация</div>
                    </div>
                    <div className="popup">Version 1.1</div>
                </div>
                {
                    colorTheme
                        ?
                        <div className="navbar-wrap" onClick={() => dispatch(addColorTheme())}>
                            <div className="nothing">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                                <div className="name">Сменить Тему</div>
                            </div>
                            <div className="popup">Switch Theme</div>
                        </div>
                        :
                        <div className="navbar-wrap" onClick={() => dispatch(addColorTheme())}>
                            <div className="nothing">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                                <div className="name">Сменить Тему</div>
                            </div>
                            <div className="popup">Switch Theme</div>
                        </div>
                }
            </div>
        </div >
    )
}
