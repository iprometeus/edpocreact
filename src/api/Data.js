import React, { Component } from 'react';

class Data extends Component {

    constructor() {
        super();
        this.state =  {
            greeting: "",
        };
    }

    componentDidMount() {
        fetch('/greeting')
        .then(res => res.text())
        .then((data) => {
          this.setState({ greeting: data })
        })
        .catch(console.log)
      }

    render() {
        return (
            <div>
                {this.state.greeting}
            </div>
        );
    }
}
export default Data;