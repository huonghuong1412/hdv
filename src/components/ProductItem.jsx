import React from 'react'
import { Link } from 'react-router-dom';
import { IMAGE_FOLDER } from '../constants'
import {currency} from '../helpers/formatCurrency'
export default function ProductItem(props) {

    const { products } = props;

    return (
        <>
            {products.map((item, index) => {
                return (
                    <li style={{ minHeight: '380px', maxHeight: '380px', display: 'inline-block', opacity: 1 }} className="mix rating mix_all" key={index}>
                        <div className="thumbnail thumbnail-product">
                            <Link to={`/san-pham/${item.id}/${item.slug}`} className="image-zoom img-responsive">
                                <img style={{ objectFit: 'contain', minHeight: '250px', maxHeight: '250px' }} src={IMAGE_FOLDER + item.images[0]} alt="Mỹ Phẩm Đức Perfume" />
                            </Link>
                            <div style={{ paddingLeft: '20px', lineHeight: '25px' }} className="caption">
                                <div style={{ marginBottom: '0px' }} className="text-wrap">
                                    <h5 style={{ minHeight: '30px', maxHeight: '30px' }}>
                                        <a href="../nuoc-hoa-cho-phai-nu-449_sp.html">
                                            <strong style={{ textTransform: 'none' }}>{item.name}</strong>
                                        </a>
                                    </h5>
                                    <p style={{ fontSize: '22px' }} className="prod-price text-primary">{currency(item.price)}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })}
        </>
    )
}
