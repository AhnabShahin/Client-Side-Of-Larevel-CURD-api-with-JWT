import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (

    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
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
        <p ><span>Login</span></p>
      </div>
      <div className="d-flex">
        <button type="submit" className="main-button mx-auto my-3" ><span>Login</span></button>
      </div>
    </form>
  )
};

export default Register;