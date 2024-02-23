import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor() {
        super();
        console.log("constructor start");
        this.state = {
            count: 0,
            data : []
        };
    }

    componentDidMount() {
        this.getData();
        console.log("component life cycle start");
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
                this.getData()
        }
        console.log("component state is update")
    }

    getData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await data.json();
        console.log(result);
        this.setState({
            data:result
        })
    };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        console.log("render start");
        const { count } = this.state;
        return (
            <div>
                <h1>Count - {count}</h1>
                <button onClick={this.increment}> Increment </button>
                {this.state.data.map((item , index ) => (
                    <p key={index}>{item.name}</p>
                ))}
            </div>
        );
    }
}

export default LifeCycle;
