import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        tags : ['tag1', 'tag2', 'tag3']
    }

    renderTags() {
        if (this.state.tags.length === 0) { return <h1>No tags found</h1>}
        return <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>
    }
    render() { 
        return (<React.Fragment>
                { this.state.tags.length === 0 &&  "Welcome to JS Truthy Falsy Expressions"}
                {this.renderTags()}
            </React.Fragment>);

    }
}
 
export default Counter;