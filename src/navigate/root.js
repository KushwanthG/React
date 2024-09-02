import React from 'react'
import { Route, Routes,BrowserRouter,Link } from 'react-router-dom'
import UseCallbackExample from '../pratice/praticecall'
import Pratice1 from '../pratice/praticeeffect'
import Pratice2 from '../pratice/praticeref'
import UseMemoExample from '../pratice/praticememo'
import Nothing from './nothing'
import Home from './homemain'
import Calculators from '../Calculator/cal'



const Header=()=>{
    return(
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3">
                <Link className="nav-link" to="/USECALLBACK">UseCallback</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/USEEFFECT">UseFffect</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/USEMEMO">UseMemo</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/USEREF">UseRef</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/Calculators">Calculator</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
  }




const Root = () => {
  return (
    <>    
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/USECALLBACK" element={<UseCallbackExample/>}/>
            <Route path="/USEEFFECT" element={<Pratice1/>}/>
            <Route path="/USEMEMO" element={<UseMemoExample/>}/>
            <Route path="/USEREF" element={<Pratice2/>}/>
            <Route path="/*" element={<Nothing/>}/>
            <Route path='/Calculators' element={<Calculators/>}/>

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Root
