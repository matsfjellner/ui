import React from 'react';
import Aux from '../../../hoc/Aux';
import VotingOpen from '../../UI/VotingOpen/VotingOpen';
import VotingClosed from '../../UI/VotingClosed/VotingClosed';
import CustomProperties from 'react-custom-properties';

const PastPerson = (props) => {

    const pictureStyles = {
        backgroundImage: 'url(./assets/images/' +  props.picture + ')'
    };

    const votesFor = ( props.votes.bad > 0 ? Math.round((props.votes.good / (props.votes.bad + props.votes.good)) * 100) : 100);
    const votingControl = (props.votingClosed ? 
        <VotingClosed 
            unblockVoting={props.unblockVoting}
            category={props.category}
        />
        :
        <VotingOpen
            description={props.description}
            goodVoteHandler={() => props.addVoteHandler(props.id, "good")}
            badVoteHandler={() => props.addVoteHandler(props.id, "bad")}
            submitVoteHandler={props.submitVoteHandler}
            category={props.category}
            currentVote={props.currentVote}
        />
        );

    return (
        
        <Aux>
            <div className="person" style={pictureStyles}>
                    <div className="info">
                        <h3 className={(votesFor >= 50 ? "hype" : "")}>{props.name}</h3>
                        
                        {votingControl}
                        
                        <nav className="votes-bar">
                            <CustomProperties properties={{ '--percentage': votesFor+'%' }}>
                            <p>
                                <span className="thumbs-up"></span>
                                <span>{votesFor}%</span>
                            </p>
                            </CustomProperties>
                            <CustomProperties properties={{ '--percentage': (100 - votesFor)+'%' }}>
                            <p>
                                <span>{100 - votesFor}%</span>
                                <span className="thumbs-down"></span>
                            </p>
                            </CustomProperties>
                        </nav>
                    </div>
                </div>
        </Aux>
    );
};

export default PastPerson;