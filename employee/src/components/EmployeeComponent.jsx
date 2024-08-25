import React,{useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate,useParams } from 'react-router-dom';


const EmployeeComponent = () => {
    const [firstName, setFirstName]=useState('');
    const [department, setDepartment]=useState('');
    const [experience,setExperience]=useState('');
    const [age,setAge]=useState('');
    const [gender,setGender]=useState('');
    const [phoneNo,setPhoneNO]=useState('');
    const [salary,setSalary]=useState('');
    const [email,setEmail]=useState('');
    
    const {id}=useParams();
    /*const handleFirstName=(e)=>setFirstName(e.target.value); 
    const handleLastName=(e)=>setLastName(e.target.value);
    const handleEmail=(e)=>setEmail(e.target.value);*/
   const [errors,setErrors]= useState({
        firstName:'',
        department:'',
        experience:'',
        age:'',
        gender:'',
        phoneNo:'',
        salary:'',
        email:''
    })
    const navigator=useNavigate();
    useEffect(()=>{
        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setDepartment(response.data.department);
                setExperience(response.data.experience);
                setAge(response.data.age);
                setGender(response.data.gender);
                setPhoneNO(response.data.phoneNo);
                setSalary(response.data.salary);
                setEmail(response.data.email);
            }).catch(error=>{
                console.error(error);
            })
        }
    },[id]);
    function saveOrUpdateEmployee(e){
        e.preventDefault();
        if(validateForm()){
            const employee={firstName,department,experience,age,gender,phoneNo,salary,email}
            console.log(employee);
            if(id){
                updateEmployee(id,employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error=>{
                    console.log(error);
                })
            }else{
                createEmployee(employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error=>{
                    console.error(error);
                })
            }
       
        
        }
        
    }
    function validateForm(){
        let valid=true;
        const errorsCopy={...errors}
        if(firstName.trim()){
            errorsCopy.firstName='';
        }else{
            errorsCopy.firstName='First name is required';
            valid=false;
        }
        if(department.trim()){
            errorsCopy.department='';
        }else{
            errorsCopy.department='department name is required';
            valid=false;
        }
        if(experience){
            errorsCopy.experience='';
        }else{
            errorsCopy.experience='experience is required';
            valid=false;
        }
        if(age){
            errorsCopy.age='';
        }else{
            errorsCopy.age='age is required';
            valid=false;
        }
        if(gender.trim()){
            errorsCopy.gender='';
        }else{
            errorsCopy.gender='gender is required';
            valid=false;
        }
        if(phoneNo){
            errorsCopy.phoneNo='';
        }else{
            errorsCopy.phoneNo='phone number is required';
            valid=false;
        }
        if(salary){
            errorsCopy.salary='';
        }else{
            errorsCopy.salary='salary is required';
            valid=false;
        }
        if(email.trim()){
            errorsCopy.email='';
        }else{
            errorsCopy.email='Email is required';
            valid=false;
        
        }
        setErrors(errorsCopy);
        return valid;
    }
    function pageTitle(){
        if(id){
            return  <h2 className='text-center'>Update Employee</h2>
        }else{
            return  <h2 className='text-center'>Add Employee</h2>
        }

    }
  return (
    <div className='container1' style={{height:'160vh'}}>
        <br></br><br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className="form-label">First Name</label>
                            <input type='text'
                            placeholder='Enter Employee First Name'
                            name='firstName'
                            value={firstName}
                            className={`form-control ${errors.firstName?'is-invalid':''}`}
                            onChange={(e)=>setFirstName(e.target.value)}/>
                        </div>
                        {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        <div className='form-group mb-2'>
                            <label className="form-label">Department</label>
                            <input type='text'
                            placeholder='Enter Employee Last Name'
                            name='lastName'
                            value={department}
                            className={`form-control ${errors.department?'is-invalid':''}`}
                            onChange={(e)=>setDepartment(e.target.value)}/>
                        </div>
                        {errors.department && <div className='invalid-feedback'>{errors.department}</div>}
                        <div className='form-group mb-2'>
                            <label className="form-label">Experience</label>
                            <input type='text'
                            placeholder='Enter Employee Last Name'
                            name='lastName'
                            value={experience}
                            className={`form-control ${errors.experience?'is-invalid':''}`}
                            onChange={(e)=>setExperience(e.target.value)}/>
                        </div>
                        {errors.experience && <div className='invalid-feedback'>{errors.experience}</div>}
                        <div className='form-group mb-2'>
                            <label className="form-label">Age</label>
                            <input type='text'
                            placeholder='Enter Employee Last Name'
                            name='lastName'
                            value={age}
                            className={`form-control ${errors.age?'is-invalid':''}`}
                            onChange={(e)=>setAge(e.target.value)}/>
                        </div>
                        {errors.age && <div className='invalid-feedback'>{errors.age}</div>}
                        <div className='form-group mb-2'>
                            <label className="form-label">Gender</label>
                            <input type='text'
                            placeholder='Enter Employee Last Name'
                            name='lastName'
                            value={gender}
                            className={`form-control ${errors.gender?'is-invalid':''}`}
                            onChange={(e)=>setGender(e.target.value)}/>
                        </div>
                        {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>}
                        <div className='form-group mb-2'>
                            <label className="form-label">Contact</label>
                            <input type='text'
                            placeholder='Enter Employee Last Name'
                            name='lastName'
                            value={phoneNo}
                            className={`form-control ${errors.phoneNo?'is-invalid':''}`}
                            onChange={(e)=>setPhoneNO(e.target.value)}/>
                        </div>
                        {errors.phoneNo && <div className='invalid-feedback'>{errors.phoneNo}</div>}
                        <div className='form-group mb-2'>
                            <label className="form-label">Salary</label>
                            <input type='text'
                            placeholder='Enter Employee Last Name'
                            name='lastName'
                            value={salary}
                            className={`form-control ${errors.salary?'is-invalid':''}`}
                            onChange={(e)=>setSalary(e.target.value)}/>
                        </div>
                        {errors.salary && <div className='invalid-feedback'>{errors.salary}</div>}
                        <div className='form-group mb-2'>
                            <label className="form-label">Email</label>
                            <input type='text'
                            placeholder='Enter Employee Email'
                            name='email'
                            value={email}
                            className={`form-control ${errors.email?'is-invalid':''}`}
                            onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default EmployeeComponent
    
