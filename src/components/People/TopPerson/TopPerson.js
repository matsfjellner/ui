import React from 'react';
import Aux from '../../../hoc/Aux';

const TopPerson = (props) => {

    return (
        <Aux>
            {/* <div className="person full-view"> */}
                
                <div className="info">
                    <div className="info-top">
                        <h3><span>What's your opionion on</span>Pope Francis?</h3>
                        <p className="description">He's talking tough on clergy sexual abuse, but is he just another papal
                            pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
                        <a href="https://en.wikipedia.org/wiki/Pope_Francis" className="link-wiki">More information</a>
                        <h4>What's Your Verdict?</h4>
                    </div>
                    <nav className="vote">
                        <button className="thumbs-up"></button>
                        <button className="thumbs-down"></button>
                    </nav>
                    
                </div>
                <div className="time-left">
                        <p style={{width: '26%'}}>Closing in</p>
                        <span className="days"><strong>22</strong> days</span>
                </div>
            {/* </div> */}
        </Aux>
    );
};

export default TopPerson;