import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FetchData = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get('http://localhost:8000/prankscripts/');
                setData(res.data);
            }
            catch(err){
                console.log("Error: ",err)
            }
        };
        fetchData();
    },[]);

  return (
    <div>
        <h1>Data from MongoDB</h1>
        <ul>
            {data.map((item,index)=>(
                <div key={index}>
                    <p><b>Username: </b>{item.username}</p>
                    <p><b>Title: </b>{item.title}</p>
                    <p><b>Description: </b>{item.description}</p>
                    <p><b>Category: </b>{item.category}</p>
                    <p><b>Difficulty: </b>{item.difficulty}</p>
                    <hr />
                </div>
            ))}
        </ul>
    </div>
  )
};

export default FetchData;
