import React from 'react';
import Aux from '../../../hoc/Aux';

const VotingOpen = (props) => {
    const thumbsUpClasses = (props.currentVote === "good" ? "thumbs-up selected" : "thumbs-up");
    const thumbsDownClasses = (props.currentVote === "bad" ? "thumbs-down selected" : "thumbs-down");
    return (
        
        <Aux>
            <p className="description">{props.description}</p>
            <div className="more">
                <p className="vote-buttons">
                    <button onClick={props.goodVoteHandler} className={thumbsUpClasses}></button>
                    <button onClick={props.badVoteHandler} className={thumbsDownClasses}></button>
                    <button onClick={props.currentVote ? props.submitVoteHandler : null} disabled={props.currentVote ? false : true}>Vote now</button>
                </p>
                <span className="tags">
                    <strong>1 month ago</strong>
                    in {props.category}
                </span>
            </div>
        </Aux>
                            
    );
};

export default VotingOpen;