import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../actions/UserActions';
import { makePaymentVnpay } from '../../actions/PaymentService'
import { IMAGE_FOLDER } from '../../constants'
import _ from 'lodash'
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { currency } from '../../helpers/formatCurrency'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrderPage(props) {

    const [vnp_OrderInfo, setVnp_OrderInfo] = useState("");

    const cart = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth.auth);
    const dispatch = useDispatch();
    const getSubTotal = (cart) => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].product.price * cart[i].quantity;
        }
        return total;
    }

    const handlePayment = () => {
        let orderInfo = {}

        orderInfo.vnp_OrderInfo = vnp_OrderInfo;
        orderInfo.vnp_Amount = getSubTotal(cart);

        if (vnp_OrderInfo !== "") {
            makePaymentVnpay(orderInfo)
                .then((res) => {
                    window.location.href = res.data.redirect_url;
                })
        } else {
            toast.error("Điền địa chỉ nhận hàng")
        }
    }

    const getCurrentUserLogin = () => {
        dispatch(getCurrentUser());
    }

    useEffect(() => {
        getCurrentUserLogin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div style={{ background: 'white', height: 'auto', padding: '30px' }} className="container">
                <h2 style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>Xác nhận đơn hàng</h2>
                <form onSubmit={handlePayment}>
                    <div style={{ padding: '10px', width: '100%', border: '1px solid #ccc', marginBottom: '30px' }} className="row">
                        <div style={{ marginBottom: '15px' }} className="col-md-12 col-xs-12 pull-left">
                            <table style={{ border: 'none' }} className="table cart-table">
                                <tbody>
                                    {
                                        cart.map((item, index) => {
                                            return (
                                                <tr style={{ padding: '0px', borderBottom: '1px dotted #ccc' }} key={index}>
                                                    <td style={{ width: '20%', padding: '10px' }} className="product-name-col hidden-xs">
                                                        <a style={{ position: 'relative' }} href={`/san-pham/${item.product.id}/${item.product.slug}`}>
                                                            <img style={{ maxHeight: '75px', objectFit: 'contain' }} src={IMAGE_FOLDER + item.product.images[0]} alt="Nước Hoa nam Blue" />
                                                        </a>
                                                    </td>
                                                    <td style={{ padding: '0px' }} className="product-price-col">
                                                        <div style={{ paddingLeft: '0px' }} id="hidden-mobile" className="pull-left hidden-md hidden-lg hidden-sm col-xs-3">
                                                            <a
                                                                id="hidden-mobile"
                                                                style={{ position: 'relative', marginBottom: '20px', float: 'left' }}
                                                                href={`/san-pham/${item.product.id}/${item.product.slug}`}>
                                                                <img style={{ minHeight: '50px', maxHeight: '50px', objectFit: 'contain' }} src={IMAGE_FOLDER + item.product.images[0]} alt="Nước Hoa nam Blue" />
                                                            </a>
                                                        </div>
                                                        <h3 style={{ textAlign: 'left', fontSize: '14px', fontWeight: 700 }} className="product-name">
                                                            <a href={`/san-pham/${item.product.id}/${item.product.slug}`}>{item.product.name}</a>
                                                        </h3>
                                                        <div style={{ textAlign: 'left', width: '60%', margin: '0px auto' }}>
                                                            <span style={{ fontSize: '14px', whiteSpace: 'nowrap' }}
                                                                className="product-price-special">{currency(item.product.price)}&nbsp;
                                                        <strong>&nbsp;x&nbsp;</strong>
                                                                {item.quantity}
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div style={{ padding: '15px', width: '100%' }}>
                            <div style={{ padding: '0px' }} className="col-md-2 col-sm-4 col-xs-6 pull-right">
                                <table style={{ float: 'right', marginTop: '10px' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '100%', whiteSpace: 'nowrap' }}>Tổng Giá:</td>
                                            <td style={{ paddingLeft: '20px', fontWeight: 800 }}>{currency(getSubTotal(cart))}&nbsp;</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div style={{ border: '2px solid #f67777', margin: '20px 0px 20px 0px', padding: '10px' }} className="col-md-4 pull-right col-xs-12">
                        <h4 style={{ textAlign: 'center' }}><strong>Tổng đơn hàng: </strong>
                            {currency(getSubTotal(cart))}
                        </h4>
                    </div>
                    <div style={{ padding: '0px' }} className="text-right col-md-12 col-xs-12">
                        <Button
                            variant="outlined" color="secondary"
                            style={{ margin: '10px 0' }}
                            className="btn btn--e-transparent-brand-b-2"
                            onClick={handlePayment}>
                            Hoàn Tất Thanh Toán&nbsp;
                            <span style={{ position: 'inherit', display: 'inline' }} className="fa fa-chevron-right" />
                        </Button>
                    </div>
                    <div style={{ padding: '0px' }} className="text-right col-md-12 col-xs-12">
                        {
                            auth.username && auth.username.includes("@gmail.com") ? (
                                <div style={{ marginBottom: '20px' }} className="ship-row clearfix">
                                    <div id="addview" style={{ fontSize: '16px' }} className="col-md-2 text-left">
                                        <strong>Số điện thoại và địa chỉ nhận hàng</strong></div>
                                    <div id="address_width" style={{ float: 'right' }} className="col-md-10 col-xs-12">
                                        <textarea
                                            id="param_address"
                                            style={{ width: '100%!important' }}
                                            placeholder="Số điện thoại và địa chỉ nhận hàng..."
                                            required
                                            type="text"
                                            name="vnp_OrderInfo"
                                            onChange={(e) => {
                                                setVnp_OrderInfo(e.target.value)
                                            }}
                                            className="form-control"></textarea>
                                    </div>
                                </div>
                            ) : <div style={{ marginBottom: '20px' }} className="ship-row clearfix">
                                <div id="addview" style={{ fontSize: '16px' }} className="col-md-2 text-left">
                                    <strong>Địa chỉ nhận hàng</strong></div>
                                <div id="address_width" style={{ float: 'right' }} className="col-md-10 col-xs-12">
                                    <textarea
                                        id="param_address"
                                        style={{ width: '100%!important' }}
                                        placeholder="Địa chỉ nhận hàng..."
                                        required
                                        type="text"
                                        name="vnp_OrderInfo"
                                        onChange={(e) => {
                                            setVnp_OrderInfo(e.target.value)
                                        }}
                                        className="form-control"></textarea>
                                </div>
                            </div>
                        }
                    </div>
                    {
                        _.isEmpty(auth) === false ? (
                            <>
                                <div style={{ padding: '0px', marginTop: '20px' }} className="col-md-12 col-xs-12 pull-left">
                                    <table className="table total-table">
                                        <tbody style={{}}>
                                            <tr style={{ background: '#f8f4ee' }}>
                                                <td colSpan={6} className="total-table-title">Thông Tin Cá Nhân</td>
                                            </tr>
                                            <tr style={{ textTransform: 'none', padding: '10px' }}>
                                                <td style={{ textAlign: 'left', whiteSpace: 'nowrap' }} colSpan={1}>
                                                    <strong>Tên:</strong>&nbsp;
                                                {auth.lastName + " " + auth.firstName}
                                                </td>
                                                <td style={{ textAlign: 'left' }} colSpan={2}>
                                                    <strong>Địa Chỉ:</strong>&nbsp;
                                                {
                                                        auth.ward + ", " + auth.district + ", " + auth.city
                                                    }
                                                </td>
                                            </tr>
                                            <tr style={{ textTransform: 'none', padding: '10px' }}>
                                                <td style={{ textAlign: 'left' }}>
                                                    <strong style={{ whiteSpace: 'nowrap' }}>Điện Thoại:</strong>&nbsp;{auth.phone}
                                                </td>
                                                <td style={{ whiteSpace: 'nowrap' }}><strong>Email:</strong>{auth.email}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        ) : <h1>Loading....</h1>
                    }
                </form>
            </div>
        </div>
    )
}

export default OrderPage;