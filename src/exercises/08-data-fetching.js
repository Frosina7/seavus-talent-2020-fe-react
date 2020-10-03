import React, { Component } from "react";
import axios from "axios";
import "./04-composition.css";

// For our data fetching exercise we're gonna take advantage of the Notes REST API that you already created.
//
// It is best to use lifecycle method `componentDidMount` to
// make AJAX requests. This method will be called once before the component
// is inserted into the document, regardless of how many times `render` is
// called.
//
// Exercise:
//
//  Create a NotesGrid component that lists all the notes from http://localhost:8080/api/notes.
//  This component needs to display all the notes in a grid with their info as "title", "content", "tags".
//

export default class NotesGrid extends Component {
  state = {
    notes: [],
    tags: [],
  };

  componentDidMount() {
    axios.get(`/api/notes`).then((res) => {
      console.log(res);
      this.setState({ notes: res.data });
      this.setState({ tags: res.data });
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.notes.map((notes) => (
            <div className='note'>
              <div className='note-header'>{notes.title}</div>
              <div className='note-content'>{notes.content}</div>
              <div className='note-footer'>
                {notes.tags.map((tag) => (
                  <p>#{tag.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export const Example = () => <NotesGrid />;
