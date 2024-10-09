import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Cricketers() {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedRole, setSelectedRole] = useState("All");

    const apiUrl = "http://localhost:3001/Cricketers";

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                setData(res);
                setFilteredData(res); // Set the filtered data initially to show all cricketers
            });
    }, []);

    // Function to filter cricketers based on the selected role
    const handleRoleChange = (e) => {
        const role = e.target.value;
        setSelectedRole(role);

        if (role === "All") {
            setFilteredData(data);
        } else {
            const filtered = data.filter((player) => player.role === role);
            setFilteredData(filtered);
        }
    };

    const FormattedCricketers = filteredData.map((player) => {
        return (
            <div class="card col-6 me-2 mt-2" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h3 class="card-title">{player.name}</h3>
                    <h6 class="card-text">{player.country}</h6>
                    <h6 class="card-text">Age: {player.age}</h6>
                    <h6 class="card-text">Role: {player.role}</h6>
                    <Link className="btn btn-warning me-2 mt-2" to={"/cricketers/edit/" + player._id}>Edit</Link>
                    <Link to={"/cricketers/delete/" + player._id} className='btn btn-danger mt-2'>Delete</Link>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="container">
                <Link to="/cricketers/add" className="btn btn-primary my-3 me-4">Add Cricketer</Link>
                <span className="form-group">
                    <select id="role" className="form-select" value={selectedRole} onChange={handleRoleChange}>
                        <option value="All">All</option>
                        <option value="Batsman">Batsman</option>
                        <option value="Bowler">Bowler</option>
                        <option value="All-Rounder">All-Rounder</option>
                        <option value="Wicketkeeper">Wicketkeeper</option>
                        <option value="Batsman-WK">Batsman-WK</option>
                    </select>
                </span>

                <div className="row my-4">
                    {FormattedCricketers.length > 0 ? FormattedCricketers : <p>No players found.</p>}
                </div>
            </div>
        </>
    );
}

export default Cricketers;