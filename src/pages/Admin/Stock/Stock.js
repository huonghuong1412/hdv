import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../../actions/ProductActions'
import { importProduct } from '../../../actions/StockActions'
import { Button, Grid, TextField } from '@material-ui/core';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Autocomplete } from '@material-ui/lab';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
toast.configure({
    autoClose: 2000,
    draggable: false,
    limit: 3,
});


function Stock(props) {


    const [quantity, setQuantity] = useState(0);
    const [id, setId] = useState(0);

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.listProduct);
    const [keyword, setKeyword] = useState('');


    const getAllProduct = () => {
        var searchObject = {};
        searchObject.keyword = keyword !== "" ? keyword : "";
        searchObject.page = "";
        searchObject.limit = "";
        dispatch(getAllProducts(searchObject))
    }

    useEffect(() => {
        getAllProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = (e) => {
        let data = {
            quantity: quantity,
            productId: id
        }
        importProduct(data, id)
            .then(() => {
                toast.success("Thêm số lượng hàng thành công");
                props.history.push("/admin/products/sach")
            } )
            .catch(err => {
                toast.error("Thêm số lượng hàng không thành công")
            })
    }

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

                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="u-s-p-b-60">
                <div className="section__content">
                    <div className="container">
                        <div className="row row--center">
                            <div className="col-lg-9 col-md-9 u-s-m-b-30">
                                <div className="l-f-o">
                                    <div className="l-f-o__pad-box">
                                        <h1 className="gl-h1" style={{ textAlign: 'center' }}>THÊM SỐ LƯỢNG SẢN PHẨM</h1>
                                        <ValidatorForm onSubmit={handleSubmit}>
                                            <Grid className="" container spacing={2}>

                                                <Grid item sm={12} xs={12}>
                                                    <Autocomplete
                                                        id="combo-box-demo"
                                                        className="input-text"
                                                        style={{ padding: 0, margin: '5px 0', fontSize: '16px' }}
                                                        options={ products ? products : [""]}
                                                        getOptionLabel={(option) => option.name}
                                                        onChange={(event, value) => {
                                                            setId(value.id)
                                                        }}
                                                        renderInput={(params) => <TextField {...params} required={true} name="id" label="Chọn sản phẩm" variant="outlined" />}
                                                    />
                                                </Grid>
                                                <Grid item sm={12} xs={12}>
                                                    <TextValidator
                                                        className="input-text"
                                                        style={{ margin: '5px 0' }}
                                                        type="number"
                                                        value={quantity}
                                                        name="quantity"
                                                        onChange={(e) => setQuantity(e.target.value)}
                                                        label={
                                                            <span>
                                                                <span style={{ color: "red" }}>*</span>
                                                            Số lượng
                                                        </span>
                                                        }
                                                        validators={["required"]}
                                                        errorMessages={["Trường này không được để trống"]}
                                                    />
                                                </Grid>

                                                <Grid item sm={6} xs={6}>
                                                    <Button
                                                        variant="outlined" color="secondary"
                                                        style={{ margin: '10px 0' }}
                                                        className="btn btn--e-transparent-brand-b-2"
                                                        type="submit"
                                                    >Xác nhận</Button>
                                                </Grid>
                                                <Grid item sm={6} xs={6}>
                                                    <Button
                                                        variant="outlined" color="secondary"
                                                        style={{ margin: '10px 0' }}
                                                        className="btn btn--e-transparent-brand-b-2"
                                                        type="link"
                                                        href="/admin/category"
                                                    >Huỷ</Button>
                                                </Grid>

                                            </Grid>
                                        </ValidatorForm>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default (Stock);