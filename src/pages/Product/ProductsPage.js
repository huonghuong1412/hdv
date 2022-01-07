import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import ProductItem from '../../components/ProductItem';
import { getAllCategory } from '../../actions/CategoryActions'
import { useDispatch, useSelector } from 'react-redux';
import { searchByPage } from '../../actions/ProductActions';
import { Link } from 'react-router-dom';

function ProductsPage(props) {

    const dispatch = useDispatch();
    const { match } = props;
    const products = useSelector(state => state.product.listProduct);
    const totalProducts = useSelector(state => state.product.totalProducts);
    const listCategory = useSelector(state => state.category.category);

    const [page, setPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] = useState(12);
    const [keyword, setKeyword] = useState('');


    const getListCategory = () => {
        dispatch(getAllCategory());
    }

    const getAllProduct = () => {
        var searchObject = {};
        searchObject.keyword = keyword !== "" ? keyword : "";
        searchObject.page = (page);
        searchObject.limit = rowsPerPage;
        const category = match.params.category ? match.params.category : '';
        const subcategory = match.params.subcategory ? match.params.subcategory : '';
        dispatch(searchByPage(searchObject, category, subcategory))
    }

    const searchProduct = (e) => {
        e.preventDefault();
        var searchObject = {};
        searchObject.keyword = keyword;
        searchObject.page = (page);
        searchObject.limit = rowsPerPage;
        const category = match.params.category ? match.params.category : '';
        const subcategory = match.params.subcategory ? match.params.subcategory : '';
        dispatch(searchByPage(searchObject, category, subcategory))
    }


    useEffect(() => {
        getListCategory();
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
        <>

            <section className="section-compact">
                <div className="container">
                    <header className="heading-3 page-heading">
                        <h4>Danh sách sản phẩm</h4>
                    </header>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="widget widget-prod-categrories">
                                <header className="widget-heading-3">
                                    <h4><span className="caret" />Danh Mục Sản Phẩm</h4>
                                </header>
                                {
                                    listCategory.map((item, index) => {
                                        return (
                                            <ul className="list-align" key={index}>
                                                <li><Link to={`/${item.code}`}>{item.name}</Link></li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                            <div className="widget widget-prod-filter">
                                <header className="widget-heading-3">
                                    <h4><span className="caret" />Tìm </h4>
                                </header>
                                <div className="filter-bar">
                                    <form id="search-global-form">
                                        <input
                                            className="form-control"
                                            type="search"
                                            required
                                            name="keyword"
                                            onChange={(e) => setKeyword(e.target.value)}
                                            placeholder="Từ Khóa" />
                                        <button
                                            className="btn btn-default btn-sm btn-block"
                                            onClick={searchProduct}
                                        >Tìm </button>
                                    </form>
                                </div>
                            </div>
                            <div className="widget widget-prod-filter">
                                <header className="widget-heading-3">
                                    <h4><span className="caret" />Bài Viết Mới</h4>
                                </header>
                                <div className="filter-bar">
                                    <figure style={{ paddingBottom: '10px' }} className="image-zoom">
                                        <img width="auto" height="100%" src="https://shopxanh.com:88/user/canifaweb/news/2def25ab895b79c940a308ae8fbb318d.jpg" alt="Hình Ảnh" />
                                    </figure>
                                    <h5 style={{ textAlign: 'center', fontSize: '14px', lineHeight: '20px' }}><a href="../meo-trang-diem-duoc-chi-em-phai-dep-tin-dung_bm.html"><strong>Mẹo trang điểm được chị em phái đẹp tin dùng</strong></a></h5>
                                </div>
                                <div className="filter-bar">
                                    <figure style={{ paddingBottom: '10px' }} className="image-zoom">
                                        <img width="auto" height="100%" src="https://shopxanh.com:88/user/canifaweb/news/2b675aaf6f40b2f64633afdf389280e9.jpg" alt="Hình Ảnh" />
                                    </figure>
                                    <h5 style={{ textAlign: 'center', fontSize: '14px', lineHeight: '20px' }}><a href="../dep-de-tu-tin-hon-moi-ngay-cung-perfume_bm.html"><strong>Đẹp để tự tin hơn mỗi ngày Cùng Perfume</strong></a></h5>
                                </div>
                                <div className="filter-bar">
                                    <figure style={{ paddingBottom: '10px' }} className="image-zoom">
                                        <img width="auto" height="100%" src="https://shopxanh.com:88/user/canifaweb/news/9f864391212a83b041b4aeb2d1b5e548.jpg" alt="Hình Ảnh" />
                                    </figure>
                                    <h5 style={{ textAlign: 'center', fontSize: '14px', lineHeight: '20px' }}><a href="../cach-chon-mua-my-pham-an-toan-va-hieu-qua_bm.html"><strong>Cách Chọn Mua Mỹ Phẩm An Toàn Và Hiệu Quả</strong></a></h5>
                                </div>
                            </div>
                            <div className="widget widget-prod-filter">
                                <header className="widget-heading-3">
                                    <h4><span className="caret" />Từ Khóa</h4>
                                </header>
                                <div className="filter-bar">
                                    <span className="btn btn-default btn-sm" style={{ textAlign: 'left', fontSize: '14px', padding: '5px' }}><a href="/">Mỹ Phẩm</a></span>
                                    <span className="btn btn-default btn-sm" style={{ textAlign: 'left', fontSize: '14px', padding: '5px' }}><a href="/"> nước hoa</a></span>
                                </div>
                            </div>
                        </div>
                        <div style={{}} className="col-md-9">
                            <div className="filter-head">
                                <ul style={{ paddingBottom: '20px' }} className="filter-tabs">
                                    <li className="filter active" data-role="button" data-filter="popularity" />
                                    <li className="filter" data-role="button" data-filter="bestsellers" />
                                    <li className="filter" data-role="button" data-filter="pricefresh" />
                                    <li className="filter" data-role="button" data-filter="arrivals" />
                                    <li className="filter" data-role="button" data-filter="rating"> </li>
                                    <li style={{ fontSize: '22px' }} className="layout-list" data-role="button"><i className="flaticon-menu10" /></li>
                                    <li style={{ fontSize: '22px' }} className="layout-grid active" data-role="button"><i className="flaticon-nine15" /></li>
                                </ul>
                            </div>
                            <ul className="filter-list layout-grid">
                                <ProductItem products={products} />
                            </ul>
                            <ul className="filter-list layout-grid">
                                <Pagination page={page} limit={rowsPerPage} totalRows={totalProducts} onChangePage={handleChangePage} />
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default ProductsPage;