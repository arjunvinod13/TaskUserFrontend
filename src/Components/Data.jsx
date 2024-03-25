import React, { useEffect, useState } from 'react';
import { AddDataAPI } from '../Services/AllAPI';


function Data() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const [dataDetails, setDataDetails] = useState({
        name: "", password: "", DOB: "", number: "", choose: "", address: ""
    });

    

  

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataDetails({ ...dataDetails, [name]: value });
    };

  

    const addData = async () => {
        const { name, password, DOB, number,  address } = dataDetails;

        if (!name || !password || !DOB || !number  || !address ) {
            alert('Please fill the fields');
            return;
        }

        const reqBody = new FormData();
        reqBody.append("name", name);
        reqBody.append("password", password);
        reqBody.append("DOB", DOB);
        reqBody.append("number", number);
        
        reqBody.append("address", address);
        
        const reqHeader = {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        };

        try {
            const result = await AddDataAPI(reqBody, reqHeader);
            console.log(result);
            if (result.status === 200) {
                console.log(result.data);
                alert('Data created successfully')
            } else {
                console.log(result.response.data);
            }
        } catch (error) {
            console.error("Error adding data:", error);
        }
    };

    return (
        <div>
            <h2 className='fs-1 mt-3 mb-3 text-info'>Add data </h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required value={dataDetails.name} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" required value={dataDetails.password} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="DOB" className="form-label">Date of Birth:</label>
                    <input type="date" className="form-control" id="DOB" name="DOB" required value={dataDetails.DOB} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Phone Number:</label>
                    <input type="text" className="form-control" id="number" name="number" required value={dataDetails.number} onChange={handleInputChange} />
                </div>
           
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <textarea className="form-control" id="address" name="address" required value={dataDetails.address} onChange={handleInputChange}></textarea>
                </div>
             
                <button onClick={addData} type="button" className="btn btn-primary mb-3">Submit</button>
            </form>
        </div>
    );
}

export default Data;