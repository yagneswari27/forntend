import React,{useEffect,useState} from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
const ListEmployeeComponets = () => {
 const[employees,setEmployee]=useState([])
 const navigator=useNavigate();
 useEffect(()=>{
    getAllEmployees();
},[])
function getAllEmployees(){
    listEmployees().then((response)=>{
        setEmployee(response.data);
     }).catch(error=>{
        console.log(error);
     })
}
function addNewEmployee(){
    navigator('/add-employee');
}
function updateEmployee(id){
    navigator(`/edit-employee/${id}`);
}
function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((response)=>{
        getAllEmployees();
    }).catch(error=>{
        console.error(error);
    })
}
  return (
    <div className='container1 p-3' style={{height:'100vh'}}>
        <h2 className='text-center' style={{color:'white'}}>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Experience</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>contact</th>
                    <th>salary</th>
                    <th>Email Id</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.department}</td>
                            <td>{employee.experience}</td>
                            <td>{employee.age}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.phoneNo}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.email}</td>
                            <td style={{}}>
                                <button className='btn btn-info m-2' onClick={()=>updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
               
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponets;
    
