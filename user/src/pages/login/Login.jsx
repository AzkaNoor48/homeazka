import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom'

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="wrapper">
    <div className="inner">
      <div className="image-holder">
        <img src="assets/registration-form-4.jpg" height="450px" alt="" />
      </div>
      <form onSubmit={handleClick}>
        <h3>Sign In</h3>
        <div className="form-holder active">
          <input type="text" placeholder="e-mail" className="form-control" id="email"
                ref={email} name="email" />
        </div>
        <div className="form-holder">
          <input type="password" placeholder="Password" className="form-control" style={{fontSize: '15px'}} 
             id="password" ref={password} name="password" 
          />
        </div>
        <div className="row">
        <button  type="submit" >
            Login
            </button>
           
           
                <Link to="/forgot_password">Forgot your password?</Link>
            </div>
        <div className="form-login">
          
          <p>Don't Have an Account? <Link to="/register">Signup</Link></p>
        </div>
      </form>
    </div>
  </div>
  );
}
