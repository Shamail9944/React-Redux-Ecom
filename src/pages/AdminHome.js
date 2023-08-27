import React from 'react'
import Navbar from '../features/navbar/Navbar';
import AdminProductList from '../features/admin/components/AdminProductList';

const AdminHome = () => {
    return (
        <div>
            <Navbar />
            <h1>Admin</h1>
            <AdminProductList />

        </div>
    )
}

export default AdminHome