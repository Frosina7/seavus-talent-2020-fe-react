import React from "react";

// For controlled components, the idea is that you push the values from the component
// to the consumer via callback handlers. In the context of a form, this is normally
// via `onChange` which receives the `event` (and you can get the value via
// `event.target.value`) like so:
//
//     <input onChange={event => console.log(event.target.value)} />
//
// In this scenario, you also need to provide the value for the input like so:
//
//     <input value={this.state.value} />
//
// This gives you a lot more power over the input.

// Exercise:
//   Render a EditNote form with an onSubmit handler that alerts the value of both title and content
//   while saving their data in the local component state
//   The submit button needs to be disabled if there is an error.
//   Error message needs to be displayed when:
//     - The title is empty - "Title is a mandatory field"
//     - The content is empty - "Content is a mandatory field"
//     - The title contains more than 10 characters - "Title cannot contain more than 10 characters"
//   Since this is a EditNote functionality, we need to make sure to display the 'Default Title' and 'Default Content'
//   when our component is rendered
class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.defaultTitle,
      content: this.props.defaultContent,
      titleError: "",
      contentError: "",
    };
  }

  titleErrorHandler = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      this.setState({ titleError: "Title is a mandatory field" });

      this.setState({ title: value });
    } else if (value.length > 10) {
      this.setState({
        titleError: "Title cannot contain more than 10 characters",
      });

      this.setState({ title: value });
    } else {
      this.setState({ title: value });

      this.setState({ titleError: "" });
    }
  };

  contentErrorHandler = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      this.setState({ contentError: "Content is a mandatory field" });

      this.setState({ content: value });
    } else {
      this.setState({ content: value });

      this.setState({ contentError: "" });
    }
  };

  submitHandler = () => {
    alert(`Title is: ${this.state.title} ,content is: ${this.state.content}`);
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Title:
            <input
              type='text'
              name='title'
              id='title'
              onChange={this.titleErrorHandler}
              value={this.state.title}
            ></input>
          </label>

          <p>{this.state.titleError}</p>

          <label>
            Content:
            <input
              type='text'
              name='content'
              id='content'
              onChange={this.contentErrorHandler}
              value={this.state.content}
            ></input>
          </label>

          <p>{this.state.contentError}</p>

          <button
            type='submit'
            disabled={
              this.state.titleError !== "" || this.state.contentError !== ""
            }
            onClick={this.submitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export const Example = () => (
  <EditNoteForm defaultTitle='Default title' defaultContent='Default Content' />
);
