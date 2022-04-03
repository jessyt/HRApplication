import { Button } from "@mui/material";
import React from "react";

class DialogOpenBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleViewDeductionsClick = this.handleViewDeductionsClick.bind(this);
  }

  handleViewDeductionsClick (id){
      this.props.handleViewDeductionsClick(id)
  }

  render() {
    return (
        <div>
            <div>Salary: {this.props.employee.salary}</div>
            <div>Job: {this.props.employee.job}</div>
            <Button
            onClick={()=>this.handleViewDeductionsClick(this.props.employee.id)}>View Deductions</Button>
      </div>
    );
  }

}
export default DialogOpenBox;