import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const {name, characterName} = this.props
        return <h1>Welcome {name} a.k.a {characterName}</h1>
    }
}

export default Welcome