import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom'
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src="assets/registration-form-4.jpg" alt="" />
          </div>
          <form onSubmit={handleClick}>
        
            <div className="form-holder active">
              <input type="text" placeholder="name" className="form-control"id="name"
                    ref={username} name="name"
               />
            </div>
            <div className="form-holder">
              <input type="text" placeholder="e-mail" className="form-control" id="email"
                    ref={email} name="email"/>
            </div>
            <div className="form-holder">
              <input type="password" placeholder="Password" className="form-control" style={{fontSize: '15px'}} id="password"
                    ref={password} name="password" />
            </div>

            <div className="form-holder">
              <input type="password" placeholder="cf_Password" className="form-control" style={{fontSize: '15px'}}id="cf_password"
                    ref={passwordAgain} name="cf_password"/>
                    </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" defaultChecked required /> I agree all statement in Terms &amp; Conditions
                <span className="checkmark" />
              </label>
            </div><br></br>
            <div className="form-login">
              <button type="submit">Sign up</button>
              <p>Already an account? <Link to="/login">Login</Link></p>
            </div>
            <br>
            </br><br></br>
          </form>
        </div>
      </div>
            

                
  );
}
