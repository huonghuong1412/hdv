import React from 'react'

export default function Filter(props) {
    return (
        <>

            <div className="col-lg-3 col-md-12">
                <div className="shop-w-master">
                    <h1 className="shop-w-master__heading u-s-m-b-30"><i className="fas fa-filter u-s-m-r-8" />
                        <span>FILTERS</span></h1>
                    <div className="shop-w-master__sidebar">
                        <div className="u-s-m-b-30">
                            <div className="shop-w shop-w--style">
                                <div className="shop-w__intro-wrap">
                                    <h1 className="shop-w__h">CATEGORY</h1>
                                    <span className="fas fa-minus shop-w__toggle" data-target="/s-category" data-toggle="collapse" />
                                </div>
                                <div className="shop-w__wrap collapse show" id="s-category">
                                    <ul className="shop-w__category-list gl-scroll">
                                        <li className="has-list">
                                            <a href="/">Electronics</a>
                                            <span className="category-list__text u-s-m-l-6">(23)</span>
                                            <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                            <ul style={{ display: 'none' }}>
                                                <li className="has-list">
                                                    <a href="/">3D Printer &amp; Supplies</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">3d Printer</a></li>
                                                        <li>
                                                            <a href="/">3d Printing Pen</a></li>
                                                        <li>
                                                            <a href="/">3d Printing Accessories</a></li>
                                                        <li>
                                                            <a href="/">3d Printer Module Board</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Home Audio &amp; Video</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul style={{ display: 'none' }}>
                                                        <li>
                                                            <a href="/">TV Boxes</a></li>
                                                        <li>
                                                            <a href="/">TV Receiver &amp; Accessories</a></li>
                                                        <li>
                                                            <a href="/">3d Printing Accessories</a></li>
                                                        <li>
                                                            <a href="/">3d Printer Module Board</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Media Players</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul style={{ display: 'none' }}>
                                                        <li>
                                                            <a href="/">Earphones</a></li>
                                                        <li>
                                                            <a href="/">Mp3 Players</a></li>
                                                        <li>
                                                            <a href="/">Speakers &amp; Radios</a></li>
                                                        <li>
                                                            <a href="/">Microphones</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Video Game Accessories</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Nintendo Video Games Accessories</a></li>
                                                        <li>
                                                            <a href="/">Sony Video Games Accessories</a></li>
                                                        <li>
                                                            <a href="/">Xbox Video Games Accessories</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Security &amp; Protection</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Security Cameras</a></li>
                                                        <li>
                                                            <a href="/">Alarm System</a></li>
                                                        <li>
                                                            <a href="/">Security Gadgets</a></li>
                                                        <li>
                                                            <a href="/">CCTV Security Accessories</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Home Audio &amp; Video</a>
                                                    <span className="js-shop-category-span is-expanded fas fa-plus u-s-m-l-6" />
                                                    <ul style={{ display: 'block' }}>
                                                        <li>
                                                            <a href="/">TV Boxes</a></li>
                                                        <li>
                                                            <a href="/">TV Receiver &amp; Accessories</a></li>
                                                        <li>
                                                            <a href="/">3d Printing Accessories</a></li>
                                                        <li>
                                                            <a href="/">3d Printer Module Board</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Photography &amp; Camera</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Digital Cameras</a></li>
                                                        <li>
                                                            <a href="/">Sport Camera &amp; Accessories</a></li>
                                                        <li>
                                                            <a href="/">Camera Accessories</a></li>
                                                        <li>
                                                            <a href="/">Lenses &amp; Accessories</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Arduino Compatible</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Raspberry Pi &amp; Orange Pi</a></li>
                                                        <li>
                                                            <a href="/">Module Board</a></li>
                                                        <li>
                                                            <a href="/">Smart Robot</a></li>
                                                        <li>
                                                            <a href="/">Board Kits</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">DSLR Camera</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Nikon Camera</a></li>
                                                        <li>
                                                            <a href="/">Canon Camera</a></li>
                                                        <li>
                                                            <a href="/">Sony Camera</a></li>
                                                        <li>
                                                            <a href="/">DSLR Lenses</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Necessary Accessories</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Flash Cards</a></li>
                                                        <li>
                                                            <a href="/">Memory Cards</a></li>
                                                        <li>
                                                            <a href="/">Flash Pins</a></li>
                                                        <li>
                                                            <a href="/">Compact Discs</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-list">
                                            <a href="/">Women's Clothing</a>
                                            <span className="category-list__text u-s-m-l-6">(5)</span>
                                            <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                            <ul>
                                                <li className="has-list">
                                                    <a href="/">Hot Categories</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Dresses</a></li>
                                                        <li>
                                                            <a href="/">Blouses &amp; Shirts</a></li>
                                                        <li>
                                                            <a href="/">T-shirts</a></li>
                                                        <li>
                                                            <a href="/">Rompers</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Intimates</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Bras</a></li>
                                                        <li>
                                                            <a href="/">Brief Sets</a></li>
                                                        <li>
                                                            <a href="/">Bustiers &amp; Corsets</a></li>
                                                        <li>
                                                            <a href="/">Panties</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Wedding &amp; Events</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Wedding Dresses</a></li>
                                                        <li>
                                                            <a href="/">Evening Dresses</a></li>
                                                        <li>
                                                            <a href="/">Prom Dresses</a></li>
                                                        <li>
                                                            <a href="/">Flower Dresses</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Bottoms</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Skirts</a></li>
                                                        <li>
                                                            <a href="/">Shorts</a></li>
                                                        <li>
                                                            <a href="/">Leggings</a></li>
                                                        <li>
                                                            <a href="/">Jeans</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Outwear</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Blazers</a></li>
                                                        <li>
                                                            <a href="/">Basic Jackets</a></li>
                                                        <li>
                                                            <a href="/">Trench</a></li>
                                                        <li>
                                                            <a href="/">Leather &amp; Suede</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Jackets</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Denim Jackets</a></li>
                                                        <li>
                                                            <a href="/">Trucker Jackets</a></li>
                                                        <li>
                                                            <a href="/">Windbreaker Jackets</a></li>
                                                        <li>
                                                            <a href="/">Leather Jackets</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Accessories</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Tech Accessories</a></li>
                                                        <li>
                                                            <a href="/">Headwear</a></li>
                                                        <li>
                                                            <a href="/">Baseball Caps</a></li>
                                                        <li>
                                                            <a href="/">Belts</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Other Accessories</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Bags</a></li>
                                                        <li>
                                                            <a href="/">Wallets</a></li>
                                                        <li>
                                                            <a href="/">Watches</a></li>
                                                        <li>
                                                            <a href="/">Sunglasses</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-list">
                                            <a href="/">Men's Clothing</a>
                                            <span className="category-list__text u-s-m-l-6">(5)</span>
                                            <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                            <ul>
                                                <li className="has-list">
                                                    <a href="/">Hot Sale</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">T-Shirts</a></li>
                                                        <li>
                                                            <a href="/">Tank Tops</a></li>
                                                        <li>
                                                            <a href="/">Polo</a></li>
                                                        <li>
                                                            <a href="/">Shirts</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Outwear</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Hoodies</a></li>
                                                        <li>
                                                            <a href="/">Trench</a></li>
                                                        <li>
                                                            <a href="/">Parkas</a></li>
                                                        <li>
                                                            <a href="/">Sweaters</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Bottoms</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Casual Pants</a></li>
                                                        <li>
                                                            <a href="/">Cargo Pants</a></li>
                                                        <li>
                                                            <a href="/">Jeans</a></li>
                                                        <li>
                                                            <a href="/">Shorts</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Underwear</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Boxers</a></li>
                                                        <li>
                                                            <a href="/">Briefs</a></li>
                                                        <li>
                                                            <a href="/">Robes</a></li>
                                                        <li>
                                                            <a href="/">Socks</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Jackets</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Denim Jackets</a></li>
                                                        <li>
                                                            <a href="/">Trucker Jackets</a></li>
                                                        <li>
                                                            <a href="/">Windbreaker Jackets</a></li>
                                                        <li>
                                                            <a href="/">Leather Jackets</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Sunglasses</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Pilot</a></li>
                                                        <li>
                                                            <a href="/">Wayfarer</a></li>
                                                        <li>
                                                            <a href="/">Square</a></li>
                                                        <li>
                                                            <a href="/">Round</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Accessories</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Eyewear Frames</a></li>
                                                        <li>
                                                            <a href="/">Scarves</a></li>
                                                        <li>
                                                            <a href="/">Hats</a></li>
                                                        <li>
                                                            <a href="/">Belts</a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-list">
                                                    <a href="/">Other Accessories</a>
                                                    <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                    <ul>
                                                        <li>
                                                            <a href="/">Bags</a></li>
                                                        <li>
                                                            <a href="/">Wallets</a></li>
                                                        <li>
                                                            <a href="/">Watches</a></li>
                                                        <li>
                                                            <a href="/">Tech Accessories</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/">Food &amp; Supplies</a>
                                            <span className="category-list__text u-s-m-l-6">(0)</span></li>
                                        <li>
                                            <a href="/">Furniture &amp; Decor</a>
                                            <span className="category-list__text u-s-m-l-6">(0)</span></li>
                                        <li>
                                            <a href="/">Sports &amp; Game</a>
                                            <span className="category-list__text u-s-m-l-6">(0)</span></li>
                                        <li>
                                            <a href="/">Beauty &amp; Health</a>
                                            <span className="category-list__text u-s-m-l-6">(0)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="u-s-m-b-30">
                            <div className="shop-w shop-w--style">
                                <div className="shop-w__intro-wrap">
                                    <h1 className="shop-w__h">RATING</h1>
                                    <span className="fas fa-minus shop-w__toggle" data-target="/s-rating" data-toggle="collapse" />
                                </div>
                                <div className="shop-w__wrap collapse show" id="s-rating">
                                    <ul className="shop-w__list gl-scroll">
                                        <li>
                                            <div className="rating__check">
                                                <input type="checkbox" />
                                                <div className="rating__check-star-wrap"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
                                            </div>
                                            <span className="shop-w__total-text">(2)</span>
                                        </li>
                                        <li>
                                            <div className="rating__check">
                                                <input type="checkbox" />
                                                <div className="rating__check-star-wrap"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" />
                                                    <span>&amp; Up</span></div>
                                            </div>
                                            <span className="shop-w__total-text">(8)</span>
                                        </li>
                                        <li>
                                            <div className="rating__check">
                                                <input type="checkbox" />
                                                <div className="rating__check-star-wrap"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                                                    <span>&amp; Up</span></div>
                                            </div>
                                            <span className="shop-w__total-text">(10)</span>
                                        </li>
                                        <li>
                                            <div className="rating__check">
                                                <input type="checkbox" />
                                                <div className="rating__check-star-wrap"><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                                                    <span>&amp; Up</span></div>
                                            </div>
                                            <span className="shop-w__total-text">(12)</span>
                                        </li>
                                        <li>
                                            <div className="rating__check">
                                                <input type="checkbox" />
                                                <div className="rating__check-star-wrap"><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" /><i className="far fa-star" />
                                                    <span>&amp; Up</span></div>
                                            </div>
                                            <span className="shop-w__total-text">(1)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="u-s-m-b-30">
                            <div className="shop-w shop-w--style">
                                <div className="shop-w__intro-wrap">
                                    <h1 className="shop-w__h">SHIPPING</h1>
                                    <span className="fas fa-minus shop-w__toggle" data-target="/s-shipping" data-toggle="collapse" />
                                </div>
                                <div className="shop-w__wrap collapse show" id="s-shipping">
                                    <ul className="shop-w__list gl-scroll">
                                        <li>
                                            {/*====== Check Box ======*/}
                                            <div className="check-box">
                                                <input type="checkbox" id="free-shipping" />
                                                <div className="check-box__state check-box__state--primary">
                                                    <label className="check-box__label" htmlFor="free-shipping">Free Shipping</label></div>
                                            </div>
                                            {/*====== End - Check Box ======*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="u-s-m-b-30">
                            <div className="shop-w shop-w--style">
                                <div className="shop-w__intro-wrap">
                                    <h1 className="shop-w__h">PRICE</h1>
                                    <span className="fas fa-minus shop-w__toggle" data-target="/s-price" data-toggle="collapse" />
                                </div>
                                <div className="shop-w__wrap collapse show" id="s-price">
                                    <form className="shop-w__form-p">
                                        <div className="shop-w__form-p-wrap">
                                            <div>
                                                <label htmlFor="price-min" />
                                                <input className="input-text input-text--primary-style" type="text" id="price-min" placeholder="Min" /></div>
                                            <div>
                                                <label htmlFor="price-max" />
                                                <input className="input-text input-text--primary-style" type="text" id="price-max" placeholder="Max" /></div>
                                            <div>
                                                <button className="btn btn--icon fas fa-angle-right btn--e-transparent-platinum-b-2" type="submit" /></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="u-s-m-b-30">
                            <div className="shop-w shop-w--style">
                                <div className="shop-w__intro-wrap">
                                    <h1 className="shop-w__h">MANUFACTURER</h1>
                                    <span className="fas fa-minus shop-w__toggle" data-target="/s-manufacturer" data-toggle="collapse" />
                                </div>
                                <div className="shop-w__wrap collapse show" id="s-manufacturer">
                                    <ul className="shop-w__list-2">
                                        <li>
                                            <div className="list__content">
                                                <input type="checkbox" defaultChecked />
                                                <span>Calvin Klein</span></div>
                                            <span className="shop-w__total-text">(23)</span>
                                        </li>
                                        <li>
                                            <div className="list__content">
                                                <input type="checkbox" />
                                                <span>Diesel</span></div>
                                            <span className="shop-w__total-text">(2)</span>
                                        </li>
                                        <li>
                                            <div className="list__content">
                                                <input type="checkbox" />
                                                <span>Polo</span></div>
                                            <span className="shop-w__total-text">(2)</span>
                                        </li>
                                        <li>
                                            <div className="list__content">
                                                <input type="checkbox" />
                                                <span>Tommy Hilfiger</span></div>
                                            <span className="shop-w__total-text">(9)</span>
                                        </li>
                                        <li>
                                            <div className="list__content">
                                                <input type="checkbox" />
                                                <span>Ndoge</span></div>
                                            <span className="shop-w__total-text">(3)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="u-s-m-b-30">
                            <div className="shop-w shop-w--style">
                                <div className="shop-w__intro-wrap">
                                    <h1 className="shop-w__h">COLOR</h1>
                                    <span className="fas fa-minus shop-w__toggle" data-target="/s-color" data-toggle="collapse" />
                                </div>
                                <div className="shop-w__wrap collapse show" id="s-color">
                                    <ul className="shop-w__list gl-scroll">
                                        <li>
                                            <div className="color__check">
                                                <input type="checkbox" id="jet" />
                                                <label className="color__check-label" htmlFor="jet" style={{ backgroundColor: '/333333' }} /></div>
                                            <span className="shop-w__total-text">(2)</span>
                                        </li>
                                        <li>
                                            <div className="color__check">
                                                <input type="checkbox" id="folly" />
                                                <label className="color__check-label" htmlFor="folly" style={{ backgroundColor: '/FF0055' }} /></div>
                                            <span className="shop-w__total-text">(4)</span>
                                        </li>
                                        <li>
                                            <div className="color__check">
                                                <input type="checkbox" id="yellow" />
                                                <label className="color__check-label" htmlFor="yellow" style={{ backgroundColor: '/FFFF00' }} /></div>
                                            <span className="shop-w__total-text">(6)</span>
                                        </li>
                                        <li>
                                            <div className="color__check">
                                                <input type="checkbox" id="granite-gray" />
                                                <label className="color__check-label" htmlFor="granite-gray" style={{ backgroundColor: '/605F5E' }} /></div>
                                            <span className="shop-w__total-text">(8)</span>
                                        </li>
                                        <li>
                                            <div className="color__check">
                                                <input type="checkbox" id="space-cadet" />
                                                <label className="color__check-label" htmlFor="space-cadet" style={{ backgroundColor: '/1D3461' }} /></div>
                                            <span className="shop-w__total-text">(10)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="u-s-m-b-30">
                            <div className="shop-w shop-w--style">
                                <div className="shop-w__intro-wrap">
                                    <h1 className="shop-w__h">SIZE</h1>
                                    <span className="fas fa-minus collapsed shop-w__toggle" data-target="/s-size" data-toggle="collapse" />
                                </div>
                                <div className="shop-w__wrap collapse" id="s-size">
                                    <ul className="shop-w__list gl-scroll">
                                        <li>
                                            {/*====== Check Box ======*/}
                                            <div className="check-box">
                                                <input type="checkbox" id="xs" />
                                                <div className="check-box__state check-box__state--primary">
                                                    <label className="check-box__label" htmlFor="xs">XS</label></div>
                                            </div>
                                            {/*====== End - Check Box ======*/}
                                            <span className="shop-w__total-text">(2)</span>
                                        </li>
                                        <li>
                                            {/*====== Check Box ======*/}
                                            <div className="check-box">
                                                <input type="checkbox" id="small" />
                                                <div className="check-box__state check-box__state--primary">
                                                    <label className="check-box__label" htmlFor="small">Small</label></div>
                                            </div>
                                            {/*====== End - Check Box ======*/}
                                            <span className="shop-w__total-text">(4)</span>
                                        </li>
                                        <li>
                                            {/*====== Check Box ======*/}
                                            <div className="check-box">
                                                <input type="checkbox" id="medium" />
                                                <div className="check-box__state check-box__state--primary">
                                                    <label className="check-box__label" htmlFor="medium">Medium</label></div>
                                            </div>
                                            {/*====== End - Check Box ======*/}
                                            <span className="shop-w__total-text">(6)</span>
                                        </li>
                                        <li>
                                            {/*====== Check Box ======*/}
                                            <div className="check-box">
                                                <input type="checkbox" id="large" />
                                                <div className="check-box__state check-box__state--primary">
                                                    <label className="check-box__label" htmlFor="large">Large</label></div>
                                            </div>
                                            {/*====== End - Check Box ======*/}
                                            <span className="shop-w__total-text">(8)</span>
                                        </li>
                                        <li>
                                            {/*====== Check Box ======*/}
                                            <div className="check-box">
                                                <input type="checkbox" id="xl" />
                                                <div className="check-box__state check-box__state--primary">
                                                    <label className="check-box__label" htmlFor="xl">XL</label></div>
                                            </div>
                                            {/*====== End - Check Box ======*/}
                                            <span className="shop-w__total-text">(10)</span>
                                        </li>
                                        <li>
                                            {/*====== Check Box ======*/}
                                            <div className="check-box">
                                                <input type="checkbox" id="xxl" />
                                                <div className="check-box__state check-box__state--primary">
                                                    <label className="check-box__label" htmlFor="xxl">XXL</label></div>
                                            </div>
                                            {/*====== End - Check Box ======*/}
                                            <span className="shop-w__total-text">(12)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
