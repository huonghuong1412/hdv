import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { updateCategory, checkCode } from '../../../actions/CategoryActions';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

toast.configure({
    autoClose: 2000,
    draggable: false,
    limit: 3,
});

class CategoryDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            code: "",
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps.item
        })
    }

    handleClear = () => {
        this.setState({
            name: "",
            code: "",
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveOrUpdate = () => {
        let { id, name, code } = this.state;
        let category = {
            name: name,
            code: code
        }
        checkCode(id, code)
            .then((res) => {
                if (res.data) {
                    toast.error("Mã danh mục đã tồn tại")
                } else {
                    if (id) {
                        updateCategory({
                            ...category,
                            id
                        })
                            .then(() => {
                                toast.success("Sửa danh mục thành công");
                                this.props.handleClose();
                                this.handleClear();
                            })
                    }
                }
            })
        this.handleClear();
    }

    render() {
        const { open, handleClose } = this.props;
        let { name, code } = this.state;
        return (
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Sửa danh mục</DialogTitle>
                    <DialogContent style={{ width: '500px' }}>
                        <ValidatorForm onSubmit={this.saveOrUpdate}>
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
                            </Grid>
                        </ValidatorForm>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.handleClose()} color="primary">
                            Huỷ
                        </Button>
                        <Button onClick={this.saveOrUpdate} color="primary">
                            Xác nhận
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default CategoryDialog;
