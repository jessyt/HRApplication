import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

class NewEmployeeModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      salary: null,
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleNewEmployeeSubmit = this.handleNewEmployeeSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
}

  handleClose (){
      this.props.handleModalClose()
  }

  handleNewEmployeeSubmit(){
      alert('hellzeya')
      this.props.handleModalClose()
  }

  handleFirstNameChange(event){
      this.setState({
          firstName: event.target.value,
      })
  }

  handleLastNameChange(event){
    this.setState({
        lastName: event.target.value,
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
