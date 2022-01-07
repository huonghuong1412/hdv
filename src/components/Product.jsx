import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_FOLDER } from '../constants'
import {currency} from '../helpers/formatCurrency'
function Product(props) {
    const { products } = props;

    return (
        <>
            {products.map((item, index) => {
                return (
                    <div className="col-sm-4 col-lg-3 col-md-3 col-xs-6" key={index}>
                        <div className="thumbnail thumbnail-product">
                            <Link to={`/san-pham/${item.id}/${item.slug}`} className="image-zoom img-responsive">
                                <img style={{ objectFit: 'contain', minHeight: '250px', maxHeight: '250px' }} src={IMAGE_FOLDER + item.images[0]} alt="Mỹ Phẩm Đức Perfume" />
                            </Link>
                            <div style={{ minHeight: '50px', maxHeight: '50px' }} className="caption text-center">
                                <h5>
                                    <Link to={`/san-pham/${item.id}/${item.slug}`}>{item.name}</Link>
                                    </h5>
                                <span style={{ whiteSpace: 'nowrap' }}>
                                    Giá:
                                    <span style={{ fontSize: '18px' }} className="prod-price text-primary">&nbsp;{currency(item.price)}&nbsp;</span>
                                </span>
                            </div>
                        </div>
                    </div>



                )
            })}
        </>
    )
}

export default Product;