import React, { useEffect, useState } from 'react';
import { getAllUser } from '../../../actions/UserActions';
function User(props) {

    const [listUser, setListUser] = useState([]);

    const getListUser = () => {
        getAllUser()
            .then((res) => {
                setListUser(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getListUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        listUser.length >= 0 ? (
            <>
                <div className="u-s-p-b-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary">
                                            Danh sách User
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
                                                    <th scope="col">Họ Tên</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Số điện thoại</th>
                                                    <th scope="col">Địa chỉ</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    listUser.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{item.lastName + " " + item.firstName}</td>
                                                                <td>{item.username}</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.phone ? item.phone : ""}</td>
                                                                <td>{item.ward + ", " + item.district + ", " + item.city}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
            </>
        ) : <h1>Loading....</h1>
    )
}

export default User;