import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setCurrentUser, logout } from '../actions/UserActions'
import { getCategory } from '../actions/CategoryActions'
export default function Header() {

    const [listCategory, setListCategory] = useState([]);
    const getListCategory = () => {
        getCategory()
            .then((res) => {
                setListCategory(res.data)
            })
    }


    const cart = useSelector(state => state.cart);

    const getTotalProduct = () => {
        return cart.reduce((quantity, item) => {
            return parseInt(item.quantity) + quantity;
        }, 0);
    }

    const dispatch = useDispatch();
    const profile = useSelector(state => state.auth.user);
    // console.log(profile);

    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            dispatch(setCurrentUser(decoded));
        }
        getListCategory();
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
                                <Link
                                    onClick={handleLogout}
                                    className="dropBox-btn" to="/#">Đăng xuất</Link>
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
                    <Link title="Nhóm Đỉnh Cao" to="/">
                        <img alt="shopxanh.com | Register Free Website " src="https://shopxanh.com:88/files/thoitrang/canifa_web/logo/logo.png" />
                    </Link>
                </div>
                <div className="user-controls-bar">
                    <ul className="user-controls">
                        <li>
                            <span className="site-search-btn dropBox-btn"><i className="fas fa-search"></i></span>
                            <div className="dropBox">
                                <div className="box-section">
                                    <form className="accounts-form clearfix" action="../search-product.html" method="POST" id="search_mini_form" name="Categories">
                                        <input type="hidden" defaultValue={"741261"} style={{ display: 'none' }} name="checked" />
                                        <div className="form-left">
                                            <div className="form-group">
                                                <input type="search" className="form-control" placeholder="Từ Khóa" required name="search" />
                                            </div>
                                        </div>
                                        <input type="submit" className="btn btn-default text-uppercase" defaultValue="Search" />
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="/cart" className="cart-btn dropBox-btn"><i className="fas fa-shopping-cart"></i><span className="badge">{getTotalProduct()}</span></Link>
                            <div className="dropBox">
                                <div className="box-section">
                                    <h6>Giỏ Hàng Trống</h6>
                                    <Link to="/sach" className="btn btn-dark btn-block dismiss-button">Tiếp Tục Mua Sắm</Link>
                                    <p>Để sử dụng giao diện Canifa Web miễn phí, hãy truy cập vào kho giao diện của ShopXanh và làm theo hướng dẫn.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="main-nav-bar">
                    <nav className="navbar-collapse collapse">
                        <ul className="main-nav">
                            <li><Link to="/">Trang Chủ</Link></li>
                            <li className="has-ul"><span className="menu-sibling" />
                                <Link to="#">Tất Cả Sản Phẩm</Link>
                                <ul style={{ width: '500px' }}>

                                    {
                                        listCategory.map((item, index) => {
                                            return (
                                                <li key={index}><Link style={{ whiteSpace: 'nowrap' }} to={`/${item.code}`}><i className="fas fa-hand-point-right"></i>{item.name}</Link></li>
                                            )
                                        })
                                    }

                                    {/* <li><Link style={{ whiteSpace: 'nowrap' }} to="/sach"><i className="fas fa-hand-point-right"></i>Sách</Link></li> */}
                                    {/* <li><Link style={{ whiteSpace: 'nowrap' }} to="/quan-ao"><i className="fas fa-hand-point-right"></i>Quần áo</Link></li> */}
                                    {/* <li><Link style={{ whiteSpace: 'nowrap' }} to="/do-dien-tu"><i className="fas fa-hand-point-right"></i>Đồ điện tử</Link></li> */}
                                </ul>
                            </li>
                            <li><Link title="Liên Hệ" to="../contact-page.html">Liên Hệ</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
