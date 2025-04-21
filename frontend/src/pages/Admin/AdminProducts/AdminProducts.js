import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import products from '../../../data/products';

export default function AdminProducts() {
  const [productList, setProductList] = useState(products);
  const [showConfirm, setShowConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (productId) => {
    setProductToDelete(productId);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setProductList(productList.filter(p => p.id !== productToDelete));
    setShowConfirm(false);
    setProductToDelete(null);
  };

  return (
    <div className="admin-products">
      <h1>Sản phẩm hiện có</h1>
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Ảnh</th>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Thương hiệu</th>
              <th>Giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {productList.map(product => (
              <tr key={product.id} onClick={() => navigate(`/admin/products/${product.id}`)}>
                <td><img src={product.image} alt={product.name} className="product-img" /></td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>{product.price.toLocaleString('vi-VN')}₫</td>
                <td onClick={e => e.stopPropagation()}>
                  <FontAwesomeIcon 
                    icon={faPenToSquare} 
                    className="icon edit" 
                    onClick={() => navigate(`/admin/products/${product.id}/edit`)} 
                  />
                  <FontAwesomeIcon 
                    icon={faTrash} 
                    className="icon delete" 
                    onClick={() => handleDelete(product.id)} 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showConfirm && (
        <div className="modal">
          <div className="modal-content">
            <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
            <button onClick={confirmDelete}>Xóa</button>
            <button onClick={() => setShowConfirm(false)}>Hủy</button>
          </div>
        </div>
      )}
    </div>
  );
}