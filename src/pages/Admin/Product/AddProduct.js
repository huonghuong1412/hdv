import React from 'react'
import { connect } from 'react-redux';
import { addProduct } from '../../../actions/ProductActions'
import { getCategory, getSubCategory } from '../../../actions/CategoryActions'
import { getAllAuthor } from '../../../actions/AuthorService'
import { getAllPublisher } from '../../../actions/PublisherService'
import { getAllBrand } from '../../../actions/BrandService.'
// import { uploadImage } from '../../../actions/UploadImageService'
import { Autocomplete } from '@material-ui/lab'
import { Button, Fab, Grid, TextField } from '@material-ui/core';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {storage} from '../../../helpers/firebase'

class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            type: 1,
            description: "",
            price: "",
            categoryCode: {},
            subcategoryCode: {},
            category: "",
            subcategory: "",
            publishingYear: "",
            numberOfPages: "",
            authors: [],
            publisher: {},
            images: [],
            imageUrls: [],
            imagePreviews: [],
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
    }

    getData = () => {
        getCategory()
            .then((res) => {
                this.setState({
                    listCategory: res.data
                })
            })
            .catch(err => console.log(err))
        getSubCategory()
            .then((res) => {
                this.setState({
                    listSubCategory: res.data
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
            imageUrls: [],
            imagePreviews: [],
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

    handleChangeFile = (e) => {
        const filesList = e.target.files;
        if (filesList.length === 0)
            return;
        let arr = [...this.state.imagePreviews];
        for (let i = 0; i < filesList.length; i++) {
            const file = filesList[i];
            const reader = new FileReader();
            reader.onload = (upload) => {
                if (reader.readyState === 2) {
                    arr.push(upload.target.result);
                    this.setState({
                        ...this.state.imagePreviews,
                        imagePreviews: arr,
                        images: [...this.state.images, file],
                        // imageUrls: [...this.state.imageUrls, file.name]
                        // imageUrls: file.name
                    })
                }
            };
            reader.readAsDataURL(file);
        }
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
        let { name, description, price, publishingYear, numberOfPages, categoryCode, subcategoryCode, publisher, imageUrls,
            screen, hedieuhanh, cpu, ram, dungLuongPin, brand, kieudang
        } = this.state;
        let product = {
            name: name,
            type: type,
            description: description,
            price: price,
            categoryCode: categoryCode,
            subcategoryCode: subcategoryCode,
            publishingYear: publishingYear,
            numberOfPages: numberOfPages,
            authors: this.state.authors.map((item) => {
                return item
            }),
            publisher: publisher,
            images: imageUrls,
            screen: screen,
            hedieuhanh: hedieuhanh,
            cpu: cpu,
            ram: ram,
            dungLuongPin: dungLuongPin,
            brand: brand,
            kieudang: kieudang
        }
        this.props.addProduct(product);
        // for (let i = 0; i < this.state.images.length; i++) {
        //     uploadImage(this.state.imageUrls[i])
        //         .then((res) => {

        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         })
        // }
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
        this.clearData();
    }

    handleUploadImage = (e) => {
        e.preventDefault();
        const { images } = this.state;
        for (let i = 0; i < images.length; i++) {
            const ranDomNumber = Math.floor(100000000 + Math.random() * 900000000);
            const uploadTask = storage.ref(`images/${ranDomNumber + images[i].name}`).put(images[i]);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage.ref("images")
                        .child(ranDomNumber + images[i].name)
                        .getDownloadURL()
                        .then(url => {
                            this.setState({
                                imageUrls: [...this.state.imageUrls, url]
                            }, () => {
                                alert("Lưu hình ảnh thành công!");
                                this.handleSubmit(e);
                            })
                        })
                }
            )
        }
    }


    render() {
        let {
            name,
            description,
            price,
            publishingYear,
            numberOfPages,
            authors,
            images,
            listCategory,
            listSubCategory,
            categoryCode,
            subcategoryCode,
            listPublisher,
            screen,
            hedieuhanh,
            cpu,
            ram,
            dungLuongPin,
            kieudang
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
                                            <h1 className="gl-h1" style={{ textAlign: 'center' }}>THÊM SẢN PHẨM</h1>
                                            <ValidatorForm onSubmit={this.handleUploadImage}>
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
                                                                        options={listPublisher}
                                                                        getOptionLabel={(option) => option.name}

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
                                                                        getOptionLabel={(option) => option.name}
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
                                                                        onChange={(event, value) => {
                                                                            this.setState({
                                                                                brand: value
                                                                            })
                                                                        }}
                                                                        renderInput={(params) => <TextField {...params} required={true} name="brand" label="Thương hiệu" variant="outlined" />}
                                                                    />
                                                                </Grid>
                                                            </>
                                                            : ""
                                                    }

                                                    <Grid item sm={12} xs={12} style={{ marginTop: '20px' }}>
                                                        <label htmlFor="upload-photo">
                                                            <input style={{ display: 'none' }}
                                                                id="upload-photo"
                                                                name="images"
                                                                // multiple
                                                                onChange={this.handleChangeFile}
                                                                type="file" />
                                                            <Fab color="secondary"
                                                                size="medium"
                                                                component="span"
                                                                aria-label="add"
                                                                variant="extended" >
                                                                Chọn hình ảnh
                                                        </Fab>
                                                        </label>
                                                    </Grid>
                                                    <Grid item sm={12} xs={12} container direction="row" alignItems="center">
                                                        {
                                                            this.state.imagePreviews && this.state.imagePreviews.map((item, index) => {
                                                                return <div key={index} style={{ padding: '0 10px' }} onClick={() => {
                                                                    var index = this.state.imagePreviews.indexOf(item);
                                                                    if (index > -1) {
                                                                        this.state.imagePreviews.splice(index, 1);
                                                                        this.state.images.splice(index, 1);
                                                                    }
                                                                    this.setState({
                                                                        ...this.state.imagePreviews,
                                                                        ...images
                                                                    })
                                                                }}>
                                                                    <img
                                                                        src={item}
                                                                        alt=""
                                                                        width="150px"
                                                                        height="150px"
                                                                        style={{ objectFit: 'cover' }}
                                                                    ></img>
                                                                </div>
                                                            })
                                                        }
                                                    </Grid>
                                                    {/* <Grid item sm={12} xs={12}>
                                                        <Button
                                                            variant="outlined" color="secondary"
                                                            style={{ margin: '10px 0' }}
                                                            className="btn btn--e-transparent-brand-b-2"
                                                            type="submit"
                                                            onClick={this.handleUploadImage}
                                                        >Lưu hình ảnh</Button>
                                                    </Grid> */}

                                                    <Grid item sm={6} xs={6}>
                                                        <Button
                                                            variant="outlined" color="secondary"
                                                            style={{ margin: '10px 0' }}
                                                            className="btn btn--e-transparent-brand-b-2"
                                                            type="submit"
                                                            onClick={this.handleUploadImage}
                                                        >Thêm sản phẩm</Button>
                                                    </Grid>
                                                    <Grid item sm={6} xs={6}>
                                                        <Button
                                                            variant="outlined" color="secondary"
                                                            style={{ margin: '10px 0' }}
                                                            className="btn btn--e-transparent-brand-b-2"
                                                            type="link"
                                                            href="/admin/products/sach"
                                                            onClick={this.handleUploadImage}
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
    { addProduct }
)(AddProduct);