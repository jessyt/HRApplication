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
        <div class="px-20 text-lg flex flex-row justify-between">
          <div>
           <div>FirstName: {this.props.employee.firstName}</div>
           <div>LastName: {this.props.employee.lastName}</div>
            <div>Salary: {this.props.employee.salary}</div>
            <div>Job: {this.props.employee.title}</div>
            <div>Age: {this.props.employee.age}</div>
          </div>
          <div class="flex flex-end">
          <Button
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            onClick={()=>this.handleViewDeductionsClick(this.props.employee.id)}>View Deductions</Button>
          </div>

      </div>
    );
  }

}
export default DialogOpenBox;