import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Navigation/Header/Header';
import Footer from '../Navigation/Footer/Footer';
import TopPerson from '../People/TopPerson/TopPerson';

class Layout extends Component {

    state = {
    }

    // sideDrawerClosedHandler = () => {
    //     this.setState({showSideDrawer: false})
    // }

    // sideDrawerToggleHandler = () => {

    //     this.setState( (prevState) => {
    //         return {showSideDrawer: !prevState.showSideDrawer};
    //     } );

    // }

    render () {
        const pictureStyles = {
        backgroundImage: 'url('+process.env.PUBLIC_URL+'/assets/images/francis2.jpg)'
    };
        return (
            <Aux>
                <Header />
                <main>
                    <section className="main-ruling" style={pictureStyles}>
                    <TopPerson />
                    </section>
                </main>
                <section className="secondary">
                    <div className="alert">
                        <h3><span>Speak out. Be heard.</span>Be Counted</h3>
                        <p>
                            Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely.
                            It's easy. You share your opinion, we analyze and put the data in a public report.
                        </p>
                        <button>
                                <svg>
                                    <path strokeWidth="1" fill="none" d="M6.25,6.25,17.75,17.75" />
                                    <path strokeWidth="1" fill="none" d="M6.25,17.75,17.75,6.25" />
                                </svg>
                        </button>
                    </div>
                    {this.props.children}
                    <div className="add-name">
                        <p>Is there anyone else you would want us to add?</p>
                        <button>Submit a Name</button>
                    </div>
                </section>
                <Footer />
            </Aux>
        );
    }

    
};

export default Layout;