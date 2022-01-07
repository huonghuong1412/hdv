import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSubCategory, getAllSubCategory } from '../../../actions/CategoryActions';
import { Button, Dialog, DialogActions, DialogTitle, Grid } from '@material-ui/core';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import SubCategoryDialog from './SubCategoryDialog';

toast.configure({
    autoClose: 2000,
    draggable: false,
    limit: 3,
});
function Subcategories(props) {

    const dispatch = useDispatch();
    const subcategories = useSelector(state => state.category.subcategory);


    const getListCategory = () => {
        dispatch(getAllSubCategory());
    }

    const [open, setOpen] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [id, setId] = useState(null);
    const [item, setItem] = useState({});

    const handleClickOpen = id => () => {
        setOpen(true);
        setId(id);
    };

    const handleShowForm = (item) => {
        setOpenForm(true);
        if (item !== null) {
            setItem(item);
        }
    }

    const handleCloseForm = () => {
        setOpenForm(false);
        setItem(null);
        getListCategory();
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteCategory = (id) => {
        deleteSubCategory(id)
            .then(() => {
                toast.success(" Xoá danh mục sản phẩm thành công")
                getListCategory();
            })
            .catch(err => {
                toast.error("Xoá danh mục không thành công");
                console.log(err);
            })

        handleClose();
    }

    useEffect(() => {
        getListCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

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
                                        Danh mục sản phẩm
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
                                                href="/admin/subcategory/add"
                                            >Thêm danh mục</Button>
                                        </Grid>
                                    </Grid>
                                    <table className="table table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">STT</th>
                                                <th scope="col">Tên</th>
                                                <th scope="col">Mã</th>
                                                <th scope="col">Danh mục cha</th>
                                                <th scope="col">#</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                subcategories.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{item.name}</td>
                                                            <td>{item.code}</td>
                                                            <td>{item.categoryCode}</td>
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
            <SubCategoryDialog open={openForm} handleClose={handleCloseForm} item={item} />
        </>
    )
}

export default Subcategories;