import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setCurrentUser, logout } from '../actions/UserActions'
export default function HeaderAdmin() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.auth.user);
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            dispatch(setCurrentUser(decoded));
        }
    }, [dispatch, token]);
    const handleLogout = () => dispatch(logout());
    return (
        <>
            <div className="tp-bar">
                <div className="container">
                    {
                        token ? <ul className="tp-links">
                            <li>
                                <Link className="dropBox-btn" to="/dasboard-profile">
                                    {profile.sub}
                                </Link>
                            </li>
                            <li>
                                <a
                                    onClick={handleLogout}
                                    className="dropBox-btn" href="/#">Đăng xuất</a>
                            </li>
                        </ul>
                            : < ul className="tp-links">
                                <li>
                                    <Link className="dropBox-btn" to="/register">Đăng Ký</Link>
                                </li>
                                <li>
                                    <Link className="dropBox-btn" to="/login">Đăng Nhập</Link>
                                </li>
                            </ul>
                    }
                </div>
            </div>
            <div className="main-bar">
                <div className="logo">
                    <Link title="Nhóm Đỉnh Cao" to="/admin">
                        <img alt="shopxanh.com | Register Free Website " src="https://shopxanh.com:88/files/thoitrang/canifa_web/logo/logo.png" />
                    </Link>
                </div>
                <div className="main-nav-bar">
                    <nav className="navbar-collapse collapse">
                        <ul className="main-nav">
                            <li className="has-ul"><span className="menu-sibling" />
                                <Link to="#">Danh mục</Link>
                                <ul style={{ width: '500px' }}>
                                    <li><Link style={{ whiteSpace: 'nowrap' }} to="/admin/category"><i className="fas fa-hand-point-right"></i>Danh mục</Link></li>
                                    <li><Link style={{ whiteSpace: 'nowrap' }} to="/admin/subcategory"><i className="fas fa-hand-point-right"></i>Danh mục con</Link></li>
                                </ul>
                            </li>
                            <li className="has-ul"><span className="menu-sibling" />
                                <Link to="#">Sản Phẩm</Link>
                                <ul style={{ width: '500px' }}>
                                    <li><Link style={{ whiteSpace: 'nowrap' }} to="/admin/products/sach"><i className="fas fa-hand-point-right"></i>Sách</Link></li>
                                    <li><Link style={{ whiteSpace: 'nowrap' }} to="/admin/products/quan-ao"><i className="fas fa-hand-point-right"></i>Quần áo</Link></li>
                                    <li><Link style={{ whiteSpace: 'nowrap' }} to="/admin/products/do-dien-tu"><i className="fas fa-hand-point-right"></i>Đồ điện tử</Link></li>
                                </ul>
                            </li>
                            {/* <li className="has-ul"><span className="menu-sibling" />
                                <Link to="/admin/stock">Nhập hàng</Link>
                            </li> */}
                            <li className="has-ul"><span className="menu-sibling" />
                                <Link to="/admin/user">User</Link>
                            </li>
                            <li className="has-ul"><span className="menu-sibling" />
                                <Link to="/admin/orders">Đơn đặt hàng</Link>
                            </li>
                            <li className="has-ul"><span className="menu-sibling" />
                                <Link to="/admin/comments">Bình luận</Link>
                            </li>
                            <li className="has-ul"><span className="menu-sibling" />
                                <Link to="#">Khác</Link>
                                <ul style={{ width: '500px' }}>
                                    <li><Link style={{ whiteSpace: 'nowrap' }} to="/admin/authors"><i className="fas fa-hand-point-right"></i>Tác giả</Link></li>
                                    <li><Link style={{ whiteSpace: 'nowrap' }} to="/admin/publisher"><i className="fas fa-hand-point-right"></i>Nhà xuất bản</Link></li>
                                    <li><Link style={{ whiteSpace: 'nowrap' }} to="/admin/colors"><i className="fas fa-hand-point-right"></i>Màu sắc</Link></li>
                                    <li><Link style={{ whiteSpace: 'nowrap' }} to="/admin/sizes"><i className="fas fa-hand-point-right"></i>Kích cỡ</Link></li>
                                    <li><Link style={{ whiteSpace: 'nowrap' }} to="/admin/brands"><i className="fas fa-hand-point-right"></i>Thương hiệu</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
