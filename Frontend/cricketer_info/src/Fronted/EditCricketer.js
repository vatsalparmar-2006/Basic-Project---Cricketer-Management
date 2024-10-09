import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditCricketer() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { _id } = useParams();

    useEffect(() => {
        const apiUrl = "http://localhost:3001/Cricketers/" + _id;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => { setData(res); console.log(data); })
    }, [])

    return (
        <>
            <form class="shadow p-3 my-5 bg-body-tertiary rounded me-3">

                <div class="form-group row">
                    <label for="text" class="col-4 col-form-label">Player's Name : </label>
                    <div class="col-8">
                        <input value={data.name} onChange={(e) => {
                            setData({ ...data, name: e.target.value })
                        }} type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="text1" class="col-4 col-form-label">Player's Country : </label>
                    <div class="col-8">
                        <input value={data.country} onChange={(e) => {
                            setData({ ...data, country: e.target.value })
                        }} type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="text" class="col-4 col-form-label">Player's Age : </label>
                    <div class="col-8">
                        <input value={data.age} onChange={(e) => {
                            setData({ ...data, age: e.target.value })
                        }} type="text" class="form-control" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="text3" class="col-4 col-form-label">Player's Role : </label>
                    <div class="col-8">
                        <input value={data.role} onChange={(e) => {
                            setData({ ...data, role: e.target.value })
                        }} type="text" class="form-control" />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="offset-4 col-8">
                        <button onClick={(e) => {
                            e.preventDefault();
                            const apiUrl = "http://localhost:3001/Cricketers/" + _id;
                            fetch(apiUrl, {
                                method: "PATCH",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                                .then(res => res.json())
                                .then(res => {
                                    navigate("/cricketers")
                                });
                        }} class="btn btn-primary m-3">Edit</button>
                    </div>
                </div>
            </form>
        </>);
}

export default EditCricketer;