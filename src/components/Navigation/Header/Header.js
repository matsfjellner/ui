import React from 'react';
import Aux from '../../../hoc/Aux';

const header = (props) => {

    return (
        <Aux>
            <header>
            <section>
            <h1><a href=".">Rule of Thumb.</a></h1>
            <nav>
                <ul>
                    <li>
                        <a href="past-trials.html">Past Trials</a>
                        <div>
                        <ul>
                            <li><a href="past-trials-politics.html">Politics</a></li>
                            <li><a href="past-trials-business.html">Business</a></li>
                            <li><a href="past-trials-sports.html">Sports</a></li>
                            <li><a href="past-trials-culture.html">Culture</a></li>
                        </ul>
                        </div>
                    </li>
                    <li>
                        <a href="how-it-works.html">How It Works</a>
                    </li>
                    <li>
                        <a href="login-signup.html">Log In / Sign Up</a>        
                    </li>
                    <li className="search">
                        <a href="." className="search-icon">
                            <span>Search</span>
                        </a>
                    </li>
                </ul>

            </nav>
        </section>
        </header>
        </Aux>
    );
};

export default header;