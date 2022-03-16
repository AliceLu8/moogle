function Footer() {
    return (
        <footer className="footer-container">
            <section className="item-footer">
                <div className="about">
                    <h4 className="footer-title">About Us</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Moogle</li>
                        <li>Favourite</li>
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
                <p>&copy; 2022 FWD-29 | Created by Alice Lu</p>
            </div>
        </footer>
    )
}

export default Footer;
