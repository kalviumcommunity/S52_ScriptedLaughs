  import React, { useEffect, useState } from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import { useNavigate, useParams } from 'react-router-dom';
  import axios from 'axios'

  const UpdateData = () => {
    const {id} = useParams()
    const [username,setUserName] = useState('');
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
    const navigate = useNavigate();
    const [isButtonDisabled,setIsButtonDisabled] = useState(true);

    useEffect(()=>{
      axios.get(`http://localhost:8000/prankscripts/getUserData/${id}`)
      .then(res => {
        console.log(res)

        setUserName(res.data.username)
        setTitle(res.data.title)
        setDescription(res.data.description)
        setCategory(res.data.category)

      })
      .catch(err => console.log(err)) 
    },[])

    useEffect(()=>{
      if(username.trim()===''|| title.trim()===''|| description.trim()===''|| category.trim()===''){
        setIsButtonDisabled(true);
      }
      else{
        setIsButtonDisabled(false);
      }
    },[username,title,description,category])

    const update=(e)=>{
      e.preventDefault();
      axios.put(`http://localhost:8000/prankscripts/updateData/${id}`, {username,title,description,category})
      .then(res =>{
        console.log(res)
        navigate("/")
      })
      .catch(err => console.log(err))
    }

    

    return (
      <div>
        <div style={{backgroundColor:"#F8F3EC"}} className='d-flex justify-content-center vh-100'>
        <div className='col-md-5'>
          <Form className='mt-3 p-4 rounded-3' onSubmit={update}>
            <h1 className='text-primary'>Update Script</h1>
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              <Form.Label className='mt-3'>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e)=>setUserName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter content" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter Category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            </Form.Group>
            
            <Button variant="primary" type="submit" disabled={isButtonDisabled}>
              Update
            </Button>
          </Form>
          </div>
        </div>
      </div>
    );
  };

  export default UpdateData;
