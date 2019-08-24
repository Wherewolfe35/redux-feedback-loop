import React, { Component } from 'react';
import Axios from 'axios';

class Admin extends Component {
  state = { 
    feedback: []
   }

  //obtain data from database upon inital page load
  componentDidMount(){
    Axios.get('/feedback').then((response)=>{
      console.log('GET response', response);
      this.setState({
        feedback: response.data
      });
    }).catch((error) => {
      console.log('Could not get feedback,', error);
    });
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.feedback.map(feedback => 
            <tr>
              <td>{feedback.feeling}</td>
              <td>{feedback.understanding}</td>
              <td>{feedback.support}</td>
              <td>{feedback.comments}</td>
              <td><button>Delete</button></td>
            </tr>
            )}
        </tbody>
      </table>
     );
  }
}
 
export default Admin;