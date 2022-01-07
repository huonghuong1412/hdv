import React from 'react'
import { Link } from 'react-router-dom'

export default function AccountNavbar(props) {
    return (
        <div className="col-lg-3 col-md-12">
            {/*====== Dashboard Features ======*/}
            <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                <div className="dash__pad-1">
                    <span className="dash__text u-s-m-b-16">Hello</span>
                    <ul className="dash__f-list">
                        <li>
                            <Link className="dash-active" to="/dasboard-account">Manage My Account</Link></li>
                        <li>
                            <Link to="/dasboard-profile">Thông tin cá nhân</Link></li>
                        <li>
                            <Link to="/dasboard-my-order">Lịch sử đặt hàng</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
