import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
const LoginPage = (props) => {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUserName = (event) => {
        setUserName(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const doLogin = (event) => {
        event.preventDefault();
        const loginData = {
            "username": username,
            "password": password
        }
        axios.post("http://localhost:5000/login", loginData)
            .then(response => {
                console.log("response", response);
                localStorage.setItem("loggedInInfo", JSON.stringify(response.data.data));
                localStorage.setItem("token", response.data.token);
                alert("Login Successfull");
                if(response.data.data.user_type === "admin") {
                    navigate("/admin");
                } else if(response.data.data.user_type === "user") {
                    navigate("/user")
                } else {
                    alert("Not Implemented");
                }

            })
            .catch(error => {
                alert("Invalid Credentials")
            })
    }
    return (
        <div className="inner">
            <form onSubmit={doLogin}>
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" 
                        className="form-control" 
                        value={username}
                        onChange={handleUserName}
                        placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                        className="form-control"
                        value={password}
                        onChange={handlePassword} 
                        placeholder="Enter password" />
                </div>

                <div className="form-group">
                    
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block mt-2">Sign in</button>
                <p className="forgot-password text-right">
                    Create new Account?   <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    )
}
export default LoginPage;