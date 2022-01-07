import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { getAllOrderByUser } from '../../actions/OrderService'
import { currency } from '../../helpers/formatCurrency'

function OrderUser(props) {

    const [listOrder, setListOrder] = useState([])
    const username = localStorage.getItem("username");
    const [openForm, setOpenForm] = useState(false);
    const [id, setId] = useState("");
    const [item, setItem] = useState([]);

    const handleShowForm = (item) => {
        console.log(item);
        setOpenForm(true);
        if (item !== null) {
            setItem(item);
            setId(item.id)
        }
    }

    const handleCloseForm = () => {
        setOpenForm(false);
        setItem([]);
    }

    const getListOrderByUser = () => {
        getAllOrderByUser(username)
            .then((res) => {
                setListOrder(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getListOrderByUser();
    }, [])


    return (
        <div>
            <div className="u-s-p-b-60">
                <div className="section__intro u-s-m-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1 className="section__heading u-c-secondary">
                                        Lịch sử đặt hàng
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
                                    <table className="table table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Ngày đặt hàng</th>
                                                <th scope="col">Tổng tiền</th>
                                                <th scope="col">Tình trạng thanh toán</th>
                                                <th scope="col">Tình trạng đơn hàng</th>
                                                <th scope="col">#</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                listOrder.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{item.create_time.toString().substring(0, 10)}</td>
                                                            <td>{currency(item.total_price)}</td>
                                                            <td>Đã thanh toán</td>
                                                            <td>
                                                                { item.status === 0 ? "Đã huỷ đơn hàng" : "" }
                                                                { item.status === 1 ? "Chưa giao hàng" : "" }
                                                                { item.status === 2 ? "Đã giao hàng" : "" }
                                                            </td>
                                                            <td>
                                                                <Button
                                                                    variant="outlined" color="primary"
                                                                    style={{ margin: '0 5px' }}
                                                                    onClick={() => handleShowForm(item.orderDetailDtos)}
                                                                >Xem chi tiết</Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Dialog
                open={openForm}
                onClose={handleCloseForm}
                aria-labelledby="draggable-dialog-title"
                fullWidth
                style={{ fontSize: '16px' }}
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Thông tin chi tiết
                </DialogTitle>
                <DialogContent>

                    {
                        item.map((detail, index) => {
                            return (
                                <>
                                    <div style={{ borderBottom: '1px solid #888', padding: '10px 0' }} key={index}>
                                        <DialogContentText>Tên sản phẩm: {detail.product_name}</DialogContentText>
                                        <DialogContentText>Mô tả: {detail.decription}</DialogContentText>
                                        <DialogContentText>Danh mục: {detail.category} - {detail.sub_category}</DialogContentText>
                                        <DialogContentText>Giá tiền: {currency(detail.price)}</DialogContentText>
                                        <DialogContentText>Số lượng: {detail.amount}</DialogContentText>
                                        <DialogContentText>Tổng: {currency(detail.total_price)}</DialogContentText>
                                    </div>
                                </>
                            )
                        })
                    }

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseForm} color="primary">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


export default OrderUser;