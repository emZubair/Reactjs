import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value : this.props.counter.value,
        imageURL: "https://picsum.photos/200",
        tags : ['tag1', 'tag2', 'tag3']
    }
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }

    // constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    handleIncrement = (person, age) => {
        console.log(`Name : ${person} ${age}`)
        this.setState({value: this.state.value+1})
        console.log(`Icremented value:${this.state.value}`)
    }
    handleDelete = () => {
        console.log("Delete button clicked")
    }
    render() { 
        return (<React.Fragment>
            {this.props.children}
            <img src={this.state.imageURL} alt="Random Image"></img>
            <h1 style={this.styles} className={this.getBadgeClasses()}>{this.formatValue()}</h1>
            <button style={{fontSize:20}} onClick={() => this.handleIncrement("Zubair", 33)} className="btn btn-secondary btn-sm">Icrement</button>
            <button className="btn btn-danger btn-sm m-2" onClick={()=> this.props.onDelete(this.props.counter.id)}>Delete</button>
            <ul>
                {this.state.tags.map( tag => <li key={tag}>{tag}</li>)}
            </ul>
            </React.Fragment>);

    }

    getBadgeClasses() {
        let valueerClasses = "badge m-2 badge-";
        valueerClasses += this.state.value === 0 ? "warning" : "primary";
        return valueerClasses;
    }

    formatValue() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;