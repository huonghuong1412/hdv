import React from 'react'
import { connect } from 'react-redux';
import { getProductById } from '../../actions/ProductActions'
import { addComment, getCommentByProduct } from '../../actions/CommentActions'
import { getCurrentUser } from '../../actions/UserActions'
import { addToCart } from '../../actions/CartActions'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import _ from 'lodash'
import { Button } from '@material-ui/core';
import { IMAGE_FOLDER } from '../../constants'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import {currency} from  "../../helpers/formatCurrency"

toast.configure({
    autoClose: 1000,
    draggable: false,
    limit: 3,
});

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <button
            className="jp-posts__nav -next" onClick={onClick}>
            <i className="fas fa-arrow-right"></i>
            <span className="hidden">next</span>
        </button>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="jp-posts__nav -prev" onClick={onClick}><i className="fas fa-arrow-left"></i><span className="hidden">prev</span></button>
    );
}

class DetailProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            quantity: 1,
            index: 0,
            content: "",
            rating: 5,
            page: 1,
            limit: 5
        }
    }

    componentDidMount() {
        const { match } = this.props;
        var searchObject = {};
        if (match) {
            const id = match.params.id;
            searchObject.product = match.params.id;
            searchObject.page = this.state.page;
            searchObject.limit = this.state.limit;

            this.props.getProductById(id);
            this.props.getCommentByProduct(searchObject);
            this.props.getCurrentUser();
        }
    }

    handleAddToCart = () => {
        this.props.addToCart(this.props.productDetail, this.state.quantity);
        toast.success("Thêm sản phẩm vào giỏ hàng thành công");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // this.props.history.push('/cart');
    }

    ratingChanged = (value) => {
        this.setState({
            rating: value
        })
    }

    handleAddComment = (e) => {
        e.preventDefault();
        const productId = !_.isEmpty(this.props.productDetail) ? this.props.productDetail.id : "";
        const auth = !_.isEmpty(this.props.auth) ? this.props.auth : "";

        const comment = {
            content: this.state.content,
            rating: this.state.rating,
            username: auth.username,
            displayName: auth.lastName + " " + auth.firstName,
            productId: productId,
        }
        this.props.addComment(comment);
        this.props.getCommentByProduct({
            product: productId,
            page: this.state.page,
            limit: this.state.limit
        });
        window.location.reload();
    }

    displayComment = (numStar) => {
        let ratingStars = [];
        if (!_.isEmpty(this.props.productDetail)) {
            for (let i = 0; i < 5; i++) {
                if (numStar === 5) {
                    ratingStars.push(<i key={i} className="fas fa-star" />)
                }
                else {
                    for (let j = 0; j < numStar; j++) {
                        ratingStars.push(<i key={j} className="fas fa-star" />);
                    }
                    for (let k = numStar; k < 5; k++) {
                        ratingStars.push(<i key={k} className="far fa-star" />);
                    }
                    break;
                }

            }
        }
        return ratingStars;
    }

    setNewPage = (page) => {
        this.setState({
            page: page
        })
        this.props.getCommentByProduct();
    }

    handleChangePage = (newPage) => {
        // setNewPage(newPage);
        this.setState({
            newPage: newPage
        })
    }

    settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    render() {
        const { productDetail, comments, auth } = this.props;
        const {
            quantity,
            index
        } = this.state;
        return (
            _.isEmpty(productDetail) === false ? (
                <>
                    <section className="section-banner">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li className="has-separator"><Link to="/" style={{ color: '#e32a53', textTransform: 'uppercase' }}>Home</Link></li>
                                <li className="has-separator"><Link to={`/${productDetail.categoryCode.code}`} style={{ color: '#e32a53', textTransform: 'uppercase' }}><i className="fas fa-angle-right" style={{ padding: '0 5px' }}></i>{productDetail.categoryCode.name}</Link></li>
                                <li><Link to={`/${productDetail.categoryCode.code}/${productDetail.subcategoryCode.code}`} style={{ color: '#e32a53', textTransform: 'uppercase' }}><i className="fas fa-angle-right" style={{ padding: '0 5px' }}></i>{productDetail.subcategoryCode.name}</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section className="section-compact">
                        <div className="container">
                            <div className="single-container">
                                <div className="product-single">
                                    <div className="featured-box">
                                        <div className="row">
                                            <div className="product-info col-sm-6 col-md-4 col-xs-12">
                                                <div className="left">
                                                    <div>
                                                        {
                                                            <img
                                                                src={IMAGE_FOLDER + productDetail.images[index]}
                                                                alt=""
                                                                style={{ width: '348px', height: '348px', objectFit: 'cover' }} />
                                                        }
                                                    </div>
                                                    <div className="slider">
                                                        <Slider {...this.settings} style={{ width: '360px', height: '120px' }}>
                                                            {productDetail.images && productDetail.images.map((item, i) => {
                                                                return (
                                                                    <img
                                                                        className="u-img-fluid"
                                                                        src={IMAGE_FOLDER + item}
                                                                        key={i}
                                                                        alt=""
                                                                        style={{ width: '120px', height: '445px', objectFit: 'cover' }}
                                                                        onClick={() => this.setState({
                                                                            index: i
                                                                        })}
                                                                    />
                                                                )
                                                            })}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-sm-6 col-xs-12">
                                                <div className="text">
                                                    <p>Danh Mục:
                                                        <Link to={`/${productDetail.categoryCode.code}`}
                                                            style={{ color: '#e32a53', textTransform: 'uppercase' }} className="text-primary">{productDetail.categoryCode.name}</Link></p>
                                                    <h4>{productDetail.name}</h4>
                                                    <p style={{ fontSize: '22px' }} className="prod-price text-primary">Giá: {currency(productDetail.price)}</p>

                                                    <div id="info-1" className="collapse in">
                                                        <p />
                                                        <div className="input-counter">
                                                            <span
                                                                className="input-counter__minus fas fa-minus"
                                                                disabled={quantity <= 1}
                                                                onClick={() => this.setState({ quantity: quantity - 1 })}
                                                            />
                                                            <input
                                                                className="input-counter__text input-counter--text-primary-style"
                                                                type="text"
                                                                min={1}
                                                                readOnly
                                                                value={quantity}
                                                            />
                                                            <span
                                                                className="input-counter__plus fas fa-plus"
                                                                disabled={quantity > productDetail.quantity}
                                                                onClick={() => this.setState({ quantity: quantity + 1 })}
                                                            /></div>
                                                        <button
                                                            style={{ marginLeft: '15px' }}
                                                            href="../add-carts/my-pham-cho-phai-dep-450.html"
                                                            onClick={this.handleAddToCart}
                                                            className="btn btn-default">Thêm vào giỏ hàng</button>
                                                    </div>
                                                    <p className="text-center" style={{ fontStyle: 'italic' }}>hoặc</p>
                                                    <div id="info-1" className="collapse in">
                                                        <p />
                                                        <a
                                                            href="../add-carts/my-pham-cho-phai-dep-450.html"
                                                            className="btn btn-default btn-block">Mua Ngay</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-box col-md-3 col-xs-12 hidden-xs hidden-sm">
                                                <span style={{ display: 'none' }}>
                                                    <style dangerouslySetInnerHTML={{ __html: "\n    body{\n        font-family: \"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    }\n    \n    /**\n     * Tooltip Styles\n     */\n    \n    div#photo_container_left\n    {\n                \n        height: auto;\n        position: relative;\n        margin: auto;\n    }\n    \n    div#photo_container_left a\n    {        \n        text-decoration:none;\n        color:black;\n        /** cursor:default; **/\n        font-weight:normal;\n    }\n    \n    div#photo_container_left a span\n    {         \n        z-index: 999;\n        visibility:hidden;\n        position:absolute;\n        left:0em;\n        top:0.7em; \n        background:#ffff6b;\n        width:100%;\n        border:1px solid #404040;\n        font-size:1.8em;\n        padding:1.3em;\n        /** cursor:default; **/\n        line-height:140%;\n    }\n    \n    div#photo_container_left a:hover span\n    {\n        visibility:visible;\n    }\n    " }} /></span>

                                                <a style={{ padding: '0px' }} href="/sach" className="col-xs-12 col-md-12">
                                                    <span style={{ background: '#f0f2f3', padding: '20px', textAlign: 'center', marginBottom: '10px' }} className="col-md-12">Sách</span>
                                                </a>
                                                <a style={{ padding: '0px' }} href="/quan-ao" className="col-xs-12 col-md-12">
                                                    <span style={{ background: '#f0f2f3', padding: '20px', textAlign: 'center', marginBottom: '10px' }} className="col-md-12">Quần áo</span>
                                                </a>
                                                <a style={{ padding: '0px' }} href="/do-dien-tu" className="col-xs-12 col-md-12">
                                                    <span style={{ background: '#f0f2f3', padding: '20px', textAlign: 'center', marginBottom: '10px' }} className="col-md-12">Đồ điện tử</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="product-more" className="product-more collapse in" style={{ paddingTop: '20px', borderTop: '2px solid #333' }}>
                                        <div className="cart-table table-responsive">
                                            <div style={{ padding: '10px', fontSize: '16px' }} className="prod-list-thumb media">
                                                <div className="media-body">
                                                    <div className="entry-content">
                                                        <p>{productDetail.description}</p>
                                                        <p><strong>Thông tin sản phẩm:</strong></p>
                                                        <ul>
                                                            {
                                                                productDetail.type === 1 ? (
                                                                    <>
                                                                        {/* <li>Nhà xuất bản:&nbsp;{productDetail.publisher.name}</li> */}
                                                                        <li>Nhà xuất bản: ABC</li>
                                                                        <li>Năm xuất bản: {productDetail.publishingYear}</li>
                                                                        <li>Tác giả: {productDetail.authors && productDetail.authors.map((item, index) => {
                                                                            return (
                                                                                <span key={index} style={{ paddingRight: '5px' }}>{item.name}</span>
                                                                            )
                                                                        })}</li>
                                                                        <li>Số trang: {productDetail.numberOfPages}</li>
                                                                    </>
                                                                ) : ""
                                                            }
                                                            {
                                                                productDetail.type === 2 ? (
                                                                    <>
                                                                        <li>Kiểu dáng: {productDetail.kieudang}</li>
                                                                    </>
                                                                ) : ""
                                                            }
                                                            {
                                                                productDetail.type === 3 ? (
                                                                    <>
                                                                        <li>Hãng sản xuất: &nbsp;{productDetail.brand.name}</li>
                                                                        <li>Màn hình: &nbsp;{productDetail.screen}</li>
                                                                        <li>Hệ điều hành: {productDetail.hedieuhanh}</li>
                                                                        <li>Thông số CPU: {productDetail.cpu}</li>
                                                                        <li>Thông số RAM: {productDetail.ram}</li>
                                                                        <li>Dung lượng PIN: {productDetail.dungLuongPin}</li>
                                                                    </>
                                                                ) : ""
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="product-more" className="product-more collapse in" style={{ paddingTop: '20px', borderTop: '2px solid #333' }}>
                                        <div className="cart-table table-responsive">
                                            <div style={{ padding: '10px', fontSize: '16px' }} className="prod-list-thumb media">
                                                <div className="media-body">
                                                    <div className="entry-content">
                                                        <p><strong>Đánh giá sản phẩm:</strong></p>
                                                        <div className="tab-pane show active" id="pd-rev">
                                                            <div className="pd-tab__rev">
                                                                <div className="u-s-m-b-30">
                                                                    <form className="pd-tab__rev-f1">
                                                                        <div className="rev-f1__review">
                                                                            {
                                                                                comments.map((item, index) => {
                                                                                    return (
                                                                                        <div className="review-o u-s-m-b-15" key={index}>
                                                                                            <div className="review-o__info u-s-m-b-8">
                                                                                                <span className="review-o__name">{item.displayName}</span>
                                                                                                <span className="review-o__date">{item.createdDate}</span></div>
                                                                                            <div className="review-o__rating gl-rating-style u-s-m-b-8">
                                                                                                {
                                                                                                    this.displayComment(item.rating)
                                                                                                }
                                                                                                <span>({item.rating})</span></div>
                                                                                            <p className="review-o__text">
                                                                                                {item.content}
                                                                                            </p>
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }

                                                                        </div>
                                                                        {/* <Pagination page={page} limit={limit} totalRows={this.props.totalComments} onChangePage={this.handleChangePage} /> */}
                                                                    </form>
                                                                </div>
                                                                <div className="u-s-m-b-30">
                                                                    <form className="pd-tab__rev-f2" onSubmit={this.handleAddComment}>
                                                                        <span className="gl-text u-s-m-b-15">Đánh giá</span>
                                                                        <div className="u-s-m-b-30">
                                                                            <div className="rev-f2__table-wrap gl-scroll">
                                                                                <ReactStars
                                                                                    count={5}
                                                                                    onChange={this.ratingChanged}
                                                                                    size={24}
                                                                                    activeColor="#ffd700"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="rev-f2__group">
                                                                            <div className="u-s-m-b-15">
                                                                                <textarea
                                                                                    className="text-area text-area--primary-style"
                                                                                    id="reviewer-text"
                                                                                    defaultValue={""}
                                                                                    placeholder="Nội dung bình luận"
                                                                                    onChange={(e) => this.setState({
                                                                                        content: e.target.value
                                                                                    })}
                                                                                /></div>
                                                                        </div>
                                                                        {
                                                                            !_.isEmpty(auth) ? <div>
                                                                                <Button
                                                                                    variant="outlined" color="secondary"
                                                                                    style={{ margin: '10px 0' }}
                                                                                    className="btn btn--e-transparent-brand-b-2 btn-add-comment btn-default"
                                                                                    type="submit"
                                                                                    onClick={this.handleAddComment}
                                                                                >Gửi bình luận</Button></div>
                                                                                : <div>
                                                                                    <Link
                                                                                        variant="outlined" color="secondary"
                                                                                        style={{ margin: '10px 0' }}
                                                                                        className="btn btn--e-transparent-brand-b-2 btn-default"
                                                                                        to="/login"
                                                                                    >Đăng nhập</Link></div>
                                                                        }
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : <div>
                <h1>Loading ....</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        productDetail: state.product.productDetail,
        comments: state.comment.comments,
        totalComments: state.comment.totalComments
    }
}

const mapDiapatchToProps = (dispatch) => {
    return {
        getProductById: (id) => {
            dispatch(getProductById(id))
        },
        getCommentByProduct: (searchObject) => {
            dispatch(getCommentByProduct(searchObject))
        },
        addComment: (comment) => {
            dispatch(addComment(comment))
        },
        addToCart: (product, quantity) => {
            dispatch(addToCart(product, quantity))
        },
        getCurrentUser: () => {
            dispatch(getCurrentUser());
        }
    }
}

export default connect(mapStateToProps, mapDiapatchToProps)(DetailProduct);