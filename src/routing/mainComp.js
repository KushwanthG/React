import React from 'react'
import { Route, Routes,BrowserRouter,Link } from 'react-router-dom'
import About from './about';
import NotFound from './notFound';
import Contact, { Mains } from './contact';
import Home from './home';
import UserRoute,{ UserOrder,UserProfile }  from './userRoute';


const Header=()=>{
    return(
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3">
                <Link className="nav-link" to="/">Main</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/contact/100/k?posts=100">Contact-100</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/contact/200/u?posts=200">Contact-200</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/contact/300/s?posts=300">Contact-300</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/user">User</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
  }




const MainComp = () => {
  return (
    <>    
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Mains/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact/:id/:name" element={<Contact/>}/>
        
            <Route path='/user' element={<UserRoute/>}>
                <Route path='orders' element={<UserOrder/>}/>
                <Route path='profile' element={<UserProfile/>}/>
            </Route>
            {/* <Route path="*" element={<NotFound/>}/> */}

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default MainComp
