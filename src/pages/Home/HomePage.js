import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Product from '../../components/Product'
import Slider from '../../components/Slider';
import { getAllCategory } from '../../actions/CategoryActions'
import { searchByCategory } from '../../actions/ProductActions';
import { login } from '../../actions/UserActions';
import Category from '../../components/Category';

function HomePage(props) {

    const dispatch = useDispatch();
    const listCategory = useSelector(state => state.category.category);
    const [books, setBooks] = useState([])
    const [clothes, setClothes] = useState([])
    const [electrics, setElectrics] = useState([])

    const getListCategory = () => {
        dispatch(getAllCategory());
    }

    const getBooks = () => {
        var searchObject = {};
        searchObject.keyword = "";
        searchObject.page = 1;
        searchObject.limit = 8;
        searchByCategory(searchObject, 'sach', '')
            .then(res => setBooks(res.data.content))
            .catch(err => console.log(err))
    }
    const getClothes = () => {
        var searchObject = {};
        searchObject.keyword = "";
        searchObject.page = 1;
        searchObject.limit = 8;

        searchByCategory(searchObject, 'quan-ao', '')
            .then(res => setClothes(res.data.content))
            .catch(err => console.log(err))
    }
    const getElectrics = () => {
        var searchObject = {};
        searchObject.keyword = "";
        searchObject.page = 1;
        searchObject.limit = 8;

        searchByCategory(searchObject, 'do-dien-tu', '')
            .then(res => setElectrics(res.data.content))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getListCategory();
        getBooks();
        getClothes();
        getElectrics();

        const params = new URLSearchParams(window.location.search) // id=123
        let email = params.get('email') // 123
        let password = "123456";
        let data = {
            username: email,
            password: password
        }

        if (email !== null) {
            dispatch(login(data, props.history))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Slider />

            <div className="u-s-p-y-60">
                <div className="section__content">
                    <div className="container">
                        <div className="row">
                            <Category
                                listCategory={listCategory}
                            ></Category>
                        </div>
                    </div>
                </div>
            </div>


            <section style={{ paddingTop: '20px', paddingBottom: '30px' }} className="section">
                <div className="container">
                    <div className="row">
                        <div className="features-list-box">
                            <ul className="feautes-list">
                                <li style={{ fontSize: '20px', fontWeight: 700, width: '100%', marginTop: '30px' }}>
                                    <Link to="/quan-ao">Sản phẩm thời trang</Link>
                                    <Link to="/quan-ao" className="hidden-xs flaticon-menu10" style={{ fontSize: '14px', float: 'right', border: '1px solid #141414', padding: '10px' }}><i className="fas fa-bars"></i>&nbsp;&nbsp;&nbsp;Xem Tất Cả</Link>
                                </li>
                            </ul>
                        </div>
                        <Product products={clothes} />

                        <div className="features-list-box">
                            <ul className="feautes-list">
                                <li style={{ fontSize: '20px', fontWeight: 700, width: '100%', marginTop: '30px' }}>
                                    <Link to="/sach">Sách</Link>
                                    <Link to="/sach" className="hidden-xs flaticon-menu10" style={{ fontSize: '14px', float: 'right', border: '1px solid #141414', padding: '10px' }}><i className="fas fa-bars"></i>&nbsp;&nbsp;&nbsp;Xem Tất Cả</Link>
                                </li>
                            </ul>
                        </div>
                        <Product products={books} />

                        <div className="features-list-box">
                            <ul className="feautes-list">
                                <li style={{ fontSize: '20px', fontWeight: 700, width: '100%', marginTop: '30px' }}>
                                    <Link to="/do-dien-tu">Đồ điện tử</Link>
                                    <Link to="/do-dien-tu" className="hidden-xs flaticon-menu10" style={{ fontSize: '14px', float: 'right', border: '1px solid #141414', padding: '10px' }}><i className="fas fa-bars"></i>&nbsp;&nbsp;&nbsp;Xem Tất Cả</Link>
                                </li>
                            </ul>
                        </div>
                        <Product products={electrics} />
                    </div>
                </div>
            </section>

            <section className="section-sales section-image" style={{ backgroundImage: 'url(https://shopxanh.com:88/files/thoitrang/canifa_web/slide//bgImg-1.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-sm-push-3 col-md-6 col-md-push-6 col-lg-5 col-lg-push-7 ">
                            <div className="promotion-box">
                                <div className="text">
                                    <h4 style={{ fontSize: '20px', lineHeight: '50px' }}>Tham Gia Cùng Perfume</h4>
                                    <h3 style={{ fontSize: '50px', lineHeight: '50px' }}><strong>Khuyến Mãi</strong></h3>
                                    <h4 style={{ fontSize: '30px', lineHeight: '50px' }}>Giảm Giá &nbsp;Đến <strong>70%</strong></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomePage;