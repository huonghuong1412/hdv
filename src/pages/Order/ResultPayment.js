import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../actions/OrderService'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { completeCart } from '../../actions/CartActions';

function ResultPayment(props) {
    const [vnp_Amount, setVnp_Amount] = useState(0);
    const [vnp_BankCode, setVnp_BankCode] = useState("");
    const [vnp_BankTranNo, setvnp_BankTranNo] = useState("");
    const [vnp_CardType, setvnp_CardType] = useState("");
    const [vnp_PayDate, setvnp_PayDate] = useState("");
    const [vnp_ResponseCode, setvnp_ResponseCode] = useState("");
    const [vnp_TransactionNo, setvnp_TransactionNo] = useState("");
    const [vnp_OrderInfo, setvnp_OrderInfo] = useState("");
    const [vnp_TxnRef, setvnp_TxnRef] = useState("");

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const getSubTotal = (cart) => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].product.price * cart[i].quantity;
        }
        return total;
    }

    const handleCompleteCart = () => {
        dispatch(completeCart());
    }

    // "total_price": 6.0,
    // "orderDetailDtos": [ 
    //     {
    //         "product_id": 1,
    //         "amount": 2,
    //         "price": 2.0,
    //         "total_price": 4.0
    //     },
    //     {
    //         "product_id": 2,
    //         "amount": 1,
    //         "price": 1.0,
    //         "total_price": 2.0
    //     }
    // ],
    // "user_id": 2

    const makeOrder = () => {
        const user_id = localStorage.getItem("user_id");
        var now = new Date();
        let create_time = now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear()  + " " + now.getHours + ":" + now.getMinutes + ":" + now.getSeconds;
        let total_price = getSubTotal(cart);
        let orderInfo = vnp_OrderInfo !== "" ? vnp_OrderInfo : "Thanh toan don hang";
        let orderDetailDtos = cart.map(item => {
            return {
                product_id: item.product.id,
                amount: item.quantity,
                price: item.product.price,
                total_price: item.product.price * item.quantity
            }
        })
        let order = {
            user_id: user_id,
            total_price: total_price,
            orderDetailDtos: orderDetailDtos,
            create_time: create_time,
            orderInfo: orderInfo
        }
        return order;
    }

    console.log(makeOrder());


    useEffect(() => {
        const params = new URLSearchParams(window.location.search) // id=123
        let vnp_Amount = params.get('vnp_Amount') // 123
        let vnp_BankCode = params.get('vnp_BankCode') // 123
        let vnp_BankTranNo = params.get('vnp_BankTranNo') // 123
        let vnp_CardType = params.get('vnp_CardType') // 123
        let vnp_OrderInfo = params.get('vnp_OrderInfo') // 123
        let vnp_PayDate = params.get('vnp_PayDate') // 123
        let vnp_ResponseCode = params.get('vnp_ResponseCode') // 123
        let vnp_TransactionNo = params.get('vnp_TransactionNo') // 123
        let vnp_TxnRef = params.get('vnp_TxnRef') // 123

        setVnp_Amount(vnp_Amount);
        setVnp_BankCode(vnp_BankCode)
        setvnp_BankTranNo(vnp_BankTranNo)
        setvnp_CardType(vnp_CardType)
        setvnp_OrderInfo(vnp_OrderInfo)
        setvnp_PayDate(vnp_PayDate)
        setvnp_ResponseCode(vnp_ResponseCode)
        setvnp_TransactionNo(vnp_TransactionNo)
        setvnp_TxnRef(vnp_TxnRef)

        if (vnp_ResponseCode === "00") {
            addOrder(makeOrder())
                .then((res) => {
                    toast.success("Đặt hàng thành công");
                    props.history.push("/dasboard-my-payment");
                    handleCompleteCart();
                })
        } else {
            toast.error("Đặt hàng không thành công, mời đặt hàng lại");
            props.history.push("/order")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className="u-s-p-b-60">
                {/*====== Section Intro ======*/}
                <div className="section__intro u-s-m-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1 className="section__heading u-c-secondary">
                                        Kết quả thanh toán
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section style={{ paddingTop: '20px', paddingBottom: '30px' }} className="section">
                <div className="container">
                    <div className="row row--center">
                        <div className="col-lg-12 col-md-12 u-s-m-b-30">
                            <div className="l-f-o">
                                <div className="l-f-o__pad-box">
                                    <h3>Mã đơn hàng: {vnp_TxnRef}</h3>
                                    <h3>Số tiền: {vnp_Amount / 100}</h3>
                                    <h3>Nội dung thanh toán: {vnp_OrderInfo}</h3>
                                    <h3>Mã phản hồi: {vnp_ResponseCode}</h3>
                                    <h3>Mã giao dịch tại VNPAY: {vnp_TransactionNo}</h3>
                                    <h3>Mã giao dịch tại ngân hàng: {vnp_BankTranNo}</h3>
                                    <h3>Mã ngân hàng: {vnp_BankCode}</h3>
                                    <h3>Loại thẻ: {vnp_CardType}</h3>
                                    <h3>Thời gian thanh toán: {vnp_PayDate}</h3>
                                    <h3>Kết quả: {vnp_ResponseCode === "00" ? "Thanh toán thành công" : "Thanh toán không thành công"}</h3>
                                    <a className="btn btn-default" href="/dasboard-my-order">Xem lịch sử đặt hàng</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ResultPayment;