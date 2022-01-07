import React, { useEffect, useState } from 'react';
import Pagination from '../../../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments } from '../../../actions/CommentActions';
import { Button, Dialog, DialogActions, DialogTitle, Grid } from '@material-ui/core';

function Comments(props) {

    const dispatch = useDispatch();
    const { match } = props;
    const comments = useSelector(state => state.comment.comments);
    const totalComments = useSelector(state => state.comment.totalComments);

    const [page, setPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] = useState(12);
    const [keyword, setKeyword] = useState('');


    const getAllProduct = () => {
        var searchObject = {};
        searchObject.keyword = keyword !== "" ? keyword : "";
        searchObject.page = (page);
        searchObject.limit = rowsPerPage;
        dispatch(getAllComments(searchObject))
    }

    useEffect(() => {
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
        comments.length >= 0 ? (
            <>
                <div className="u-s-p-b-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary">
                                            Danh sách bình luận
                                    </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section style={{ paddingTop: '20px', paddingBottom: '30px' }} className="section">
                    <div className="container" style={{ width: '1200px' }}>
                        <div className="row row--center">
                            <div className="col-lg-12 col-md-12 u-s-m-b-30">
                                <div className="l-f-o">
                                    <div className="l-f-o__pad-box">
                                        <table className="table table-dark">
                                            <thead>
                                                <tr>
                                                    <th scope="col">STT</th>
                                                    <th scope="col">Mã sản phẩm</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Tên khách hàng</th>
                                                    <th scope="col">Nội dung bình luận</th>
                                                    <th scope="col">Ngày bình luận</th>
                                                    <th scope="col">Đánh giá</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    comments.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{item.productId}</td>
                                                                <td>{item.username}</td>
                                                                <td>{item.displayName}</td>
                                                                <td>{item.content}</td>
                                                                <td>{item.createdDate}</td>
                                                                <td>{item.rating} / 5</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>

                                    </div>
                                </div>

                            </div>
                            <ul className="filter-list layout-grid" style={{ listStyle: 'none' }}>
                                <Pagination page={page} limit={rowsPerPage} totalRows={totalComments} onChangePage={handleChangePage} />
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        ) : <h1>Loading....</h1>
    )
}

export default Comments;