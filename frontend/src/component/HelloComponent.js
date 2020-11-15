import React from 'react'
import ApiService from '../service/ApiService'

export default class HelloComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {greeting: ''};
    }

    componentDidMount() {
        ApiService.greet().then((data) => {
            this.setState({greeting: data});
            console.log(this.state.greeting);
        }).catch(function (ex) {
            console.log('Response parsing failed. Error: ', ex);
        });
    }

    render() {
        return (<span>{this.state.greeting.message}</span>);
    }
}