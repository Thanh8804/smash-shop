import React from 'react';
import './AdminOrders.css';
import { useNavigate } from 'react-router-dom';

const dummyOrder = {
  _id: '68022764aee326341058a6d2',
  order_id: 1,
  user_id: null,
  total_price: 5000000,
  status: 'Completed',
  datePaid: '2025-04-18T10:20:20.337Z',
  pay_method: 'Credit Card',
  location: '123 Delivery Address',
  dateCreated: '2025-04-18T10:20:20.339Z',
  __v: 0,
  order_details: [
    {
      _id: '68022764aee326341058a6d5',
      order_detail_id: 1,
      order_id: '68022764aee326341058a6d2',
      prod_id: '68022764aee326341058a6b4',
      quantity: 1,
      price: 4500000,
      __v: 0
    },
    {
      _id: '68022764aee326341058a6d6',
      order_detail_id: 2,
      order_id: '68022764aee326341058a6d2',
      prod_id: '68022764aee326341058a6b7',
      quantity: 2,
      price: 100000,
      __v: 0
    }
  ],
  id: '68022764aee326341058a6d2'
};

const AdminOrders = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/admin/orders/${id}`);
  };

  return (
    <div className="admin-orders">
      <h2>Đơn hàng</h2>
      <div className="orders-table-container">
        {/* <table className="orders-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên sản phẩm</th>
              <th>Mã sản phẩm</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => handleClick(dummyOrder._id)}>
              <td>Jane Cooper</td>
              <td>Microsoft</td>
              <td>(225) 565-0118</td>
              <td>jane@microsoft.com</td>
              <td>United States</td>
              <td><span className="status delivered">Đã giao</span></td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default AdminOrders;