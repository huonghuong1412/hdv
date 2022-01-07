import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { getAllOrder, confirmOrder } from '../../../actions/OrderService'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ManageOrder(props) {

    const [listOrder, setListOrder] = useState([])
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
        getAllOrder()
            .then((res) => {
                setListOrder(res.data)
            })
            .catch(err => console.log(err))
    }

    const handleConfirmOrder = (order) => {
        confirmOrder(order)
            .then(() => {
                toast.success("Xác nhận đơn hàng thành công.")
                getListOrderByUser();
            })
            .catch(err => {
                toast.error("Xác nhận đơn hàng không thành công. Vui lòng xác nhận lại")
            })
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
                                        Danh sách đơn đặt hàng
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
                                                <th scope="col">Khách hàng</th>
                                                <th scope="col">Thông tin</th>
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
                                                            <td>{item.user.lastName + " " + item.user.firstName}</td>
                                                            <td>{item.user.ward + ", " + item.user.district + ", " + item.user.city}</td>
                                                            <td>{item.create_time.toString().substring(0, 10)}</td>
                                                            <td>{item.total_price}</td>
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
                                                                <Button
                                                                    variant="outlined" color="secondary"
                                                                    style={{ margin: '0 5px' }}
                                                                    onClick={() => handleConfirmOrder(item)}
                                                                >Xác nhận</Button>
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
                                    <div style={{ borderBottom: '1px solid #888' }}>
                                        <DialogContentText>Tên sản phẩm: {detail.product_name}</DialogContentText>
                                        <DialogContentText>Mô tả: {detail.decription}</DialogContentText>
                                        <DialogContentText>Danh mục: {detail.category} - {detail.sub_category}</DialogContentText>
                                        <DialogContentText>Giá tiền: {detail.price}</DialogContentText>
                                        <DialogContentText>Số lượng: {detail.amount}</DialogContentText>
                                        <DialogContentText>Tổng: {detail.total_price}</DialogContentText>
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


export default ManageOrder;