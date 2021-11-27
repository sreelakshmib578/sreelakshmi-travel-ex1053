import axios from "axios";
import { useEffect, useState } from "react";

const AdminPage = (props) => {
    const [requests, setRequests] = useState([]);
    console.log("requests", requests)
    useEffect(() => {
        getAllRequest();
    }, [])

    const getAllRequest = () => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:5000/request", {headers: {"x-access-token": token}})
            .then(response => {
                setRequests(response.data.data);
            })
            .catch(error => {
                console.log("error", error);
            })
    }
    return(
        <div className="container">
           {
               requests.length === 0 ? (
                   <h5>No Request Found</h5>
               ) : (
                   <div style={{justifyContent: "center", alignItems: "center"}}>
                       <h2>Travel Request</h2>
                       <table class="table">
                           <thead>
                                <th scope="col">Cause Of Travel</th>
                                <th scope="col">Source</th>
                                <th scope="col">Destination</th>
                                <th scope="col">From Date</th>
                                <th scope="col">To Date</th>
                                <th scope="col">No of Days</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Project</th>
                            </thead>
                            <tbody>
                                {requests.map(request => {
                                    return (
                                        <tr key={request.req_id}>
                                            <td scope="row">{request.cause_travel}</td>
                                            <td>{request.source}</td>
                                            <td>{request.destination}</td>
                                            <td>{request.from_date.split('T')[0]}</td>
                                            <td>{request.to_date.split('T')[0]}</td>
                                            <td>{request.no_of_days}</td>
                                            <td>{request.priority}</td>
                                            <td>{request.project}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                       </table>

                   </div>
                   
               )
           }

        </div>
    )
}
export default AdminPage;