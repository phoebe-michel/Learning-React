import React, { Component } from "react";

class Message extends Component {

    // 1. Create a state object inside the class constructor and initialize it
    constructor() {

        //call the super method
        super()

        //create our state object
        this.state = {
            
            //initialize a property
            message: "Welcome visitor"
        }
    }

    changeMessage() {
        this.setState({
            //change the state of the component
            message: 'Thank you for subscribing'
        })
    }

    // 2. Bind the state value in the render function
    render() {
        // return <h1>{this.state.message}</h1>

        // 3. Add HTML for a button element
        return (
            //parentheses are required whenever the JSX spans over multiple lines

            //4. Listen to the click event on 'Subscribe' button and change the message
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message