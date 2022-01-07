import React from 'react';
import { IMAGE_FOLDER } from '../constants'
import { currency } from '../helpers/formatCurrency'
function Cart(props) {
    const { cart, updateCart, deleteItemCart } = props;
    return (
        <>
            {cart.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <div className="table-p__box">
                                <div className="table-p__img-wrap">
                                    <img className="u-img-fluid" src={IMAGE_FOLDER + item.product.images[0]} alt="" style={{ width: '120px', height: '120px', objectFit: 'cover' }} /></div>
                                <div className="table-p__info">
                                    <span className="table-p__name">
                                        <a href={`/san-pham/${item.product.id}/${item.product.slug}`}>{item.product.name}</a></span>
                                    <span className="table-p__category">
                                        <a href={`/${item.product.categoryCode.code}`}>{item.product.categoryCode.name}</a></span>
                                    <span className="table-p__category">
                                        <a href={`/${item.product.categoryCode.code}/${item.product.subcategoryCode.code}`}>{item.product.subcategoryCode.name}</a></span>
                                    {/* <ul className="table-p__variant-list">
                                        <li>
                                            <span>Size: 22</span></li>
                                        <li>
                                            <span>Color: Red</span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="table-p__price">{currency(item.product.price)}</span></td>
                        <td>
                            <div className="table-p__input-counter-wrap">
                                {/*====== Input Counter ======*/}
                                <div className="input-counter">
                                    <span
                                        className="input-counter__minus fas fa-minus"
                                        disabled={item.quantity <= 1 ? true : false}
                                        onClick={() => updateCart(item.product, item.quantity - 1)}
                                    />
                                    <input className="input-counter__text input-counter--text-primary-style"
                                        readOnly
                                        value={item.quantity}
                                    />
                                    <span className="input-counter__plus fas fa-plus"
                                        disabled={item.quantity >= item.product.stock ? true : false}
                                        onClick={() => updateCart(item.product, item.quantity + 1)} /></div>
                                {/*====== End - Input Counter ======*/}
                            </div>
                        </td>
                        <td>
                            <div className="table-p__del-wrap">
                                <button className="far fa-trash-alt table-p__delete-link" onClick={() => deleteItemCart(item.product)} /></div>
                        </td>
                    </tr>
                )
            })}
        </>
    );
}

export default Cart;