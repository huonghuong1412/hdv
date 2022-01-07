import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/UserActions'
import { Button, Grid } from '@material-ui/core';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps === undefined) {
    //         return false;
    //     }
    //     if (this.state.errors !== this.props.error.errors) {
    //         message.error(`Login errors: ${this.props.error.errors}`);
    //     }
    // }

    // https://accounts.google.com/o/oauth2/auth?scope=email&redirect_uri=http://localhost:8080/login-google&response_type=code&client_id=80724656105-fg2ndheoujm7c7dd4ob1i9mq3ebdbjhb.apps.googleusercontent.com&approval_prompt=force

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state, this.props.history);
    }

    render() {
        let { username, password } = this.state;
        return (
            <>

                <section className="section-banner">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li className="has-separator"><Link to="/" style={{ color: '#e32a53', textTransform: 'uppercase' }}>Home</Link></li>
                            <li className="has-separator"><Link to={`/login`} style={{ color: '#e32a53', textTransform: 'uppercase' }}><i className="fas fa-angle-right" style={{ padding: '0 5px' }}></i>Đăng nhập</Link></li>
                        </ul>
                    </div>
                </section>

                <div className="u-s-p-b-60">
                    <div className="section__intro u-s-m-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary">
                                            Đăng nhập
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                            <div className="u-s-m-b-30">
                                                <ValidatorForm onSubmit={this.handleSubmit}>
                                                    <Grid className="" container spacing={2}>
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
                                                            <p className="gl-link">
                                                                {this.props.error ? this.props.error.message : ""}
                                                            </p>

                                                        </Grid>
                                                        <Grid item sm={12} xs={12}>
                                                            <Button
                                                                variant="outlined" color="secondary"
                                                                style={{ margin: '10px 0' }}
                                                                className="btn btn--e-transparent-brand-b-2"
                                                                type="submit"
                                                            >Đăng nhập</Button>
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
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { login })(Login);