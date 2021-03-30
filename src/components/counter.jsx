import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0,
        imageURL: "https://picsum.photos/200",
        tags : ['tag1', 'tag2', 'tag3']
    }
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }
    render() { 
        return (<React.Fragment>
            <img src={this.state.imageURL} alt="Random Image"></img>
            <h1 style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</h1>
            <button style={{fontSize:20}} className="btn btn-secondary btn-sm">Icrement</button>
            <ul>
                {this.state.tags.map( tag => <li key={tag}>{tag}</li>)}
            </ul>
            </React.Fragment>);

    }

    getBadgeClasses() {
        let counterClasses = "badge m-2 badge-";
        counterClasses += this.state.count === 0 ? "warning" : "primary";
        return counterClasses;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;