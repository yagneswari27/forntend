import React  from  'react';
import ListEmployeeComponets from './components/ListEmployeeComponents';
import EmployeeComponent from './components/EmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponet from './components/FooterComponent';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
function App() {


  return (
    <>
      <BrowserRouter> 
      <HeaderComponent/>
      <Routes>
     
        <Route path='/' element={<Home/>}></Route>
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
           {/* <Route path='/employees' element={<ListEmployeeComponets/>}/> */}
           </Route> 

      </Routes> 
    </BrowserRouter>
   
   
    </>
  )
}

export default App
