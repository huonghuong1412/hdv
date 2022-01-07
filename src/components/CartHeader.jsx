import React from 'react'
import { Link } from 'react-router-dom';

function CartHeader(props) {

    const { cart, deleteItemCart } = props;

    return (
        <>
            {cart.map((item, index) => {
                return (
                    <div className="card-mini-product" key={index}>
                        <div className="mini-product">
                            <div className="mini-product__image-wrapper">
                                <Link className="mini-product__link" to={`/san-pham/chi-tiet/${item.product.id}`}>
                                    <img className="u-img-fluid" src={item.product.images[0]} alt="" /></Link></div>
                            <div className="mini-product__info-wrapper">
                                <span className="mini-product__category">
                                    <a href="shop-side-version-2.html">{item.product.name}</a></span>
                                <span className="mini-product__name">
                                    <Link to={`/san-pham/chi-tiet/${item.product.id}`}>{item.product.publisher}</Link></span>
                                <span className="mini-product__quantity">{item.quantity} x</span>
                                <span className="mini-product__price">${item.product.price}</span></div>
                        </div>
                        <button className="mini-product__delete-link far fa-trash-alt" onClick={() => deleteItemCart(item.product)} />
                    </div>
                )
            })}
        </>
    )
}
export default CartHeader;