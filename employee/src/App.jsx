import React  from  'react';
import ListEmployeeComponets from './components/ListEmployeeComponents';
import EmployeeComponent from './components/EmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Attendance from './components/Attendance';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Salary from './components/Salary';
import TypesEmp from './components/TypesEmp';
import Jobs from './components/Jobs';
import SalaryIncre from './components/SalaryIncre';
function App() {


  return (
    <>
   
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}/> 
      </Routes>
     
      <br/>
      <HeaderComponent/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        {/*//http://localhost:3000*/}
       {/*<Route path='/' element={<ListEmployeeComponets/>}></Route>*/}
        {/*//http://localhost:3000/employees*/}
          <Route path='/employees' element={<ListEmployeeComponets/>}></Route>
            {/*//http://localhost:3000/add-employee*/}
          <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
           {/*//http://localhost:3000/edit-employee/1*/}
           <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
           <Route path='/home' element={<Home/>}></Route> 
           <Route path='/about' element={<About/>}>
            {/* <Route path='employees' element={<ListEmployeeComponets/>}/>  */}
           </Route> 
          <Route path='/attendance' element={<Attendance/>}></Route>
          <Route path='/salary' element={<Salary/>}></Route>
          <Route path='/types' element={<TypesEmp/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/salaryin' element={<SalaryIncre/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
