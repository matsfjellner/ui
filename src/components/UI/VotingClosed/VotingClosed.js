import React from 'react';
import Aux from '../../../hoc/Aux';

const VotingClosed = (props) => {

    return (
        
        <Aux>
            <p className="description">Thank you for voting!</p>
                <div className="more">
                    <p>
                        <button onClick={props.unblockVoting}>Vote again</button>
                    </p>
                    <span className="tags">
                        <strong>1 month ago</strong>
                        in {props.category}
                    </span>
                </div>
                
        </Aux>
                            
    );
};

export default VotingClosed;