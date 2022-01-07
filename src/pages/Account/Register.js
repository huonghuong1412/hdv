import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/UserActions'
import { Autocomplete } from '@material-ui/lab'
import {
    getAllCity,
    getAllDistrictByCityId,
    getAllWardByDistrictId
} from '../../actions/AddressAPIService'
import { Button, Grid, TextField } from '@material-ui/core';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phone: "",
            city: "",
            district: "",
            ward: "",
            listCity: [],
            listDistrict: [],
            listWard: [],
            cityId: null,
            districtId: null
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        getAllCity()
            .then((res) => {
                this.setState({
                    listCity: res.data
                })
            })
            .catch(err => console.log(err))
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            city: this.state.city,
            district: this.state.district,
            ward: this.state.ward
        }
        this.props.register(user, this.props.history);
    }

    render() {

        let { firstName, lastName, username, email, phone, password } = this.state;

        return (
            <>

                <section className="section-banner">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li className="has-separator"><Link to="/" style={{ color: '#e32a53', textTransform: 'uppercase' }}>Home</Link></li>
                            <li className="has-separator"><Link to={`/register`} style={{ color: '#e32a53', textTransform: 'uppercase' }}><i className="fas fa-angle-right" style={{ padding: '0 5px' }}></i>Đăng ký</Link></li>
                        </ul>
                    </div>
                </section>

                <div className="u-s-p-b-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary">
                                            Đăng ký tài khoản
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row row--center">
                                <div className="col-lg-6 col-md-8 u-s-m-b-30">
                                    <div className="l-f-o">
                                        <div className="l-f-o__pad-box">
                                            <form className="l-f-o__form">
                                                <div className="gl-s-api">
                                                    <div className="u-s-m-b-15">
                                                        <a className="gl-s-api__btn gl-s-api__btn--gplus" href="https://accounts.google.com/o/oauth2/auth?scope=email&redirect_uri=http://localhost:8080/login-google&response_type=code&client_id=80724656105-fg2ndheoujm7c7dd4ob1i9mq3ebdbjhb.apps.googleusercontent.com&approval_prompt=force"><i className="fab fa-google" />
                                                            <span>Signin with Google</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                            <ValidatorForm onSubmit={this.handleSubmit}>
                                                <Grid className="" container spacing={2}>
                                                    <Grid item sm={12} xs={12}>
                                                        <TextValidator
                                                            className="input-text"
                                                            style={{ margin: '5px 0' }}
                                                            type="text"
                                                            value={firstName}
                                                            name="firstName"
                                                            onChange={this.handleChange}
                                                            label={
                                                                <span>
                                                                    <span style={{ color: "red" }}>*</span>
                                                            Tên
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
                                                            name="lastName"
                                                            value={lastName}
                                                            onChange={this.handleChange}
                                                            label={
                                                                <span>
                                                                    <span style={{ color: "red" }}>*</span>
                                                            Họ
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
                                                            name="phone"
                                                            value={phone}
                                                            onChange={this.handleChange}
                                                            label={
                                                                <span>
                                                                    <span style={{ color: "red" }}>*</span>
                                                            Số điện thoại
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
                                                            name="email"
                                                            value={email}
                                                            onChange={this.handleChange}
                                                            label={
                                                                <span>
                                                                    <span style={{ color: "red" }}>*</span>
                                                            Email
                                                        </span>
                                                            }
                                                            validators={["required"]}
                                                            errorMessages={["Trường này không được để trống"]}
                                                        />
                                                    </Grid>
                                                    <Grid item sm={12} xs={12}>
                                                        <TextValidator
                                                            className="input-text"
                                                            value={username}
                                                            style={{ margin: '5px 0' }}
                                                            type="text"
                                                            name="username"
                                                            onChange={this.handleChange}
                                                            label={
                                                                <span>
                                                                    <span style={{ color: "red" }}>*</span>
                                                           Tên tài khoản
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
                                                            type="password"
                                                            name="password"
                                                            value={password}
                                                            onChange={this.handleChange}
                                                            label={
                                                                <span>
                                                                    <span style={{ color: "red" }}>*</span>
                                                          Mật khẩu
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
                                                            options={this.state.listCity}
                                                            getOptionLabel={(option) => option.name}
                                                            onChange={(event, value) => {
                                                                this.setState({
                                                                    city: value.name,
                                                                    cityId: value.provinceid
                                                                }, () => getAllDistrictByCityId(this.state.cityId)
                                                                    .then((res) => {
                                                                        this.setState({
                                                                            listDistrict: res.data
                                                                        })
                                                                    }))
                                                            }}
                                                            renderInput={(params) => <TextField {...params} required={true} name="city" label="Thành phố" variant="outlined" />}
                                                        />
                                                    </Grid>
                                                    <Grid item sm={12} xs={12}>
                                                        <Autocomplete
                                                            id="combo-box-demo"
                                                            className="input-text"
                                                            style={{ padding: 0, margin: '5px 0' }}
                                                            options={this.state.listDistrict}
                                                            getOptionLabel={(option) => option.name}
                                                            onChange={(event, value) => {
                                                                this.setState({
                                                                    district: value.name,
                                                                    districtId: value.districtid
                                                                }, () => getAllWardByDistrictId(this.state.districtId)
                                                                    .then((res) => {
                                                                        this.setState({
                                                                            listWard: res.data
                                                                        })
                                                                    })
                                                                )
                                                            }}
                                                            renderInput={(params) => <TextField {...params} required={true} name="district" label="Quận/Huyện" variant="outlined" />}
                                                        />
                                                    </Grid>
                                                    <Grid item sm={12} xs={12}>
                                                        <Autocomplete
                                                            id="combo-box-demo"
                                                            className="input-text"
                                                            style={{ padding: 0, margin: '5px 0' }}
                                                            options={this.state.listWard}
                                                            getOptionLabel={(option) => option.name}
                                                            onChange={(event, value) => {
                                                                this.setState({
                                                                    ward: value.name
                                                                })
                                                            }}
                                                            renderInput={(params) => <TextField {...params} required={true} name="ward" label="Xã/Phường/Thị trấn" variant="outlined" />}
                                                        />
                                                    </Grid>
                                                    <Grid item sm={12} xs={12}>
                                                        <Button
                                                            variant="outlined" color="secondary"
                                                            style={{ margin: '10px 0' }}
                                                            className="btn btn--e-transparent-brand-b-2"
                                                            type="submit"
                                                        >Đăng ký</Button>
                                                    </Grid>

                                                    <Grid item sm={12} xs={12}>
                                                        <p className="gl-link">
                                                            {this.props.error ? this.props.error.message : ""}
                                                        </p>
                                                    </Grid>

                                                    <Grid item sm={12} xs={12}>
                                                        <p>
                                                            Đã có tài khoản?
                                                        <Link className="gl-link" to="/login">Đăng nhập</Link>
                                                        </p>

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
        error: state.error
    }
}

export default connect(mapStateToProps, { register })(Register);