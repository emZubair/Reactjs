import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { counters: [
        {id: 1, value: 1},
        {id: 2, value: 3},
        {id: 3, value: 5},
        {id: 4, value: 8},
        {id: 5, value: 1},
        {id: 6, value: 2}
    ] }

    handleDelete = (counterID) => {
        console.log("handleDelete "+ counterID)
        const counters = this.state.counters.filter(counter => counter.id !== counterID)
        this.setState({counters})
    }

    render() { 
        return ( <div>
            <button className="btn btn-primary btn-sm m-2">Reset State</button>
            {this.state.counters.map(counter => 
            <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} selected={true}>
                <h1>Booth number:{counter.id}</h1>
            </Counter>
        )}
        </div> );
    }
}
 
export default Counters;