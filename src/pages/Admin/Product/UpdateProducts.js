import React from 'react'
import { connect } from 'react-redux';
import { getProductById, updateProduct } from '../../../actions/ProductActions'
import { getCategory, getSubCategory } from '../../../actions/CategoryActions'
import { getAllAuthor } from '../../../actions/AuthorService'
import { getAllPublisher } from '../../../actions/PublisherService'
import { getAllBrand } from '../../../actions/BrandService.'
import { Autocomplete } from '@material-ui/lab'
import { Button, Grid, TextField } from '@material-ui/core';
// import { IMAGE_FOLDER } from '../../../constants'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
class UpdateProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            type: 1,
            description: "",
            price: "",
            categoryCode: {},
            subcategoryCode: {},
            publishingYear: "",
            numberOfPages: "",
            authors: [],
            publisher: {},
            images: [],
            listCategory: [],
            listSubCategory: [],
            listAuthor: [],
            listPublisher: [],
            listBrand: [],
            screen: "",
            hedieuhanh: "",
            cpu: "",
            ram: "",
            dungLuongPin: "",
            brand: {},
            kieudang: "",
        }
    }

    componentDidMount() {
        this.getData();
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getProductById(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("NextProps: ", nextProps.productDetail);
        if (nextProps && nextProps.productDetail) {
            this.setState({
                id: nextProps.productDetail.id,
                type: nextProps.productDetail.type,
                name: nextProps.productDetail.name,
                description: nextProps.productDetail.description,
                price: nextProps.productDetail.price,
                categoryCode: nextProps.productDetail.categoryCode,
                subcategoryCode: nextProps.productDetail.subcategoryCode,
                publishingYear: nextProps.productDetail.publishingYear,
                numberOfPages: nextProps.productDetail.numberOfPages,
                authors: nextProps.productDetail.authors,
                publisher: nextProps.productDetail.publisher,
                images: nextProps.productDetail.images,
                screen: nextProps.productDetail.screen,
                hedieuhanh: nextProps.productDetail.hedieuhanh,
                cpu: nextProps.productDetail.cpu,
                ram: nextProps.productDetail.ram,
                dungLuongPin: nextProps.productDetail.dungLuongPin,
                brand: nextProps.productDetail.brand,
                kieudang: nextProps.productDetail.kieudang
            })
        }
    }

    getData = () => {
        getCategory()
            .then((res) => {
                this.setState({
                    listCategory: res.data
                })
            })
            .catch(err => console.log(err))
        getAllAuthor()
            .then((res) => {
                this.setState({
                    listAuthor: res.data
                })
            })
            .catch(err => console.log(err))
        getAllPublisher()
            .then((res) => {
                this.setState({
                    listPublisher: res.data
                })
            })
            .catch(err => console.log(err))
        getAllBrand()
            .then((res) => {
                this.setState({
                    listBrand: res.data
                })
            })
            .catch(err => console.log(err))
    }

    clearData = () => {
        this.setState({
            name: "",
            type: 1,
            description: "",
            price: "",
            categoryCode: "",
            subcategoryCode: "",
            publishingYear: "",
            numberOfPages: "",
            authors: [],
            publisher: "",
            images: [],
            listCategory: [],
            listSubCategory: [],
            listAuthor: [],
            listPublisher: [],
            listBrand: [],
            screen: "",
            hedieuhanh: "",
            cpu: "",
            ram: "",
            dungLuongPin: "",
            brand: {}
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        let type = 0;
        switch (this.state.categoryCode.code) {
            case 'sach':
                type = 1;
                break;
            case 'quan-ao':
                type = 2;
                break;
            case 'do-dien-tu':
                type = 3;
                break;
            default:
                type = 1;
                break;
        }
        let { id, name, description, price, publishingYear, numberOfPages, authors, categoryCode, subcategoryCode, publisher, imageUrls,
            screen, hedieuhanh, cpu, ram, dungLuongPin, brand, kieudang, images
        } = this.state;
        let product = {
            id: id,
            name: name,
            type: type,
            description: description,
            price: price,
            categoryCode: categoryCode,
            subcategoryCode: subcategoryCode,
            publishingYear: publishingYear,
            numberOfPages: numberOfPages,
            authors: authors ? authors.map((item) => {
                return item
            }) : null,
            publisher: publisher,
            images: images,
            screen: screen,
            hedieuhanh: hedieuhanh,
            cpu: cpu,
            ram: ram,
            dungLuongPin: dungLuongPin,
            brand: brand,
            kieudang: kieudang
        }
        this.props.updateProduct(product);
        console.log(product);
        switch (type) {
            case 1:
                this.props.history.push("/admin/products/sach")
                break;
            case 2:
                this.props.history.push("/admin/products/quan-ao")
                break;
            case 3:
                this.props.history.push("/admin/products/do-dien-tu")
                break;
            default: break;
        }
    }

    render() {
        let {
            name,
            description,
            price,
            publishingYear,
            numberOfPages,
            publisher,
            authors,
            images,
            categoryCode,
            subcategoryCode,
            listSubCategory,
            listCategory,
            screen,
            hedieuhanh,
            cpu,
            ram,
            dungLuongPin,
            brand,
            kieudang,
            type
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
                                            <h1 className="gl-h1" style={{ textAlign: 'center' }}>CẬP NHẬT SẢN PHẨM</h1>
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
                                                            Tên sản phẩm
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
                                                            name="description"
                                                            value={description}
                                                            onChange={this.handleChange}
                                                            label={
                                                                <span>
                                                                    <span style={{ color: "red" }}>*</span>
                                                            Mô tả
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
                                                            type="number"
                                                            name="price"
                                                            value={price}
                                                            onChange={this.handleChange}
                                                            label={
                                                                <span>
                                                                    <span style={{ color: "red" }}>*</span>
                                                            Giá sản phẩm
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
                                                            options={listCategory ? listCategory : [""]}
                                                            getOptionLabel={(option) => option.name ? option.name : ""}
                                                            value={categoryCode ? categoryCode : {}}
                                                            
                                                            onChange={(event, value) => {
                                                                this.setState({
                                                                    categoryCode: value
                                                                })
                                                            }}
                                                            renderInput={(params) => <TextField {...params} required={true} name="categoryCode" label="Danh mục" variant="outlined" />}
                                                        />
                                                    </Grid>
                                                    <Grid item sm={12} xs={12}>
                                                        <Autocomplete
                                                            id="combo-box-demo"
                                                            className="input-text"
                                                            style={{ padding: 0, margin: '5px 0' }}
                                                            options={listSubCategory ? listSubCategory : [""]}
                                                            value={subcategoryCode ? subcategoryCode : {}}
                                                            
                                                            getOptionLabel={(option) => option.name ? option.name : ""}
                                                            onChange={(event, value) => {
                                                                this.setState({
                                                                    subcategoryCode: value
                                                                })
                                                            }}
                                                            renderInput={(params) => <TextField {...params} required={true} name="subcategoryCode" label="Danh mục con" variant="outlined" />}
                                                        />
                                                    </Grid>

                                                    {
                                                        categoryCode.code === "sach" ? (
                                                            <>
                                                                <Grid item sm={12} xs={12}>
                                                                    <Autocomplete
                                                                        id="combo-box-demo"
                                                                        className="input-text"
                                                                        style={{ padding: 0, margin: '5px 0' }}
                                                                        options={this.state.listPublisher}
                                                                        getOptionLabel={(option) => option.name + ""}
                                                                        value={publisher}
                                                                        
                                                                        onChange={(event, value) => {
                                                                            this.setState({
                                                                                publisher: value
                                                                            })
                                                                        }}
                                                                        renderInput={(params) => <TextField {...params} required={true} name="publisher" label="Nhà xuất bản" variant="outlined" />}
                                                                    />
                                                                </Grid>

                                                                <Grid item sm={12} xs={12}>
                                                                    <Autocomplete
                                                                        multiple
                                                                        id="combo-box-demo"
                                                                        className="input-text"
                                                                        style={{ padding: 0, margin: '5px 0' }}
                                                                        options={this.state.listAuthor}
                                                                        getOptionLabel={(option) => option.name + ""}
                                                                        
                                                                        value={
                                                                            authors ? authors : [""]
                                                                        }
                                                                        onChange={(event, value) => {
                                                                            this.setState({
                                                                                authors: value
                                                                            })
                                                                        }}
                                                                        renderInput={(params) => <TextField {...params} name="authors" label="Tác giả" variant="outlined" />}
                                                                    />
                                                                </Grid>

                                                                <Grid item sm={12} xs={12}>
                                                                    <TextValidator
                                                                        className="input-text"
                                                                        style={{ margin: '5px 0' }}
                                                                        type="number"
                                                                        name="publishingYear"
                                                                        value={publishingYear}
                                                                        onChange={this.handleChange}
                                                                        label={
                                                                            <span>
                                                                                <span style={{ color: "red" }}>*</span>
                                                                        Năm xuất bản
                                                                    </span>
                                                                        }
                                                                        validators={["required"]}
                                                                        errorMessages={["Trường này không được để trống"]}
                                                                    />
                                                                </Grid>
                                                                <Grid item sm={12} xs={12}>
                                                                    <TextValidator
                                                                        className="input-text"
                                                                        value={numberOfPages}
                                                                        style={{ margin: '5px 0' }}
                                                                        type="number"
                                                                        name="numberOfPages"
                                                                        onChange={this.handleChange}
                                                                        label={
                                                                            <span>
                                                                                <span style={{ color: "red" }}>*</span>
                                                                        Số trang
                                                                        </span>
                                                                        }
                                                                        validators={["required"]}
                                                                        errorMessages={["Trường này không được để trống"]}
                                                                    />
                                                                </Grid>
                                                            </>
                                                        ) : ""
                                                    }

                                                    {
                                                        categoryCode.code === "quan-ao" ?
                                                            <>
                                                                <Grid item sm={12} xs={12}>
                                                                    <TextValidator
                                                                        className="input-text"
                                                                        style={{ margin: '5px 0' }}
                                                                        type="text"
                                                                        name="kieudang"
                                                                        value={kieudang}
                                                                        onChange={this.handleChange}
                                                                        label={
                                                                            <span>
                                                                                <span style={{ color: "red" }}>*</span>
                                                                        Kiểu dáng
                                                                    </span>
                                                                        }
                                                                        validators={["required"]}
                                                                        errorMessages={["Trường này không được để trống"]}
                                                                    />
                                                                </Grid>
                                                            </>
                                                            : ""
                                                    }

                                                    {
                                                        categoryCode.code === "do-dien-tu" ?
                                                            <>
                                                                <Grid item sm={12} xs={12}>
                                                                    <TextValidator
                                                                        className="input-text"
                                                                        style={{ margin: '5px 0' }}
                                                                        type="text"
                                                                        value={screen}
                                                                        name="screen"
                                                                        onChange={this.handleChange}
                                                                        label={
                                                                            <span>
                                                                                <span style={{ color: "red" }}>*</span>
                                                                                Màn hình
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
                                                                        value={hedieuhanh}
                                                                        name="hedieuhanh"
                                                                        onChange={this.handleChange}
                                                                        label={
                                                                            <span>
                                                                                <span style={{ color: "red" }}>*</span>
                                                                                Hệ điều hành
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
                                                                        value={cpu}
                                                                        name="cpu"
                                                                        onChange={this.handleChange}
                                                                        label={
                                                                            <span>
                                                                                <span style={{ color: "red" }}>*</span>
                                                                                Thông số CPU
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
                                                                        value={ram}
                                                                        name="ram"
                                                                        onChange={this.handleChange}
                                                                        label={
                                                                            <span>
                                                                                <span style={{ color: "red" }}>*</span>
                                                                                Thông sô RAM
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
                                                                        value={dungLuongPin}
                                                                        name="dungLuongPin"
                                                                        onChange={this.handleChange}
                                                                        label={
                                                                            <span>
                                                                                <span style={{ color: "red" }}>*</span>
                                                                                Dung lượng PIN
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
                                                                        options={this.state.listBrand ? this.state.listBrand : [""]}
                                                                        getOptionLabel={(option) => option.name}
                                                                        value={brand}
                                                                        
                                                                        onChange={(event, value) => {
                                                                            this.setState({
                                                                                brand: value
                                                                            })
                                                                        }}
                                                                        renderInput={(params) => <TextField {...params}  required={true} name="brand" label="Thương hiệu" variant="outlined" />}
                                                                    />
                                                                </Grid>
                                                            </>
                                                            : ""
                                                    }
                                                    <Grid item sm={12} xs={12} container direction="row" alignItems="center">
                                                        {
                                                            images && images.map((item, index) => {
                                                                return (
                                                                    <img
                                                                        key={index}
                                                                        // src={IMAGE_FOLDER + item}
                                                                        src={item}
                                                                        alt=""
                                                                        width="150px"
                                                                        height="150px"
                                                                        style={{ objectFit: 'cover', marginLeft: '10px' }}
                                                                    ></img>
                                                                )
                                                            })
                                                        }
                                                    </Grid>
                                                    <Grid item sm={6} xs={6}>
                                                        <Button
                                                            variant="outlined" color="secondary"
                                                            style={{ margin: '10px 0' }}
                                                            className="btn btn--e-transparent-brand-b-2"
                                                            // href={type === 1 ? "/admin/products/sach" : type === 2 ? "/admin/products/quan-ao" : type===3 ? "/admin/products/sach" : "/admin/products/sach"}
                                                            onClick={this.handleSubmit}
                                                        >Cập nhật sản phẩm</Button>
                                                    </Grid>
                                                    <Grid item sm={6} xs={6}>
                                                        <Button
                                                            variant="outlined" color="secondary"
                                                            style={{ margin: '10px 0' }}
                                                            className="btn btn--e-transparent-brand-b-2"
                                                            type="link"
                                                            href="/admin/products/sach"
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
                    {/*====== End - Section Content ======*/}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productDetail: state.product.productDetail
    }
}

export default connect(mapStateToProps,
    { updateProduct, getProductById }
)(UpdateProduct);