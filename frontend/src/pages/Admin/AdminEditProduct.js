import React from 'react';
import { useParams } from 'react-router-dom';
import AdminProductForm from './AdminProductForm/AdminProductForm';

const AdminEditProduct = () => {
  const { id } = useParams();

  const handleUpdate = async (data) => {

  };

  return (
    <div className="admin-edit-product">
      <AdminProductForm onSubmit={handleUpdate}  isEdit />
    </div>
  );
};

export default AdminEditProduct;