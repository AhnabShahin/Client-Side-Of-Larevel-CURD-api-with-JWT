import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Products.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

const Products = ({ user }) => {

    const [products, setProducts] = useState([]);
    const [recentChange, setRecentChange] = useState(null);
    const [editProduct, setEditProduct] = useState(null);
    const selectProduct = (p) => {
        setEditProduct(p)
    }
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        axios({
            method: 'post',
            url: `https://rongobuy.brain-cache.com/api/update/${editProduct.id}`,
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${user.token}`,
            }
        }).then(res => {
            setRecentChange(editProduct);
            e.target.reset();
        })
        
    }

    useEffect(() => {
        axios.get(`https://rongobuy.brain-cache.com/api/products`, { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(res => {
                setProducts(res.data)
            })
    }, [recentChange]);
    const handleDelete = (id) => {
        axios.delete(`https://rongobuy.brain-cache.com/api/delete/${id}`, { headers: { "Authorization": `Bearer ${user.token}` } })
            .then(res => {
                setRecentChange(id)
            })
    }
    return (
        <div className='all-products'>
            <Row className='g-0 head'>
                <Col md={1}>
                    <div>
                        <span>Product ID</span>
                    </div>
                </Col>
                <Col md={1}>
                    <div>
                        <span>Title</span>
                    </div>
                </Col>
                <Col md={1}>
                    <div>
                        <span>Slug</span>
                    </div>
                </Col>
                <Col md={1}>
                    <div>
                        <span>Main Image</span>
                    </div>
                </Col>
                <Col md={1}>
                    <div>
                        <span>BG Image</span>
                    </div>
                </Col>
                <Col md={1}>
                    <div>
                        <span>Price</span>
                    </div>
                </Col>
                <Col md={2}>
                    <div>
                        <span>Created at</span>
                    </div>
                </Col>
                <Col md={2}>
                    <div>
                        <span>Updated At</span>
                    </div>
                </Col>
                <Col md={1}>
                    <div>
                        <span>Edit  </span>
                    </div>
                </Col>
                <Col md={1}>
                    <div>
                        <span>Delete</span>
                    </div>
                </Col>
            </Row>

            {products?.map((product) => (
                <Row key={product.id} className='g-0 body'>
                    <Col md={1}>
                        <div>
                            <span>{product.id}</span>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div>
                            <span>{product.title}</span>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div>
                            <span>{product.slug}</span>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className='w-100'>
                            <img className='w-100' src={`http://127.0.0.1:8000/uploads/product/${product.main_img}`} alt="" />
                        </div>
                    </Col>
                    <Col md={1}>
                        <div>
                            <img className='w-100' src={`http://127.0.0.1:8000/uploads/product/${product.background_img}`} alt="" />
                        </div>
                    </Col>
                    <Col md={1}>
                        <div>
                            <span>{product.price}</span>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <span>{product.created_at}</span>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <span>{product.updated_at}</span>
                        </div>
                    </Col>
                    <Col md={1}>
                        <span className='edit-product' data-toggle="modal" data-target="#exampleModal" onClick={() => (selectProduct(product))}><AiFillEdit />  </span>
                    </Col>
                    <Col md={1}>
                        <span className='delete-product' onClick={() => (handleDelete(product.id))}><AiFillDelete /></span>
                    </Col>
                </Row>
            ))}
            {/* edit Modal Start*/}
            {editProduct ?
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <form onSubmit={submit} method="post" encType="multipart/form-data">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Product Id  : {editProduct.id}</h5>
                                    <button className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">Close</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Title of product</label>
                                        <input type="text"  name='title' className="form-control" id="title" aria-describedby="title" placeholder="Enter title" />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price</label>
                                        <input type="number" name='price' className="form-control" id="price" placeholder="Price" />
                                    </div>
                                    <div className="row">
                                        <div className="col-6 d-flex flex-column" >
                                            <label htmlFor="main-img">main image</label>
                                            <img className='w-100' id='main-img' src={`http://127.0.0.1:8000/uploads/product/${editProduct.main_img}`} alt="" />
                                        </div>
                                        <div className="col-6 d-flex flex-column" >
                                            <label htmlFor="main-img">Background image</label>
                                            <img className='w-100' src={`http://127.0.0.1:8000/uploads/product/${editProduct.background_img}`} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" >Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> : ''}

            {/* Edit modal end */}
        </div>
    );
};

export default Products;