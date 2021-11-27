import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const Registration = (props) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("Female");
    const [role, setRole] = useState("user");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleUsername = (event) => {
        setUserName(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleGender = (event) => {
        setGender(event.target.value)
    }
    const handleRole = (event) => {
        setRole(event.target.value)
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleAge = (event) => {
        setAge(event.target.value);
    }
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }
    const doRegister = (event) => {
        event.preventDefault();
        const registerData = {
            "username": userName,
            "password": password,
            "user_type": role,
            "first_name": firstName,
            "last_name": lastName,
            "age": age,
            "gender": gender,
            "address": address,
            "phone_number": phoneNumber
        }
        console.log("registerData", registerData);
        axios.post("http://localhost:5000/register", registerData)
            .then(data => {
                alert("registred successfully. Please Login to continue");
                navigate("/login")

            })
            .catch(error => {
                alert("error in register");
            })
    }
    return (
        <div className="inner">
            <form onSubmit={doRegister}>
                <h3>Register</h3>

                <div className="row">
                    <div className="col-6 form-group">
                        <label>First name</label>
                        <input type="text" 
                            className="form-control" 
                            placeholder="First name"
                            onChange={handleFirstName}
                            value={firstName}/>
                    </div>

                    <div className="col-6 form-group">
                        <label>Last name</label>
                        <input type="text" 
                            className="form-control" 
                            onChange={handleLastName}
                            value={lastName}
                            placeholder="Last name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 form-group">
                        <label>Username</label>
                        <input type="email" 
                            className="form-control" 
                            value={userName}
                            onChange={handleUsername}
                            placeholder="Enter email" />
                    </div>
                    <div className="col-6 form-group">
                        <label>Password</label>
                        <input type="password"
                            className="form-control"
                            value={password}
                            onChange={handlePassword}
                            placeholder="Enter password" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 form-group">
                        <label>Gender</label>
                        <br />
                        <input type="radio" 
                            className="form-group" 
                            value="Male" 
                            checked={gender === "Male"}
                            name="gender"
                            onChange={handleGender} /> Male
                        <input type="radio" 
                            className="form-group" 
                            value="Female" 
                            checked={gender=== 'Female'}
                            onChange={handleGender}
                            name="gender" /> Female
                    </div>

                    <div className="col-6 form-group">
                        <label>Role</label>
                        <select className="form-control" 
                            value={role} onChange={handleRole}>
                            <option value="admin">Admin</option>
                            <option value="hr">HR</option>
                            <option value="user">user</option>
                        </select>
                    </div>
                </div>
                
                
                <div className="form-group">
                    <label>Address</label>
                    <textarea row={3} 
                        className="form-control"
                        value={address}
                        onChange={handleAddress}
                        placeholder="Enter Address" />
                </div>
                <div className="row">
                    <div className="col-6 form-group">
                        <label>Age</label>
                        <input type="text" 
                        className="form-control" 
                        value={age}
                        onChange={handleAge}
                        placeholder="Enter your age" />
                    </div>
                    
                    <div className="col-6 form-group">
                        <label>Phone number</label>
                        <input type="text" 
                        className="form-control" 
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        placeholder="Enter Phone number" />
                    </div>
                </div>
               
                <button type="submit" className="btn btn-dark btn-lg btn-block mt-2">Register</button>
                <p className="forgot-password text-right">
                    Already registered?   <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    )
}
export default Registration;