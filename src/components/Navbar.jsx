import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setCurrentUser, logout } from '../actions/UserActions'
import CartHeader from './CartHeader';
import { deleteItemInCart } from '../actions/CartActions';
function Navbar(props) {
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
    }, [dispatch, token]);

    const handleLogout = () => dispatch(logout());

    const getSubTotal = (cart) => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].product.price * cart[i].quantity;
        }
        return total;
    }

    const deleteItemCart = (product) => {
        dispatch(deleteItemInCart(product));
    }


    return (
        <>
            <header className="header--style-1 header--box-shadow">
                <nav className="primary-nav primary-nav-wrapper--border">
                    <div className="container">
                        <div className="primary-nav">
                            <Link className="main-logo" to="/">
                                <img src="images/logo/logo-1.png" alt="" /></Link>
                            <form className="main-form">
                                <label htmlFor="main-search" />
                                <input
                                    className="input-text input-text--border-radius input-text--style-1"
                                    type="text" id="main-search"
                                    placeholder="Search"

                                />
                                <button className="btn btn--icon fas fa-search main-search-button" type="submit" /></form>
                            {/*====== End - Search Form ======*/}
                            {/*====== Dropdown Main plugin ======*/}
                            <div className="menu-init" id="navigation">
                                <button className="btn btn--icon toggle-button fas fa-cogs" type="button" />
                                {/*====== Menu ======*/}
                                <div className="ah-lg-mode">
                                    <span className="ah-close">✕ Close</span>
                                    {/*====== List ======*/}
                                    <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                                        <li className="has-dropdown" data-tooltip="tooltip">
                                            <a><i className="far fa-user-circle" /></a>
                                            {/*====== Dropdown ======*/}
                                            <span className="js-menu-toggle" />
                                            <ul style={{ width: '120px' }}>

                                                {
                                                    token ? (
                                                        <>
                                                            <li>
                                                                <Link to="/dasboard-account"><i className="fas fa-user-circle u-s-m-r-6" />
                                                                    <span>{profile.sub}</span></Link></li>
                                                            <li>
                                                                <button type="link" className="signout-btn" onClick={handleLogout}>
                                                                    <i className="fas fa-lock-open u-s-m-r-6" />
                                                                    <span>Signout</span>
                                                                </button>
                                                            </li>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <li>
                                                                <Link to="/register"><i className="fas fa-user-plus u-s-m-r-6" />
                                                                    <span>Signup</span></Link></li>
                                                            <li>
                                                                <Link to="/login"><i className="fas fa-lock u-s-m-r-6" />
                                                                    <span>Signin</span></Link></li>
                                                        </>
                                                    )
                                                }
                                            </ul>
                                            {/*====== End - Dropdown ======*/}
                                        </li>
                                        <li className="has-dropdown" data-tooltip="tooltip">
                                            <a><i className="fas fa-user-cog" /></a>
                                            {/*====== Dropdown ======*/}
                                            <span className="js-menu-toggle" />
                                            <ul style={{ width: '120px' }}>
                                                <li className="has-dropdown has-dropdown--ul-right-100">
                                                    <a>Language<i className="fas fa-angle-down u-s-m-l-6" /></a>
                                                    {/*====== Dropdown ======*/}
                                                    <span className="js-menu-toggle" />
                                                    <ul style={{ width: '120px' }}>
                                                        <li>
                                                            <a className="u-c-brand">ENGLISH</a></li>
                                                        <li>
                                                            <a>ARABIC</a></li>
                                                        <li>
                                                            <a>FRANCAIS</a></li>
                                                        <li>
                                                            <a>ESPANOL</a></li>
                                                    </ul>
                                                    {/*====== End - Dropdown ======*/}
                                                </li>
                                                <li className="has-dropdown has-dropdown--ul-right-100">
                                                    <a>Currency<i className="fas fa-angle-down u-s-m-l-6" /></a>
                                                    {/*====== Dropdown ======*/}
                                                    <span className="js-menu-toggle" />
                                                    <ul style={{ width: '225px' }}>
                                                        <li>
                                                            <a className="u-c-brand">$ - US DOLLAR</a></li>
                                                        <li>
                                                            <a>£ - BRITISH POUND STERLING</a></li>
                                                        <li>
                                                            <a>€ - EURO</a></li>
                                                    </ul>
                                                    {/*====== End - Dropdown ======*/}
                                                </li>
                                            </ul>
                                            {/*====== End - Dropdown ======*/}
                                        </li>
                                        <li data-tooltip="tooltip">
                                            <a href="tel:+0900901904"><i className="fas fa-phone-volume" /></a></li>
                                        <li data-tooltip="tooltip">
                                            <a href="mailto:contact@domain.com"><i className="far fa-envelope" /></a></li>
                                    </ul>
                                    {/*====== End - List ======*/}
                                </div>
                                {/*====== End - Menu ======*/}
                            </div>
                            {/*====== End - Dropdown Main plugin ======*/}
                        </div>
                        {/*====== End - Primary Nav ======*/}
                    </div>
                </nav>
                {/*====== End - Nav 1 ======*/}
                {/*====== Nav 2 ======*/}
                <nav className="secondary-nav-wrapper">
                    <div className="container">
                        {/*====== Secondary Nav ======*/}
                        <div className="secondary-nav">
                            {/*====== Dropdown Main plugin ======*/}
                            <div className="menu-init" id="navigation1">
                                <button className="btn btn--icon toggle-mega-text toggle-button" type="button">M</button>
                                {/*====== Menu ======*/}
                                <div className="ah-lg-mode">
                                    <span className="ah-close">✕ Close</span>
                                    {/*====== List ======*/}
                                    <ul className="ah-list">
                                        <li className="has-dropdown">
                                            <Link to="/" className="mega-text">M</Link>
                                            {/*====== Mega Menu ======*/}
                                            <span className="js-menu-toggle" />
                                            {/*====== End - Mega Menu ======*/}
                                        </li>
                                    </ul>
                                    {/*====== End - List ======*/}
                                </div>
                                {/*====== End - Menu ======*/}
                            </div>
                            {/*====== End - Dropdown Main plugin ======*/}
                            {/*====== Dropdown Main plugin ======*/}
                            <div className="menu-init" id="navigation2">
                                <button className="btn btn--icon toggle-button fas fa-cog" type="button" />
                                {/*====== Menu ======*/}
                                <div className="ah-lg-mode">
                                    <span className="ah-close">✕ Close</span>
                                    {/*====== List ======*/}
                                    <ul className="ah-list ah-list--design2 ah-list--link-color-secondary">
                                        <li className="has-dropdown">
                                            <a>Danh mục<i className="fas fa-angle-down u-s-m-l-6" /></a>
                                            {/*====== Dropdown ======*/}
                                            <span className="js-menu-toggle" />
                                            <ul style={{ width: '170px' }}>

                                                <li className="has-dropdown has-dropdown--ul-left-100">
                                                    <Link to="/sach">Sách<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></Link>
                                                    {/*====== Dropdown ======*/}
                                                    <span className="js-menu-toggle" />
                                                    <ul style={{ width: '200px' }}>
                                                        <li>
                                                            <Link to="/sach/sach-thieu-nhi">Sách thiếu nhi</Link></li>
                                                        <li>
                                                            <Link to="/sach/sach-ky-nang">Sách kỹ năng</Link></li>
                                                        <li>
                                                            <Link to="/sach/sach-van-hoc">Sách văn học</Link></li>
                                                    </ul>
                                                    {/*====== End - Dropdown ======*/}
                                                </li>

                                                <li className="has-dropdown has-dropdown--ul-left-100">
                                                    <Link to="/quan-ao">Quần áo<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></Link>
                                                    {/*====== Dropdown ======*/}
                                                    <span className="js-menu-toggle" />
                                                    <ul style={{ width: '200px' }}>
                                                        <li>
                                                            <Link to="/quan-ao/quan-dai-nam">Quần dài nam</Link></li>
                                                        <li>
                                                            <Link to="/quan-ao/quan-dai-nu">Quần dài nữ</Link></li>
                                                        <li>
                                                            <Link to="/quan-ao/ao-khoac-nam">Áo khoác nam</Link></li>
                                                        <li>
                                                            <Link to="/quan-ao/ao-khoac-nu">Áo khoác nữ</Link></li>
                                                    </ul>
                                                    {/*====== End - Dropdown ======*/}
                                                </li>
                                                <li className="has-dropdown has-dropdown--ul-left-100">
                                                    <Link to="/do-dien-tu">Đồ điện tử<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></Link>
                                                    {/*====== Dropdown ======*/}
                                                    <span className="js-menu-toggle" />
                                                    <ul style={{ width: '200px' }}>
                                                        <li>
                                                            <Link to="/do-dien-tu/laptop">Laptop</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/do-dien-tu/dien-thoai">Điện thoại</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/do-dien-tu/dong-ho">Đồng hồ</Link>
                                                        </li>
                                                    </ul>
                                                    {/*====== End - Dropdown ======*/}
                                                </li>
                                            </ul>
                                            {/*====== End - Dropdown ======*/}
                                        </li>

                                        <li>
                                            <Link to="shop-side-version-2.html">About</Link></li>
                                        <li>
                                            <Link to="shop-side-version-2.html">Blogs</Link></li>
                                        <li>
                                            <Link to="/admin/add">Admin</Link></li>
                                    </ul>
                                    {/*====== End - List ======*/}
                                </div>
                                {/*====== End - Menu ======*/}
                            </div>
                            {/*====== End - Dropdown Main plugin ======*/}
                            {/*====== Dropdown Main plugin ======*/}
                            <div className="menu-init" id="navigation3">
                                <button className="btn btn--icon toggle-button fas fa-shopping-bag toggle-button-shop" type="button" />
                                <span className="total-item-round">
                                    {getTotalProduct()}
                                </span>
                                {/*====== Menu ======*/}
                                <div className="ah-lg-mode">
                                    <span className="ah-close">✕ Close</span>
                                    {/*====== List ======*/}
                                    <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                                        <li>
                                            <a href="index.html"><i className="fas fa-home" /></a></li>
                                        <li>
                                            <a href="wishlist.html"><i className="far fa-heart" /></a></li>
                                        <li className="has-dropdown">
                                            <Link to="/cart" className="mini-cart-shop-link"><i className="fas fa-shopping-bag" />
                                                <span className="total-item-round">
                                                    {getTotalProduct()}
                                                </span></Link>
                                            {/*====== Dropdown ======*/}
                                            <span className="js-menu-toggle" />
                                            <div className="mini-cart">
                                                {/*====== Mini Product Container ======*/}
                                                <div className="mini-product-container gl-scroll u-s-m-b-15">
                                                    {/*====== Card for mini cart ======*/}
                                                    <CartHeader cart={cart} deleteItemCart={deleteItemCart} />
                                                </div>
                                                <div className="mini-product-stat">
                                                    <div className="mini-total">
                                                        <span className="subtotal-text">SUBTOTAL</span>
                                                        <span className="subtotal-value">${getSubTotal(cart)}</span></div>
                                                    <div className="mini-action">
                                                        <a className="mini-link btn--e-brand-b-2" href="checkout.html">PROCEED TO CHECKOUT</a>
                                                        <Link className="mini-link btn--e-transparent-secondary-b-2" to="/cart">VIEW CART</Link></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default withRouter(Navbar);