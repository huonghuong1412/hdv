import React, { useEffect, useState } from 'react';
import Pagination from '../../../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { searchByPage, deleteProduct } from '../../../actions/ProductActions';
import { Button, Dialog, DialogActions, DialogTitle, Grid } from '@material-ui/core';
// import { IMAGE_FOLDER } from '../../../constants'
function Products(props) {

    const dispatch = useDispatch();
    const { match } = props;
    const products = useSelector(state => state.product.listProduct);
    const totalProducts = useSelector(state => state.product.totalProducts);

    const [page, setPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] = useState(12);
    const [keyword, setKeyword] = useState('');


    const getAllProduct = () => {
        var searchObject = {};
        searchObject.keyword = keyword !== "" ? keyword : "";
        searchObject.page = (page);
        searchObject.limit = rowsPerPage;
        const category = match.params.category ? match.params.category : '';
        const subcategory = match.params.subcategory ? match.params.subcategory : '';
        dispatch(searchByPage(searchObject, category, subcategory))
    }

    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);

    const handleClickOpen = id => () => {
        setOpen(true);
        setId(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
        // window.location.reload();
        getAllProduct();
        handleClose();
    }

    useEffect(() => {
        getAllProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, page])

    const setNewPage = (page) => {
        setPage(page);
        getAllProduct();
    }

    const handleChangePage = (newPage) => {
        setNewPage(newPage);
    }

    return (
        products.length >= 0 ? (
            <>
                <div className="u-s-p-b-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary">
                                            Danh sách sản phẩm
                                    </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section style={{ paddingTop: '20px', paddingBottom: '30px' }} className="section">
                    <div className="container" style={{ width: '1200px' }}>
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
                                                    href="/admin/products/add"
                                                >Thêm sản phẩm</Button>
                                            </Grid>
                                        </Grid>
                                        <table className="table table-dark">
                                            <thead>
                                                <tr>
                                                    <th scope="col">STT</th>
                                                    <th scope="col">Hình Ảnh</th>
                                                    <th scope="col">Tên</th>
                                                    <th scope="col">Mô tả</th>
                                                    <th scope="col">Giá</th>
                                                    <th scope="col">Danh mục</th>
                                                    <th scope="col">#</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    products.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>
                                                                    {/* <img src={IMAGE_FOLDER + item.images[0]} alt="" style={{ width: '100px', height: '100px', objectFit: 'cover' }} /> */}
                                                                    <img src={item.images[0]} alt="" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                                                </td>
                                                                <td>{item.name}</td>
                                                                <td style={{
                                                                    width: '250px',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',
                                                                    display: '-webkit-box',
                                                                    '-webkit-line-clamp': '2',
                                                                    '-webkit-box-orient': 'vertical',
                                                                    }}>{item.description}</td>
                                                                <td>{item.price}</td>
                                                                <td>{item.categoryCode.code}</td>
                                                                <td>
                                                                    <Button
                                                                        variant="outlined" color="primary"
                                                                        style={{ margin: '0 5px' }}
                                                                        href={`/admin/products/${item.id}/update`}
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
                                                                        Chắc chắn xoá sản phẩm này? + {id}
                                                                        </DialogTitle>
                                                                        <DialogActions>
                                                                            <Button onClick={handleClose} color="primary">
                                                                            Huỷ
                                                                    </Button>
                                                                            <Button onClick={() => handleDeleteProduct(id)} color="primary" autoFocus>
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
                        <ul className="filter-list layout-grid" style={{ listStyle: 'none' }}>
                            <Pagination page={page} limit={rowsPerPage} totalRows={totalProducts} onChangePage={handleChangePage} />
                        </ul>
                    </div>
                    </div>
            </section>
            </>
        ) : <h1>Loading....</h1>
    )
}

export default Products;