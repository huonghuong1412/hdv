import React, { useEffect, useState } from 'react';
import { getAllAuthor, deleteAuthor, addAuthor, checkCode, updateAuthor } from '../../../actions/AuthorService';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@material-ui/core';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

toast.configure({
    autoClose: 2000,
    draggable: false,
    limit: 3,
});
function Authors(props) {

    const [open, setOpen] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [id, setId] = useState("");
    const [authors, setAuthors] = useState([]);
    const [item, setItem] = useState({});
    const [name, setName] = useState("");

    const handleClickOpen = id => () => {
        setOpen(true);
        setId(id);
    };

    const handleShowForm = (item) => {
        console.log(item);
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

    const getListAuthor = () => {
        getAllAuthor()
            .then((res) => {
                setAuthors(res.data);
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
                    toast.error("Tên tác giả đã có tồn tại")
                } else {
                    if (id) {
                        updateAuthor({
                            ...author,
                            id
                        })
                            .then(() => {
                                toast.success("Sửa tác giả thành công");
                                handleCloseForm();
                                handleClear();
                                getListAuthor();
                            })
                    } else {
                        addAuthor(author)
                            .then(() => {
                                toast.success("Thêm tác giả thành công");
                                handleCloseForm();
                                handleClear();
                                getListAuthor();
                            })
                    }

                }
            })
    }

    const handleDeleteCategory = (id) => {
        console.log(id);
        deleteAuthor(id)
            .then(() => {
                toast.success(" Xoá tác giả thành công")
                getListAuthor();
            })
            .catch(err => {
                toast.error("Xoá tác giả không thành công");
                console.log(err);
            })

        handleClose();
    }

    useEffect(() => {
        getListAuthor();
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
                                        Danh sách tác giả
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
                                                onClick={() => handleShowForm(null)}
                                            >Thêm tác giả</Button>
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
                                                authors.map((author, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{author.name}</td>
                                                            <td>
                                                                <Button
                                                                    variant="outlined" color="primary"
                                                                    style={{ margin: '0 5px' }}
                                                                    onClick={() => handleShowForm(author)}
                                                                >Sửa</Button>
                                                                <Button
                                                                    variant="outlined"
                                                                    style={{ margin: '0 5px' }}
                                                                    onClick={handleClickOpen(author.id)}
                                                                >Xoá</Button>

                                                                <Dialog
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    aria-labelledby="alert-dialog-title"
                                                                    aria-describedby="alert-dialog-description"
                                                                >
                                                                    <DialogTitle id="alert-dialog-title">
                                                                        Chắc chắn xoá danh mục này? + {id}
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
            <>
                <Dialog open={openForm} onClose={handleCloseForm} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Tác giả</DialogTitle>
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
            {/* <AuthorDialog open={openForm} handleClose={handleCloseForm} item={item} /> */}
        </>
    )
}

export default Authors;