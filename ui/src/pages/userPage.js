import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const UserPage = (props) => {
    const navigate = useNavigate();
    const ref = useRef();
    const [causeOfTravel, setCauseOfTravel] = useState("");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("");
    const [mode, setMode] = useState("bus");
    const [priority, setPriority] = useState("normal");
    const [project, setProject] = useState("");
    

    const handleCauseOfTravel = (event) => {
        setCauseOfTravel(event.target.value);
    }
    const handleSource = (event) => {
        setSource(event.target.value);
    }
    const handleDestination = (event) => {
        setDestination(event.target.value);
    }
    const handlePriority = (event) => {
        setPriority(event.target.value);
    }
    const handleProject = (event) => {
        setProject(event.target.value)
    }
    const handleMode = (event) => {
        setMode(event.target.value)
    }
    const handleFromDate = (event) => {
        setFromDate(event.target.value);
    }
    const handleToDate = (event) => {
        setToDate(event.target.value);
    }
    const handleRequest = (event) => {
        event.preventDefault();
        const employeeId = JSON.parse(localStorage.getItem("loggedInInfo")).emp_id;
        const token = localStorage.getItem("token");
        console.log("token", token);
        const date1 = new Date(fromDate);
        const date2 = new Date(toDate);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        const requestData = {
            "cause_travel": causeOfTravel,
            "source": source,
            "destination": destination,
            "mode": mode,
            "from_date": fromDate,
            "to_date": toDate,
            "no_of_days": diffDays,
            "priority": priority,
            "project": project,
            "emp": employeeId,
            "status": ""
        }
        console.log("requestData", requestData);
        axios.post("http://localhost:5000/request", requestData, {headers: {"x-access-token": token}})
            .then(data => {
                ref.current.reset();
                setCauseOfTravel("");
                setSource("");
                setDestination("");
                setFromDate("");
                setToDate("");
                setMode("bus");
                setPriority("normal");
                setProject("");
                alert("Request sent successfully");
            
            })
            .catch(error => {
                alert("error in Request");
            })
    }
    return (
        <div className="inner">
            <form onSubmit={handleRequest} ref={ref}>
                <h3>Travel Request</h3>

                <div className="row">
                    <div className="col-6 form-group">
                        <label>Cause Of Travel</label>
                        <input type="text" 
                            className="form-control" 
                            placeholder="Reaon"
                            onChange={handleCauseOfTravel}
                            value={causeOfTravel}/>
                    </div>
                    <div className="col-6 form-group">
                        <label>Mode</label>
                        <select className="form-control" 
                            value={mode} onChange={handleMode}>
                            <option value="flight">Flight</option>
                            <option value="train">Train</option>
                            <option value="bus">Bus</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 form-group">
                        <label>Source</label>
                        <input type="text" 
                            className="form-control" 
                            onChange={handleSource}
                            value={source}
                            placeholder="Enter Source" />
                    </div>
                    <div className="col-6 form-group">
                        <label>Destination</label>
                        <input type="text" 
                            className="form-control" 
                            value={destination}
                            onChange={handleDestination}
                            placeholder="Enter Destination" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 form-group">
                        <label>From Date</label>
                        <br />
                        <input type="date" 
                            className="form-group" 
                            value={fromDate} 
                            name="fromDate"
                            onChange={handleFromDate} />
                    </div>
                    <div className="col-6 form-group">
                        <label>To Date</label>
                        <br />
                        <input type="date" 
                            className="form-group" 
                            value={toDate} 
                            name="fromDate"
                            onChange={handleToDate} />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-6 form-group">
                        <label>Priority</label>
                        <select className="form-control" 
                            value={priority} onChange={handlePriority}>
                            <option value="normal">Normal</option>
                            <option value="critical">Critical</option>
                        </select>         
                    </div>
                    
                    <div className="col-6 form-group">
                        <label>Project</label>
                        <input type="text" 
                        className="form-control" 
                        value={project}
                        onChange={handleProject}
                        placeholder="Enter Project Name" />
                    </div>
                </div>
               
                <button type="submit" className="btn btn-dark btn-lg btn-block mt-2">Request</button>
                
            </form>
        </div>
    )
}
export default UserPage;