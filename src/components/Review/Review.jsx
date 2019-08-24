import React, { Component } from 'react';
import { connect } from "react-redux";
import Axios from 'axios';
import { Link } from "react-router-dom";

class Review extends Component {
  state = {
    submitted: false,
  }
  //takes total data from redux store and sends it to the server for sorting, then allows user to submit new feedback
  handleClick = () => {
    Axios.post('/feedback', this.props.reduxStore)
      .then((response) => {
        console.log(response);
        this.setState({
          submitted: true
        });
        this.props.dispatch({type:'CLEAR'});
      })
      .catch((error) => {
        console.log(error);

      })
  }

  //takes user back to the first page
  beginning = ()=>{
    this.props.history.push('/');
  }

  render() {
    return (
      <>
        {this.state.submitted ?
          <div>
            <h1>Thank you for your Feedback!</h1>
            <button onClick={this.beginning}>Leave New Feedback</button>
          </div>
          :
          <div>
            <h1>Review of your Feedback</h1>
            <ul>
              <li>How you are feeling overall: {this.props.feeling}</li>
              <Link to='/'>Edit</Link>
              <li>Your understanding of this week: {this.props.understanding}</li>
              <Link to='/understanding'>Edit</Link>
              <li>How well you feel supported: {this.props.support}</li>
              <Link to='/support'>Edit</Link>
              <li>Comments: {this.props.comments}</li>
              <Link to='/comments'>Edit</Link>
            </ul>
            <button onClick={this.handleClick}>Submit</button>
          </div>}
      </>
    );
  }
}

const storeToProps = (reduxStore) => {
  return {
    reduxStore,
    feeling: reduxStore.feeling,
    understanding: reduxStore.understanding,
    support: reduxStore.support,
    comments: reduxStore.comments
  }
}

export default connect(storeToProps)(Review);