import React from 'react';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h5>Task</h5>
            <ul>
                <li>Develop CRUD rest-API </li>
                <li>JWT Authentication </li>
                <li>Intervention Image processing</li>
                <li>Develop admin panel products table with CRUD </li>
            </ul>
            <h5>Scenario</h5>
            <p>Suppose you need to build an ecommerce platform with Laravel Framework for rest-API and admin
                panel development. At first you are told to develop rest-api and admin crud for only products.
                The routes will be for getting all products, single product by slug, add new product, update existing
                product, delete product by product id.
                <br />
                The Product model will have id, title, slug (matching with title), main Image, background Image,
                price, created at, modified at.
                All the routes for Products API except get requests, will go through an Auth middleware with JWT
                authentication.
                <br />
                The User model will have id, username, phone, created at, modified at.
                Make a test user for testing the endpoints.
                <br />
                The main Image and Background Image of Products can take file or base64 type request body
                parameter and save &amp; place it in “product/” folder;
                <br />
                For Admin panel, create a table for all “Products (with pagination), edit, delete product and add
                products with proper security. No need any visualization for users in admin panel, just make an
                admin user for accessing the admin panel. (UI doesn’t matter for the task)
                <br />
                Provide the rest-api endpoints with required parameters. So that we can test.</p>
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
    );
};

export default Dashboard;