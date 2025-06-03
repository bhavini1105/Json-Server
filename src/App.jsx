import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Table from './Components/Table';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Index from './Components/Index';

function App() {
  let URL = "http://localhost:3000/products";

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState("");

   const navigate = useNavigate();

  const handleFetch = async () => {
    let res = await axios.get(URL);
    let data = res.data;
    setUsers(data);
  }

  useEffect(() => {
    handleFetch();
  }, [])


  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId === "") {
      let res = await axios.post(URL, { ...user, id: String(Date.now()) });
      let data = res.data;

      toast.success('User Added Succesfully!..');

    }
    else {
      let res = await axios.put(URL + '/' + editId, { ...user });
      let data = res.data;
      toast.warn('User Updated Succesfully!..');

    }
    setUser({});
    handleFetch();
  }

  const handleDelete = async (id) => {
    let res = await axios.delete(URL + '/' + id);
    toast.info('User Deleted Succesfully!..');
    handleFetch();
  }

  const handleUpdate = async (id) => {
    let selectedUser = users.find((item) => item.id === id);
    setEditId(id);
    setUser(selectedUser);
    navigate('/form');
  }

  return (
    <>
      <Header />
      <Routes>

      <Route path='/' element ={<Index/>}/>

        <Route path='/form'
          element={
            <Form
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              user={user}
            />
          }
        />

        <Route
          path='/table'
          element={
            <Table
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              users={users}
            />
          }
        />
      </Routes>
      

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>
  )
}

export default App
