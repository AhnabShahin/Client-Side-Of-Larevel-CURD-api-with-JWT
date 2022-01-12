// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = ({user,setUser}) => {
//     const navigate = useNavigate();
//     useEffect(()=>{
//         axios.get(`https://rongobuy.brain-cache.com/api/logout`, { headers: { "Authorization": `Bearer ${user.token}` }})
//         .then(res => {
//             localStorage.removeItem('userData');
//             setUser({})
//             navigate('/')
//         })
//     },[])
//     return (
//         <>
//         </>
//     );
// };

// export default Logout;