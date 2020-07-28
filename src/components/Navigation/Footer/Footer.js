import React from 'react';
import Aux from '../../../hoc/Aux';

const Footer = (props) => {

    return (
        <Aux>
            <footer>
        <section>
            <nav>
                <a href="terms-conditions.html">Terms and Conditions</a>
                <a href="privacy-policy.html">Privacy Policy</a>
                <a href="contact-us.html">Contact Us</a>
            </nav>
            <nav className="social-networks">
                <a href="https://www.facebook.com" className="facebook-link"><span>Facebook</span></a>
                <a href="https://www.twitter.com" className="twitter-link"><span>Twitter</span></a>
            </nav>

        </section>

    </footer>
        </Aux>
    );
};

export default Footer;