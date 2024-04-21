import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Form, Container} from 'react-bootstrap';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignIn(){
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const data ={
    email: email,
    password: password
  }
  console.log(data);

  const handleFormSubmit = async(e)=> {
    e.preventDefault();
    await axios.post("http://localhost:5000/signin", data).then((res) =>{
      console.log(res);
      toast("succesfully logged in", {type: "success", autoClose: 2000})
    })
    .catch((err)=>{
      console.log(err);
      toast.error("login failed")
    })

  }


  return (
    <Container className='vh-100 d-flex justify-content-center align-items-center pt-1'>
      <Form onSubmit={handleFormSubmit} className='shadow-lg p-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=> setemail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=> setpassword(e.target.value)}  type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <ToastContainer />
    </Container>
    
  );
}

export default SignIn;