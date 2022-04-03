import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';

class NewEmployeeModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      age: null,
      title:null,
      salary:null
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleNewEmployeeSubmit = this.handleNewEmployeeSubmit.bind(this);
}

  handleClose (){
    this.setState({
      firstName: null,
      lastName: null,
      age: null,
      title: null,
      salary: null,
    })
      this.props.handleModalClose()
  }

  //Why does this still continue to leave stuff in it? trying to find a better way
  handleNewEmployeeSubmit(){
      if(this.state.age !== null &&
        this.state.firstName !== null &&
        this.state.lastName !== null &&
        this.state.title !== null &&
        this.state.salary !== null)
        {
          this.props.handleModalClose()
          axios.post('/add_employee', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            title: this.state.title,
            salary: this.state.salary
          })
          .then(function (response) {
            this.setState({
              firstName: null,
              lastName: null,
              age: null,
              title: null,
              salary: null,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        else
        {
          alert('Please fill out all values before pressing submit')
        }
      
  }

  handleFirstNameChange=(event)=>{
      this.setState({
          firstName: event.target.value,
      })
  }

  handleLastNameChange=(event)=>{
    this.setState({
        lastName: event.target.value,
    })
}

  handleAgeChange=(event)=>{
    this.setState({
        age: event.target.value,
    })
  }

  handleTitleChange=(event)=>{
    this.setState({
        title: event.target.value,
    })
  }

  handleSalaryChange=(event)=>{
    this.setState({
        salary: event.target.value,
    })
  }
  render() {
    return (
        <div>
          <Dialog
            open={this.props.isOpen}
            onClose={this.handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Enter A New Employee"}</DialogTitle>
            <DialogContent>
                <TextField
                id="outlined-text-field"
                label="FirstName"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
                />
                <TextField
                id="outlined-text-field"
                label="LastName"
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
                />
                <TextField
                id="outlined-text-field"
                label="Age"
                value={this.state.age}
                onChange={this.handleAgeChange}
                />
                <TextField
                id="outlined-text-field"
                label="Position"
                value={this.state.title}
                onChange={this.handleTitleChange}
                />
                <TextField
                id="outlined-text-field"
                label="Salary"
                value={this.state.salary}
                onChange={this.handleSalaryChange}
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleNewEmployeeSubmit}>Submit New Employee</Button>
              <Button onClick={this.handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
  }

}
export default NewEmployeeModal;
