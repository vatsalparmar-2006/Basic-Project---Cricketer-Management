import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DeleteCricketer(){

    const [data,setData] = useState({});

    const {_id} = useParams();

    const navigate = useNavigate();

    const apiUrl = "http://localhost:3001/Cricketers/" + _id;

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    fetch(apiUrl, { method: "DELETE" })
    .then(res => res.json())
    .then(res => {
        navigate('/cricketers');
    });

   return (
        <>
           <div class="card col-6 me-2 mt-2" style={{width: "18rem"}}>
                <div class="card-body">
                    <h3 class="card-title">Deleted...</h3>
                </div>
            </div>
        </>
    );
}

export default DeleteCricketer;