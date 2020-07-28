import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import PastPerson from '../PastPerson/PastPerson';

class People extends Component {

    state = {
        people: []
    };

    componentDidMount() { // Retrieve initial state to populate people array
        const localPeopleState = window.localStorage.getItem("people");
        if (localPeopleState !== null) { // The people state was found in localStorage - use that to populate
            this.setState({
                people: JSON.parse(localPeopleState)
            });
        } else { // No local state found, get static data from JSON file instead
            fetch('assets/json/data.json')
            .then( response => {
                if (response.status !== 200)  {
                    console.log("Uh oh, couldn't retrieve initial data!");
                    return;
                }
                response.json().then( data => {
                    console.log("Retrived initial data:");
                    this.setState({
                        people: data.People
                    });
                    this.persistLocalStorage();

            });
        });
        }
        
    }

    addVoteHandler = (personId,voteType) => { // Adds a vote to a Person, good or bad indicated by "voteType"
        console.log("addVoteHandler("+personId+","+voteType+")");
        const oldPeopleState = this.state.people;
        const newPeopleState = oldPeopleState.map( (person) => {
            if (person.id === personId) {
                console.log("current vote for "+person.name+": "+voteType);
                person.currentVote = voteType;
            }
            return person;
        });
        this.setState({
            people: newPeopleState
        });
        
    };

    submitVoteHandler = (personId) => { // Submits vote: a selected "thumbs x" doesn't store your vote without this
        
        const oldPeopleState = this.state.people;
        const newPeopleState = oldPeopleState.map( (person) => {
            if (person.id === personId) {
                person.votes[person.currentVote] = person.votes[person.currentVote] + 1;
                person.votingClosed = true;
                person.currentVote = null;
            }
            return person;
        });
        this.persistLocalStorage(newPeopleState);
        this.setState({
            people: newPeopleState
        });
        
    }

    unblockVotingHandler = (personId) => { // Permits voting again after you submitted one vote
        const oldPeopleState = this.state.people;
        const newPeopleState = oldPeopleState.map( (person) => {
            if (person.id === personId) {
                person.votingClosed = false;
            }
            return person;
        });
        this.persistLocalStorage();
        this.setState({
            people: newPeopleState
        });
    };

    persistLocalStorage = (persistable = this.state.people) => { // Persists the whole person collection to browser storage
        window.localStorage.setItem("people", JSON.stringify(persistable));
    };

    render () {

        const people = this.state.people.map( person => {
            return <PastPerson 
                key={"person-"+person.id}
                id={person.id}
                picture={person.picture}
                name={person.name}
                description={person.description}
                votes={person.votes}
                category={person.category}    
                addVoteHandler={this.addVoteHandler}
                submitVoteHandler={() => this.submitVoteHandler(person.id)}
                currentVote={person.currentVote ? person.currentVote : null}
                votingClosed={person.votingClosed}
                unblockVoting={() => this.unblockVotingHandler(person.id)}
            />
        });

        return (
            <Aux>
                <section className="previous-rulings">
                    <h2>Previous Rulings</h2>
                    <div className="people">
                    {people}
                    </div>
                </section>
            </Aux>
        );
    }
};

export default People;