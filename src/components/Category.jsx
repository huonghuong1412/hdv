import React from 'react'
import { Link } from 'react-router-dom';

export default function Category(props) {

    const { listCategory } = props;
    const banner = [
        "promo-img-4.jpg",
        "chanel-logo-png-image-17.png",
        "do-dien-tu-cho-tot.jpg"
    ]

    return (
        <>
            {listCategory.map((item, index) => {
                return (
                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30" key={index}>
                        <div className="promotion-o">
                            <div className="aspect aspect--bg-grey aspect--square">

                                <Link to={`/${item.code}`}>
                                    <img className="aspect__img" src={`images/promo/${banner[index]}`} key={index} alt="" />
                                </Link>
                            </div>
                            <div className="promotion-o__content">
                                <Link className="promotion-o__link btn--e-white-brand" to={`/${item.code}`}>{item.name}</Link></div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
