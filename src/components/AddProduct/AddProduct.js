import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ setUser, user }) => {
    const [successMassage, setSuccessMassage] = useState(null)
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const submit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        axios({
            method: 'post',
            url: 'https://rongobuy.brain-cache.com/api/create',
            data: data,
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':`Bearer ${user.token}`,
              }
        }) .then(res => {
            console.log(res)
            setSuccessMassage(res.data.message)
        })
        reset()
    }

    return (

        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={submit} method="post" encType="multipart/form-data">
            {successMassage ? <h2>{successMassage}</h2> : ''}
            <div className="form-row ">
                <div className="form-group col-md-6 mx-auto my-3">
                    <label htmlFor="title">Your product title   {errors.title && <span className="text-danger">  This field is required</span>}</label>
                    <input type="text" className="form-control" id="title" {...register("title", { required: false })} placeholder="Enter your product title.." />
                </div>
                <div className="form-group col-md-6 mx-auto my-3">
                    <label htmlFor="price">Price {errors.price && <span className="text-danger">  This field is required</span>}</label>
                    <input type="number" className="form-control" id="price" {...register("price", { required: false })} placeholder="price" />
                </div>
                <div className="form-group col-md-6 mx-auto my-3">
                    <label htmlFor="main_img">Main Image {errors.main_img && <span className="text-danger">  This field is required</span>}</label>
                    <input type="file" className="form-control" id="main_img" {...register("main_img", { required: false })} placeholder="Main Image" />
                </div>
                <div className="form-group col-md-6 mx-auto my-3">
                    <label htmlFor="background_img">Background Image {errors.background_img && <span className="text-danger">  This field is required</span>}</label>
                    <input type="file" className="form-control" id="background_img" {...register("background_img", { required: false })} placeholder="background Image" />
                </div>
            </div>
            <div className="d-flex">
                <button type="submit" className="main-button mx-auto my-3" ><span>Add Now</span></button>
            </div>
        </form>
    )
};

export default AddProduct;