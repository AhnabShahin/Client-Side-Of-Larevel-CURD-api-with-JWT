import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBeer } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Sidebar = ({user,setUser}) => {
    const navigate = useNavigate();
    const logout=()=>{
        axios.get(`https://rongobuy.brain-cache.com/api/logout`, { headers: { "Authorization": `Bearer ${user.token}` }})
        .then(res => {
            localStorage.removeItem('userData');
            setUser({})
            navigate('/')
        })
    }
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={<FaBeer />}><Link to={`/admin-dashboard`}>Dashboard</Link></MenuItem>
                <SubMenu title="Products" icon={<FaBeer />}>
                    <MenuItem><Link to={`/products`}>All Products</Link></MenuItem>
                    <MenuItem><Link to={`/add-product`}>Add Product</Link></MenuItem>
                </SubMenu>
                <MenuItem icon={<FaBeer />} onClick={()=>logout()}>logout</MenuItem>
            </Menu>
        </ProSidebar>
    );
};

export default Sidebar;