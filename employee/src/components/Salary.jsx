
import React,{useEffect,useState} from 'react';
import {  listEmployees } from '../services/EmployeeService';

const Attendance = () => {
    const[employees,setEmployee]=useState([])
 //const navigator=useNavigate();
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
  return (
    <div className=' p-5 bg1'>
        <h3 style={{color:'white'}}>Employee Salary Details</h3>
         <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Experience</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.experience}</td>
                            <td>{employee.salary}</td>
                           
                        </tr>
                    )
                }
               
            </tbody>
        </table>
    </div>
  )
}

export default Attendance