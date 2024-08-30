import { useState } from "react";

const ValidForm = () => {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const emailpattern=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  function handleSubmit() {

    if (email.trim() === "") {
      setErrors((errors)=>({...errors,email: "Enter email address"} ));
    }
    else if (!emailpattern.test(email)){
        setErrors((errors)=>({...errors,email: "Enter Valid address"} ));
    }else{
        setErrors((errors)=>({...errors,email: ""} ));
    }
  

  
    if (password.trim() === "") {
      setErrors((errors)=>({...errors,password: "Enter password"} ));
    }
    else if (password.trim().length<8){
        setErrors((errors)=>({...errors,password: "password is min 8 characters"} ));
    }else{
        setErrors((errors)=>({...errors,password: ""} ));
    }
  
  }
  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card border-0 shadow">
              <div className="card-body">
                <div
                  className="mx-auto"
                  style={{ width: "50px", height: "50px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0 0 14A7 7 0 0 0 8 1zm0 12a5.98 5.98 0 0 1-4.001-1.528A5.978 5.978 0 0 1 8 11a5.978 5.978 0 0 1 4.001 1.472A5.98 5.98 0 0 1 8 13z"
                    />
                  </svg>
                </div>
                <form>
                  <h1>LOGIN</h1>
                  <div className="mt-3">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}
                  </div>
                  <div className="mt-3">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {errors.password && (
                      <span className="text-danger">{errors.password}</span>
                    )}
                  </div>

                  <div className="text-center mt-3">
                    <button
                      className="btn btn-primary m-2"
                      onClick={handleSubmit}
                    >
                      
                      Submit
                    </button>
                    <button className="btn btn-primary"> Reset </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidForm;
