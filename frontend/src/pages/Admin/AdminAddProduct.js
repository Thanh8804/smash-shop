import React from 'react';
import AdminProductForm from './AdminProductForm/AdminProductForm';
import { useGetProductsQuery, useCreateProductMutation, useUpdateProductMutation } from '../../features/product/productApi';
import { useCreateProductImageMutation } from '../../features/services/productImageApi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AdminAddProduct = () => {
  const navigate = useNavigate();
  const [createProduct] = useCreateProductMutation();
  const [uploadProductImage] = useCreateProductImageMutation();
  const { refetch } = useGetProductsQuery();
  const [loading, setLoading] = useState(false);

  const handleAdd = async (data) => {
    setLoading(true);
    try {
      const { images, quantity_sold, ...productData } = data;
      productData.quantity_sold = 0;
      // B1: Gửi sản phẩm
      const res = await createProduct(productData).unwrap();
      const productId = res?.data?._id;
  
      // B2: Upload ảnh nếu có
      if (images && images.length > 0 && productId) {
        for (let i = 0; i < images.length; i++) {
          const formData = new FormData();
          formData.append('image', images[i]); 
          formData.append('prod_id', productId);
          formData.append('is_primary_image', i === 0 ? 'true' : 'false'); 
          const result = await uploadProductImage(formData).unwrap();
          console.log("Upload ảnh thành công:", result);
        }
      }
  
      // B3: Xác nhận và chuyển trang
      await refetch();
      if (window.confirm("Thêm sản phẩm thành công! Bấm OK để quay lại trang quản lý.")) {
        navigate('/admin/products');
      }
  
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      alert("Thêm sản phẩm thất bại. Vui lòng kiểm tra lại thông tin hoặc kết nối mạng.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-add-product">
      <AdminProductForm onSubmit={handleAdd} loading={loading} />
    </div>
  );
};

export default AdminAddProduct;
