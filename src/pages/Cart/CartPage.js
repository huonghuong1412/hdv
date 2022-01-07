import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateItemInCart, deleteItemInCart, completeCart } from '../../actions/CartActions';
import Cart from '../../components/Cart';
import {currency} from '../../helpers/formatCurrency'

function CartPage(props) {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const getSubTotal = (cart) => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].product.price * cart[i].quantity;
        }
        return total;
    }

    const updateCart = (product, quantity) => {
        dispatch(updateItemInCart(product, quantity));
    }

    const deleteItemCart = (product) => {
        dispatch(deleteItemInCart(product));
    }

    const handleCompleteCart = () => {
        dispatch(completeCart());
    }

    return (
        <>


            <section className="section-banner">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="has-separator"><Link to="/" style={{ color: '#e32a53', textTransform: 'uppercase' }}>Home</Link></li>
                        <li className="has-separator"><Link to={`/cart`} style={{ color: '#e32a53', textTransform: 'uppercase' }}><i className="fas fa-angle-right" style={{ padding: '0 5px' }}></i>Giỏ hàng</Link></li>
                    </ul>
                </div>
            </section>
            <div className="u-s-p-b-60">

                <div className="section__intro u-s-m-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1 className="section__heading u-c-secondary">GIỎ HÀNG</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section__content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                                <div className="table-responsive">
                                    <table className="table-p">
                                        <tbody>
                                            <Cart cart={cart} updateCart={updateCart}
                                                deleteItemCart={deleteItemCart} />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="route-box">
                                    <div className="route-box__g1">
                                        <Link className="route-box__link" to="/sach"><i className="fas fa-long-arrow-alt-left" />
                                            <span>Tiếp tục mua hàng</span></Link></div>
                                    <div className="route-box__g2">
                                        <Link className="route-box__link" onClick={handleCompleteCart}><i className="fas fa-trash" />
                                            <span>Xoá giỏ hàng</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="u-s-p-b-60">
                {/*====== Section Content ======*/}
                <div className="section__content">
                    <div className="container">
                        <div style={{ paddingLeft: '20px', width: '100%', display: 'block' }} className="row">
                            <div id="wi-md-4" style={{ float: 'right!important', minHeight: 'auto', height: 'auto' }} className="col-md-4 box-block col-xs-12">
                                <table className="table total-table">
                                    <tbody>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Tổng Giá:</td>
                                            <td><span id="total_price">{currency(getSubTotal(cart))}</span>&nbsp;</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <span id="test_str" />
                                <div className="md-margin" />
                                <Button style={{ background: '#f67777' }}
                                    className="hidden-xs hidden-sm btn btn-custom-6 btn-lger min-width-sm btn-block"
                                    href="/order"
                                    >
                                    <span style={{ position: 'inherit', display: 'inline' }} className="fa fa-check">&nbsp;</span>
                                    Chấp Nhận Và Tiếp Tục
                                </Button>
                                <div className="md-margin" />
                            </div>
                            <div className="md-margin visible-sm visible-xs clearfix" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;