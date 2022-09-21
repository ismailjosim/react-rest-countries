import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='navigation bg-light'>
            <div className='container'>
                <nav className='navbar navbar-expand-lg navbar-expand-md navbar-light'>
                    <a href='#' className='navbar-brand fw-bold fs-4 text-uppercase'>
                        REST
                    </a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                        data-bs-target='#mobileMenu' aria-controls='mobileMenu' aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='mobileMenu'>
                        <ul className='navbar-nav ms-auto text-center'>
                            <li className='nav-item'>
                                <a className='nav-link fs-6 fw-semibold active' href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fs-6 fw-semibold' href='#'>Countries</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fs-6 fw-semibold' href='#'>Places</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fs-6 fw-semibold' href='#'>Offers</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fs-6 fw-semibold' href='#'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link fs-6 fw-semibold' href='#'>Book</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
