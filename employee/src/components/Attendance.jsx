
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
    <div className='container-fluid p-5'>
        <h3>Attendance List</h3>
         <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Attendance</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.age}</td>
                        </tr>
                    )
                }
               
            </tbody>
        </table>
    </div>
  )
}

export default Attendance