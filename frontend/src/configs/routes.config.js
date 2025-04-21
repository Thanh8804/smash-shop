import products from "../data/products";

const routes = {
    home: '/',
    user: '/user',
    register: '/register',
    login: '/login',
    products: '/products',
    product: '/product/:id',
    cart: '/cart',
    order: '/order',
//Admin
    admin: '/admin',
    adminProducts: '/admin/products',
    adminProduct: '/admin/products/:id',
    adminEditProduct: '/admin/products/:id/edit',
    adminAddProduct: '/admin/products/add',
    adminOrders: '/admin/orders',

};

export default routes;