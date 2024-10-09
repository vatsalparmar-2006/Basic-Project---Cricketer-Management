import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCricketer() {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const apiUrl = "http://localhost:3001/Cricketers";

        fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(() => {
                navigate("/cricketers");
            })
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="shadow p-3 my-5 bg-body-tertiary rounded me-3">
                <div className="form-group row">
                    <label htmlFor="text2" className="col-3 col-form-label">
                        Player's Name:
                    </label>
                    <div className="col-8">
                        <input
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label htmlFor="text1" className="col-3 col-form-label">
                        Player's Country:
                    </label>
                    <div className="col-8">
                        <input
                            onChange={(e) => setData({ ...data, country: e.target.value })}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="form-group row mb-2">
                    <label htmlFor="text3" className="col-3 col-form-label">
                        Player's Age:
                    </label>
                    <div className="col-8">
                        <input
                            onChange={(e) => setData({ ...data, age: e.target.value })}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="text3" className="col-3 col-form-label">
                        Player's Role:
                    </label>
                    <div className="col-8">
                        <input
                            onChange={(e) => setData({ ...data, role: e.target.value })}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className="form-group row p-3">
                    <div className="offset-4 col-8">
                        <button type="submit" className="btn btn-primary m-3">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default AddCricketer;