import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Products from "./components/Products/Products";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Sidebar from './components/Sidebar/Sidebar';
import { Container, Row, Col } from "react-bootstrap";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddProduct from "./components/AddProduct/AddProduct";
import Logout from "./components/Logout/Logout";


function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    let userDataString = localStorage.getItem("userData");
    let userData=JSON.parse(userDataString);
    setUser(userData?userData:{});
  },[]);
  console.log(user);
  return (
    <div className="App">
      <Container fluid>
        { Object.keys(user).length === 0?
          <Routes>
            <Route path="/" element={<Login setUser={setUser} user={user} />} />
            <Route path="/login" element={<Login setUser={setUser} user={user} />} />
            <Route path="/register" element={<Register setUser={setUser} user={user} />} />
          </Routes> 
          :
          <Row className="mt-5">
            <Col md={3}>
              <Sidebar setUser={setUser} user={user}/>
            </Col>
            <Col md={9}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/admin-dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products user={user} />} />
                <Route path="/add-product" element={<AddProduct user={user} />} />
                <Route path="/product/:id" element={<SingleProduct />} />
              </Routes>
            </Col>
          </Row>
        }

      </Container>
    </div>
  );
}

export default App;
