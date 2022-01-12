import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';

const Login = ({ setUser, user }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    axios.post(`https://rongobuy.brain-cache.com/api/login`, data)
      .then(res => {
        let userData = {};
        userData['token'] = res.data.token;
        userData['username'] = data.username;
        setUser(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
      })

    navigate('/')
  };


  return (
    <Container>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row ">
          <div className="form-group col-md-6 mx-auto my-3">
            <label htmlFor="username">Your username   {errors.username && <span className="text-danger">  This field is required</span>}</label>
            <input type="text" className="form-control" id="username" {...register("username", { required: true })} placeholder="Enter your username.." />
          </div>
          <div className="form-group col-md-6 mx-auto my-3">
            <label htmlFor="password">Password {errors.password && <span className="text-danger">  This field is required</span>}</label>
            <input type="password" className="form-control" id="password" {...register("password", { required: true })} placeholder="password" />
          </div>
        </div>
        <div className="d-flex">
          <button type="submit" className="main-button mx-auto my-3" ><span>Login</span></button>
        </div>
      </form>
      <div className='dashboard'>
        <h5>Laravel API end point</h5>
        <ul>
          <li>https://rongobuy.brain-cache.com/api/login <span> Method POST, KEYS : username, password</span></li>
          <li>https://rongobuy.brain-cache.com/api/register <span> Method POST, KEYS : username, email, phone, password</span></li>
        </ul>
        <ul>
          <li>https://rongobuy.brain-cache.com/api/logout <span> Method GET with JWT</span></li>
          <li>https://rongobuy.brain-cache.com/api/get_user <span> Method GET with JWT</span></li>
          <li>https://rongobuy.brain-cache.com/api/products <span> Method GET with JWT to get all products</span></li>
          <li>https://rongobuy.brain-cache.com/api/products/:id <span> Method GET with JWT to get product by id</span></li>
          <li>https://rongobuy.brain-cache.com/api/create <span> Method POST with JWT to Add new product</span></li>
          <li>https://rongobuy.brain-cache.com/api/update/:id <span> Method POST with JWT to edit product's by id</span></li>
          <li>https://rongobuy.brain-cache.com/api/delete/:id <span> Method DELETE with JWT to delete product by id</span></li>
        </ul>
        <h5>Test user for testing end points</h5>
        <ul>
          <li>username : <span>shahin</span></li>
          <li>pasword : <span>123456</span></li>
        </ul>
      </div>
    </Container>
  )
};

export default Login;