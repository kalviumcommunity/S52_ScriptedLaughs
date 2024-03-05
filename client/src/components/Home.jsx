import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditNote from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import '../App.css';
import Tooltip from '@mui/material/Tooltip';
import Navbar from './Navbar/Navbar';
import Logout from '../auth/Logout';

const Home = ({ username }) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
    }
    axios.get('https://api-27il.onrender.com/prankscripts/')
      .then(res => {
        setData(res.data);
        setLoader(false);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/prankscripts/deleteData/${id}`)
      .then(() => {
        setData(prevData => prevData.filter(item => item._id !== id));
      })
      .catch(err => console.log(err));
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/login');
  // };

  return (
    <div>
      <div>
        <Navbar name={username} />
      </div>
      <div className='bodyContainer'>
        <div className='contentContainer'>
          {loader ?
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
                      <Link to={`/update/${datas._id}`} state={datas} className='btn btn-primary icon'>
                        <EditNote />
                      </Link>
                      <button className="btn btn-danger" onClick={(e) => {
                        e.preventDefault();
                        handleDelete(datas._id);
                      }}>
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
        </div>
      </div>
      <div style={{ textAlign: "center", position: "fixed", bottom: "0%", width: "100%" }}>
        <div>
          <Link to="/create">
          <Tooltip title="Add Post" placement='left'>
            <Fab color="primary" aria-label="add" sx={{ width: '80px', height: '80px', display: 'block', margin: '15px' }} >
              <AddIcon sx={{ fontSize: '3rem' }} />
            </Fab>
            </Tooltip>
          </Link>

          
          <div style={{ cursor: "pointer" }}>
          <Tooltip title="Logout" placement='left'>
            <Fab color='primary' aria-label="add" sx={{ width: '80px', height: '80px', display: 'block', margin: '15px' }}>
              <Logout sx={{ fontSize: '3rem' }} />
            </Fab>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
