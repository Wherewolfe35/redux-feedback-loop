import React, { Component } from 'react';
import Axios from 'axios';

class Admin extends Component {
  state = {
    feedback: []
  }

  //obtain data from database upon inital page load
  componentDidMount() {
    this.getFeedback();
  }

  //GET request to database
  getFeedback = () => {
    console.log('in GET');
    Axios.get('/feedback')
      .then((response) => {
        console.log('GET response', response);
        this.setState({
          feedback: response.data
        });
      }).catch((error) => {
        console.log('Could not get feedback,', error);
      });
  }

  //upon click, deletes respective feedback from database
  handleDelete = (id) => {
    console.log('in delete');
    Axios.delete(`/feedback/${id}`)
      .then((response) => {
        console.log('Deleted', response);
        this.getFeedback();
      })
      .catch((error) => {
        console.log('Could not Delete', error);
      })
  }

  //upon click, flag or unflag the respective feedback
  handleFlag = (id) => {
    console.log('in flag');
    Axios.put(`/feedback/${id}`)
      .then((response) => {
        console.log('flagged');
        this.getFeedback();
      })
      .catch((error) => {
        console.log('unable to flag', error);
      })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.feedback.map(feedback =>
            <tr key={feedback.id}>
              <td>{feedback.feeling}</td>
              <td>{feedback.understanding}</td>
              <td>{feedback.support}</td>
              <td>{feedback.comments}</td>
              <td><button onClick={() => this.handleDelete(feedback.id)}>Delete</button>
                <button onClick={() => this.handleFlag(feedback.id)}>Flag</button>
                {feedback.flagged && 'Flag'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default Admin;