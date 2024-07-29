import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {
    return (
        <>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to="/customer-add">Add Customer</Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to="/customer-list">Customer List</Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to="/Favorites">Favorites</Link>
        </Menu.Item>
    </Menu>
        </>
    );
};