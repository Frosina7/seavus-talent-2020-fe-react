import React from "react";

// So far we've just been using function components.
// Now that we need to worry about state in our component, we need to use the ES6 class syntax.
// To turn an ES6 class into a React component, you extend React.Component
// (or `import {Component} from 'react'` and use that)
//
// Exercise:
//
// Our EditNote component needs to have two input fields for title and content.
// Changes on this fields needs to be saved in the local component state and displayed on the screen.
class EditNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value;

    this.setState({
      [e.target.name]: value,
    });
  };

  handleChange = () => {};

  render() {
    return (
      <div>
        <form onChange={this.handleChange}>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleInputChange}
          ></input>
          <input
            type='text'
            name='content'
            value={this.state.content}
            onChange={this.handleInputChange}
          ></input>
          <div>
            <p>{this.state.name}</p>
            <p>{this.state.content}</p>
          </div>
        </form>
      </div>
    );
  }
}

export const Example = () => <EditNote />;
