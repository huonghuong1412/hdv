import React, { useEffect, useState } from 'react';
import { getAllColor, deleteColor, addColor, updateColor, checkCode } from '../../../actions/ColorService';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@material-ui/core';
import { toast } from 'react-toastify'
import _ from 'lodash'
import "react-toastify/dist/ReactToastify.css";

toast.configure({
    autoClose: 2000,
    draggable: false,
    limit: 3,
});
function Colors(props) {

    const [open, setOpen] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [id, setId] = useState("");
    const [colors, setColors] = useState([]);
    const [item, setItem] = useState({});
    const [name, setName] = useState("");

    const handleClickOpen = id => () => {
        setOpen(true);
        setId(id);
    };

    const handleShowForm = (item) => {
        setOpenForm(true);
        if (item !== null) {
            setItem(item);
            setName(item.name);
            setId(item.id)
        }
    }

    const handleClose = () => {
        setOpen(false);
        setItem(null);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
        setItem(null);
        setName(null);
    }
    const handleClear = () => {
        setName("");
        setId("");
    }

    const getListColor = () => {
        getAllColor()
            .then((res) => {
                setColors(res.data);
            })
            .catch(err => console.log(err))
    }

    const saveOrUpdate = () => {
        let author = {
            name: name
        }
        checkCode(id, name)
            .then((res) => {
                if (res.data) {
                    toast.error("Tên Màu đã có tồn tại")
                } else {
                    if (id) {
                        updateColor({
                            ...author,
                            id
                        })
                            .then(() => {
                                toast.success("Sửa Màu sắc thành công");
                                handleCloseForm();
                                handleClear();
                                getListColor();
                            })
                    } else {
                        addColor(author)
                            .then(() => {
                                toast.success("Thêm Màu sắc thành công");
                                handleCloseForm();
                                handleClear();
                                getListColor();
                            })
                    }

                }
            })

    }

    const handleDeleteCategory = (id) => {
        deleteColor(id)
            .then(() => {
                toast.success(" Xoá Màu sắc thành công")
                getListColor();
            })
            .catch(err => {
                toast.error("Xoá Màu sắc không thành công");
                console.log(err);
            })

        handleClose();
    }

    useEffect(() => {
        getListColor();
    }, [])

    return (
        <>
            <div className="u-s-p-b-60">
                {/*====== Section Intro ======*/}
                <div className="section__intro u-s-m-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1 className="section__heading u-c-secondary">
                                        Danh sách Màu sắc
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
                                    <Grid className="" container spacing={2}>
                                        <Grid item sm={8} xs={8}>
                                            <Button
                                                variant="outlined" color="secondary"
                                                style={{ margin: '10px 0' }}
                                                className="btn btn--e-transparent-brand-b-2"
                                                onClick={handleShowForm}
                                            >Thêm màu sắc</Button>
                                        </Grid>
                                    </Grid>
                                    <table className="table table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tên</th>
                                                <th scope="col">#</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                colors.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{item.name}</td>
                                                            <td>
                                                                <Button
                                                                    variant="outlined" color="primary"
                                                                    style={{ margin: '0 5px' }}
                                                                    onClick={() => handleShowForm(item)}
                                                                >Sửa</Button>
                                                                <Button
                                                                    variant="outlined"
                                                                    style={{ margin: '0 5px' }}
                                                                    onClick={handleClickOpen(item.id)}
                                                                >Xoá</Button>

                                                                <Dialog
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    aria-labelledby="alert-dialog-title"
                                                                    aria-describedby="alert-dialog-description"
                                                                >
                                                                    <DialogTitle id="alert-dialog-title">
                                                                        Chắc chắn xoá màu này? + {id}
                                                                    </DialogTitle>
                                                                    <DialogActions>
                                                                        <Button onClick={handleClose} color="primary">
                                                                            Huỷ
                                                                    </Button>
                                                                        <Button onClick={() => handleDeleteCategory(id)} color="primary" autoFocus>
                                                                            Xác nhận
                                                                    </Button>
                                                                    </DialogActions>
                                                                </Dialog>
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
            {/* <PublisherDialog open={openForm} handleClose={handleCloseForm} item={item}/> */}
            <Dialog open={openForm} onClose={handleCloseForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    {
                        _.isEmpty(item) === false ? "Thêm nhà xuất bản" : "Sửa nhà xuất bản"
                    }
                </DialogTitle>
                <DialogContent style={{ width: '500px' }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        label="Họ tên"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseForm} color="primary">
                        Huỷ
                        </Button>
                    <Button onClick={saveOrUpdate} color="primary">
                        Xác nhận
                        </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Colors;