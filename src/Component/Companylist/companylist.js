import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Companylist() {

    const [companylist, setCompanylist] = useState();
    useEffect(() => {
        (() => {
            try {

                const response = axios.get('http://localhost:3001/api/detail');
                if (response.status === 200) {
                    setCompanylist(response.data.company_name);
                    console.log(companylist);
                }

            } catch (error) {
                console.log("Error in Get Api");
            }
        })()
    }, [])



    const value = ["aditya", "ankit", "delhi"]
    const navigate = useNavigate();
    return (
        <>
            <div>companylist</div>
            {/* {
                companylist.map((name, index) => (
                    <ul>
                        <li>{index} , {name}</li>
                        <li> <button className=' bg-slate-500 ' onClick={() => navigate('/detail', { state: { reportid: "hello" } })}  >click</button></li>
                    </ul>
                ))
            } */}
        </>
    )
}

export default Companylist