import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminProductForm from './AdminProductForm/AdminProductForm';
import { useGetProductsQuery, useUpdateProductMutation } from '../../features/product/productApi';
import { useCreateProductImageMutation } from '../../features/services/productImageApi';

const AdminEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: products = [], isLoading, refetch } = useGetProductsQuery();
  const [updateProduct] = useUpdateProductMutation();
  const [uploadImage] = useCreateProductImageMutation();

  const productToEdit = products.find((p) => p._id === id);

  const handleUpdate = async (data) => {
    try {
      const { images, ...productData } = data;

      // B1: Gửi cập nhật sản phẩm
      await updateProduct({ id, productData }).unwrap();

      // B2: Nếu có hình mới, upload
      if (images && images.length > 0 && images[0] instanceof File) {
        const formData = new FormData();
        images.forEach((image) => formData.append('images', image));
        await uploadImage({ productId: id, imageData: formData }).unwrap();
      }

      await refetch();
      navigate('/admin/products');
    } catch (err) {
      console.error("Lỗi khi cập nhật:", err);
    }
  };

  if (isLoading || !productToEdit) return <div>Đang tải...</div>;

  return (
    <div className="admin-edit-product">
      <AdminProductForm
        initialData={productToEdit}
        onSubmit={handleUpdate}
        isEdit
      />
    </div>
  );
};

export default AdminEditProduct;
