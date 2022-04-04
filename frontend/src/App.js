import React from "react";
import "./App.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import axios from 'axios';
import NewEmployeeModal from "./components/NewEmployeeModal";
import DialogOpenBox from "./components/DialogOpenBox";
import EmployeeDeductionModal from "./components/EmployeeDeductionModal"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      selectedEmployeeId: null,
      selectedEmployee: null,
      isCreateNewEmployeeModalOpen: false,
      selectedEmployeeDeductions: [],
      isViewEmployeeDeductionsModalOpen: false
    }
    this.createNewEmployee = this.createNewEmployee.bind(this);
    this.selectEmployee = this.selectEmployee.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/employees')
      .then(result => {
        this.setState({
          employees: result.data,
        })
      })
      .catch(error => {
        console.log("GET EMPLOYEE ERROR", error)
      })
  }

  handleViewDeductionsClick=(id)=>{
      axios.get('http://localhost:3001/deductions?employeeId='+id)
        .then(result => {
          console.log(result.data)
          this.setState({
            selectedEmployeeDeductions: result.data,
            isViewEmployeeDeductionsModalOpen: true
          })
        })
        .catch(error => {
          console.log("GET DEDUCTIONS ERROR", error)
        })
  }

  handleCreateNewEmployeeModalClose=()=>{
    this.setState({
      isCreateNewEmployeeModalOpen: false,
    })
  }

  handleViewDeductionsModalClose=()=>{
    this.setState({
      isViewEmployeeDeductionsModalOpen: false,
    })
  }

  createNewEmployee() {
    this.setState({
      isCreateNewEmployeeModalOpen: true,
    })
  }

  selectEmployee = (id) => {
    let tempId = this.state.selectedEmployeeId === id ? null : id
    this.setState({
      selectedEmployeeId: tempId,
      selectedEmployee : this.state.employees.find(employee => employee._id === id)
    })
    console.log(this.state.employees.find(employee => employee._id === id))
  }

  render() {
    return (
      <div class="flex flex-col ">
        <div class="flex justify-start px-12 py-12">
          <Button class="h-20 bg-purple-500 hover:bg-purple-700 text-white text-lg font-bold py-2 px-10 rounded-lg"
            onClick={this.createNewEmployee}>Create New Employee</Button>
          <NewEmployeeModal
          handleModalClose={this.handleCreateNewEmployeeModalClose}
          isOpen={this.state.isCreateNewEmployeeModalOpen}
          />
          <EmployeeDeductionModal
          handleModalClose={this.handleViewDeductionsModalClose}
          isOpen={this.state.isViewEmployeeDeductionsModalOpen}
          deductions={this.state.selectedEmployeeDeductions}
          employee={this.state.selectedEmployee}
          />
        </div>
        <Box class="w-3/5 max-w-full px-20">
            <List class="pl-30">
              {this.state.employees.map((values, index) => {
                return (
                  <ListItem class="min-w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" key={values._id}>
                    <div class="flex flex-col">
                      <ListItemButton onClick={() => { this.selectEmployee(values._id) }}>
                        <ListItemText class="text-lg">
                          <div class="text-2xl flex flex-start">
                          {values.lastName}, {values.firstName}
                            </div>
                      </ListItemText>
                      </ListItemButton>
                      {this.state.selectedEmployeeId === values._id &&
                        <DialogOpenBox
                        employee={values}
                        handleViewDeductionsClick={this.handleViewDeductionsClick}/>
                      }
                    </div>
                  </ListItem>
                )
              })
              }
            </List>
        </Box>
      </div>
    );
  }

}
export default App;
