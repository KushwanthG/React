// import { useState } from "react";
// import { BrowserRouter,Link, Route, Routes } from "react-router-dom";


// const StoreLogin=()=>{


//     return(
//         <div>
//       <div className="container mt-5 pt-5">
//       <div className="row">
//         <div className="col-12 col-sm-8 col-md-6 m-auto">
//           <div className="card border-0 shadow">
//             <div className="card-body">
//                 <nav>
//                     <Link to='/'>BACK</Link>
//                 </nav>
//             {/* <a href="/"  className="nav-primary">BACK</a> */}
//               <div className="mx-auto" style={{ width: '50px', height: '50px' }}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
//                   <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
//                   <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0 0 14A7 7 0 0 0 8 1zm0 12a5.98 5.98 0 0 1-4.001-1.528A5.978 5.978 0 0 1 8 11a5.978 5.978 0 0 1 4.001 1.472A5.98 5.98 0 0 1 8 13z"/>
//                 </svg>
//               </div>
//               <form>
//                 <h1>Create an account</h1>
//                 <div className="form-group">
//                   <label htmlFor="name">Username:</label>
//                   <input type="text" id="name" className="form-control" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password:</label>
//                   <input type="password" id="password" className="form-control"  />
//                 </div>
                
//                 <div className="text-center mt-3">
//                 <button className="btn btn-primary m-2" > Submit </button>
//                 <button className="btn btn-primary" > Reset </button>
//                 </div>
                
//                 </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
              
  
//     )
// }



// const Routee=()=>{
//     return(
//         <>
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/login' element={<StoreLogin/>}></Route>
//             </Routes>
//         </BrowserRouter>
//         </>
//     )
// }

// export default Routee