import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditNote from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import ResponsiveAppBar from './Navbar';
import '../App.css'

const Home = () => {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    axios.get('https://api-27il.onrender.com/prankscripts/')
      .then(res => {
        setData(res.data)
        setLoader(false);
      })
      .catch(err => console.log(err))

  }, []);


  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/prankscripts/deleteData/${id}`)
      .then(() => {
        setData(prevData => prevData.filter(item => item._id !== id))
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <div className='bodyContainer'>
        <div className='contentContainer'>
          {
            loader ? 
            (
              <div>
              <div className='loaderOpt'>
                <img className='loader' src="https://media.tenor.com/JwPW0tw69vAAAAAi/cargando-loading.gif" alt="loader...." />
              </div>
              </div>
            )
            :
            (
              data.map((datas) => {
                return (
                  <div key={datas._id} className='totalContent'>
                    <div className='headInfo'>
                      <h1 className='title'>{datas.title}</h1>
                      <h6 className='category'><b>category: </b>{datas.category}</h6>
                    </div>
                    <div className='contentBox'>
                      <p>{datas.description}</p>
                      <Link to={`/update/${datas._id}`} className='btn btn-primary icon'>
                        <EditNote />
                      </Link>
                      <button className="btn btn-danger" onClick={(e) => {
                        e.preventDefault()
                        handleDelete(datas._id)
                      }}>
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                )
              })
            )}
        </div>
      </div>
      <div style={{ textAlign: "center", position: "fixed", bottom: "0%", width: "100%" }}>
        <Link to="/create">
          <Fab color="primary" aria-label="add" sx={{ width: '80px', height: '80px' }}>
            <AddIcon sx={{ fontSize: '3rem' }} />
          </Fab>
        </Link>
      </div>
    </div>
  )
}

export default Home;
