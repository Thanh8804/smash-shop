import routes from '../configs/routes.config';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import User from '../pages/User/User';

const pages = [
    { path: routes.home, Component: Home },
    { path: routes.login, Component: Login },
    { path: routes.register, Component: Register },
    { path: routes.user, Component: User },

];

export default pages;