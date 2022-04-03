import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

class EmployeeDeductionModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleClose = this.handleClose.bind(this);
}

  handleClose (){
      this.props.handleModalClose()
  }

  render() {
    let netSalary, takeHomeSalary = 0;
    if(this.props.employee)
    {
      netSalary = this.props.employee.salary
      if(this.props.deductions)
      {
        takeHomeSalary = netSalary - this.props.deductions.reduce((total,deduction) => deduction.amount + total,0)
      }
    }
    
    return (
        <div>
          <Dialog
            open={this.props.isOpen}
            onClose={this.handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Deductions Calculator"}</DialogTitle>
            <DialogContent>
              {
                <Stack spacing={2}>
                  <Stack direction='row' spacing={2}>
                  <div>Total Salary :</div>
                  <div>${netSalary}</div>
                  </Stack>
                  {this.props.deductions.map((values, index) => {
                    return (
                      <Stack direction='row' spacing={2}>
                          <p>{values.type} :</p>
                          <p>${values.amount}</p>
                      </Stack>

                    )
                  })
                  }
            </Stack>
            }
              <Stack
                  divider={<Divider orientation="horizontal" flexItem />}
                  spacing={2}
                >
                    <Stack direction='row' spacing={2}>
                      <p>Total Takehome:</p>
                    </Stack>
                    <p>${takeHomeSalary}</p>
                </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose}>Exit</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
  }

}
export default EmployeeDeductionModal;
