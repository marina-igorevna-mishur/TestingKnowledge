import React from 'react'
import '../../css/style.css';

export default class App extends React.Component {
    render() {
        const element = React.createElement("div", {className : "hello"}, "Hello World!");
        return(
            element
        );
    }
}