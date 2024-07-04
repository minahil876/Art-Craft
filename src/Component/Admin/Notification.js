import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notification = () => {
  const [user, allUser] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.12.103:8002/crafters/users/')
      .then((res) => {
        const item = res.data.filter(item => item.role !== 'admin');
        allUser(item);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const del=(id)=>{
    axios.delete(`http://192.168.12.103:8002/crafters/users/${id}/`).then((res)=>{
      console.log(res.data);
      window.location.reload();
    })
  }

  return (
    <div>
      <h2 className='text-danger fw-bolder m-3'>User Notifications</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 ? (
            user.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td><button className='btn btn-danger' onClick={()=>del(item.id)}>Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Notification;
