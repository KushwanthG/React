// components/FormComponent.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setName, setEmail, resetUser } from './reducer';

// const UserForm = () => {
//   const dispatch = useDispatch();
//   const { name, password } = useSelector((state) => state.user);

//   const handleNameChange = (e) => {
//     dispatch(setName(e.target.value));
//   };

//   const handleEmailChange = (e) => {
//     dispatch(setEmail(e.target.value));
//   };

//   const handleReset = () => {
//     dispatch(resetUser());
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form submitted with data",{name,password});
//   }
  
//   return (
//     <div>
//       <div className="container mt-5 pt-5">
//       <div className="row">
        
//         <div className="col-12 col-sm-8 col-md-6 m-auto">
//           <div className="card border-0 shadow">
//             <div className="card-body">
            
//               <div className="mx-auto" style={{ width: '50px', height: '50px' }}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
//                   <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
//                   <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0 0 14A7 7 0 0 0 8 1zm0 12a5.98 5.98 0 0 1-4.001-1.528A5.978 5.978 0 0 1 8 11a5.978 5.978 0 0 1 4.001 1.472A5.98 5.98 0 0 1 8 13z"/>
//                 </svg>
//               </div>
//               <form>
//               <center>WELCOME</center>
//                 <h1>Login</h1>
//                 <div className="form-group">
//                   <label htmlFor="name">Username:</label>
//                   <input type="text" id="name" className="form-control" value={name} onChange={handleNameChange}/>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password:</label>
//                   <input type="password" id="password" className="form-control" value={password} onChange={handleEmailChange} />
//                 </div>
                
//                 <div className="text-center mt-3">
//                 <button className="btn btn-primary m-2" onClick={handleSubmit}> Submit </button>
//                 <button className="btn btn-primary" onClick={handleReset}> Reset </button>
//                 </div>
//                 <navbar>
//                   <div className="text-center mt-3">
//                   {/* <Link to='/login'>Already have an account?</Link>  */}
//                   <a href="/login"  className="nav-link">Create an account?</a>
//                   </div>
//                   </navbar>
                  
                
                
//                 </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
              
//   );
// }; 

// export default UserForm;






// // src/features/counter/Counter.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from './counterSlice';

// const Counter = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
//     </div>
//   );
// };

// export default Counter;
