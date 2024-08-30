// import { connect, useDispatch } from 'react-redux';
// import { useState } from 'react';

// export const RegisterForm=()=>{

// const [name, setName] = useState('')
// const [username, setUsername] = useState('')
// const [password, setPassword] = useState('')
// const [confirmPassword, setConfirmPassword] = useState('')


// const dispatch=useDispatch()

// const register=()=>{
//     dispatch({
//         type:'register',payload:{id:(new Date).getTime,name,username,password}
//     })
//     setName('');
//     setUsername('');
//     setPassword('');
//     setConfirmPassword('')
// }

// return (
//     <div className="container mt-5">
//     <form >
//         <h3>RegisterForm</h3>
//         <div className="mb-3 col-md-6">
//             <label class='form-label'>Name:</label>
//             <input class="form-control" type="text" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
//         </div>
//         <div className="mb-3 col-md-6">
//             <label className='form-label'>Username:</label>
//             <input class="form-control" type="text" value={username} placeholder="Enter your Username" onChange={(e)=>setUsername(e.target.value)} />
//         </div>
//         <div className="mb-3 col-md-6">
//             <label className='form-label'>Password:</label>
//             <input class="form-control" type="password"value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
//         </div>
//         <div className="mb-3 col-md-6"> 
//             <label className='form-label'>Confirm Password:</label>
//             <input class="form-control" type="password"value={confirmPassword} placeholder="Please Confirm the password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
//         </div>
//         <input class="btn btn-primary" type='button' value="register" onClick={register}/>
//     </form>
//     </div>
// );

// }

// export default RegisterForm


