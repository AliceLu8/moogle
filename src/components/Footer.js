import React from 'react';
import { NavLink } from 'react-router-dom';
import { getYear } from '../utilities/getDates';

function Footer({ copyright, author }) {
    return (
        <footer className="footer-container">
            <section className="item-footer">
                <div className="about">
                    <h4 className="footer-title">About Us</h4>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About Moogle</NavLink></li>
                        <li><NavLink to='/favs'>Favourite</NavLink></li>
                    </ul>
                </div>
                <div className="info">
                    <h4 className="footer-title">Company Info</h4>
                    <ul>
                        <li>Corporate Info</li>
                        <li>Press Room</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>
                <div className="contact">
                    <h4 className="footer-title">Contact Us</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Email</li>
                    </ul>
                </div>
            </section>

            <div className="copyright">
                <p>&copy; {copyright} | {author} </p>
            </div>
        </footer>
    )
}


Footer.defaultProps = {
    author: 'Alice Lu',
    copyright: getYear()
}

export default Footer;