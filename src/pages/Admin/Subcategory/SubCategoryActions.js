import React from 'react'
import { addSubCategory, checkSubCode, getCategory } from '../../../actions/CategoryActions'
import { Button, Grid, TextField } from '@material-ui/core';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Autocomplete } from '@material-ui/lab';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
toast.configure({
    autoClose: 2000,
    draggable: false,
    limit: 3,
});


class SubCategoryActions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            code: "",
            categoryCode: "",
            listCategory: [],
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        getCategory()
            .then((res) => {
                this.setState({
                    listCategory: res.data
                })
            })
            .catch(err => console.log(err))
    }


    clearData = () => {
        this.setState({
            name: "",
            code: "",
            categoryCode: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        let { id, code } = this.state;
        let category = {
            name: this.state.name,
            code: this.state.code,
            categoryCode: this.state.categoryCode
        }

        checkSubCode(id, code)
            .then(res => {
                if (res.data === false) {
                    addSubCategory(category)
                        .then(() => {
                            toast.success("Thêm danh mục sản phẩm thành công")
                            this.props.history.push("/admin/subcategory")
                        })
                    this.clearData();
                } else {
                    toast.error("Code đã được sử dụng")
                }
            })
    }

    render() {
        let {
            name,
            code
        } = this.state;

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
                                            <h1 className="gl-h1" style={{ textAlign: 'center' }}>THÊM DANH MỤC SẢN PHẨM</h1>
                                            <ValidatorForm onSubmit={this.handleSubmit}>
                                                <Grid className="" container spacing={2}>
                                                    <Grid item sm={12} xs={12}>
                                                        <TextValidator
                                                            className="input-text"
                                                            style={{ margin: '5px 0' }}
                                                            type="text"
                                                            value={name}
                                                            name="name"
                                                            onChange={this.handleChange}
                                                            label={
                                                                <span>
                                                                    <span style={{ color: "red" }}>*</span>
                                                            Tên danh mục
                                                        </span>
                                                            }
                                                            validators={["required"]}
                                                            errorMessages={["Trường này không được để trống"]}
                                                        />
                                                    </Grid>
                                                    <Grid item sm={12} xs={12}>
                                                        <TextValidator
                                                            className="input-text"
                                                            style={{ margin: '5px 0' }}
                                                            type="text"
                                                            value={code}
                                                            name="code"
                                                            onChange={this.handleChange}
                                                            label={
                                                                <span>
                                                                    <span style={{ color: "red" }}>*</span>
                                                            Mã danh mục
                                                        </span>
                                                            }
                                                            validators={["required"]}
                                                            errorMessages={["Trường này không được để trống"]}
                                                        />
                                                    </Grid>
                                                    <Grid item sm={12} xs={12}>
                                                        <Autocomplete
                                                            id="combo-box-demo"
                                                            className="input-text"
                                                            style={{ padding: 0, margin: '5px 0' }}
                                                            options={this.state.listCategory ? this.state.listCategory : [""]}
                                                            getOptionLabel={(option) => option.name}
                                                            onChange={(event, value) => {
                                                                this.setState({
                                                                    categoryCode: value.code
                                                                })
                                                            }}
                                                            renderInput={(params) => <TextField {...params} required={true} name="categoryCode" label="Danh mục" variant="outlined" />}
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
}

export default (SubCategoryActions);