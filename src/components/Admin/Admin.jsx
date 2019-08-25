import React, { Component } from 'react';
import Axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/Styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import FlagSharpIcon from '@material-ui/icons/FlagSharp';
import NewReleasesIcon from '@material-ui/icons/NewReleases';

//for styling purposes
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
  },
  body: {
    fontSize: 15,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

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
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Feeling</StyledTableCell>
            <StyledTableCell>Understanding</StyledTableCell>
            <StyledTableCell>Support</StyledTableCell>
            <StyledTableCell>Comments</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
            <StyledTableCell>Flagged?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.feedback.map(feedback =>
            <StyledTableRow key={feedback.id}>
              <StyledTableCell align="right">{feedback.feeling}</StyledTableCell>
              <StyledTableCell align="center">{feedback.understanding}</StyledTableCell>
              <StyledTableCell>{feedback.support}</StyledTableCell>
              <StyledTableCell>{feedback.comments}</StyledTableCell>
              <StyledTableCell><ButtonGroup>
                <Button color='primary' 
                  onClick={() => this.handleDelete(feedback.id)}><DeleteForeverOutlinedIcon />
                </Button>
                <Button color='secondary' 
                onClick={() => this.handleFlag(feedback.id)}><FlagSharpIcon />
                </Button>
              </ButtonGroup>
              </StyledTableCell>
              <StyledTableCell>
                {feedback.flagged && <NewReleasesIcon color='secondary' />}
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

export default Admin;