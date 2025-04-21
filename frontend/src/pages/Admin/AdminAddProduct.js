import React from 'react';
import AdminProductForm from './AdminProductForm/AdminProductForm';

const AdminAddProduct = () => {

  const handleAdd = async (data) => {
    // const formData = new FormData();
    // for (const key in data) {
    //   if (key === 'images') {
    //     data.images.forEach((img) => formData.append('images', img));
    //   } else {
    //     formData.append(key, data[key]);
    //   }
    // }
    // await addProduct(formData);
  };

  return (
    <div className="admin-add-product">
      <AdminProductForm onSubmit={handleAdd} />
    </div>
  );
};

export default AdminAddProduct;
