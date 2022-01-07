import React from 'react'

export default function Footer() {
    return (
        <section style={{ paddingBottom: '15px' }} className="section footer-widgets bg-lighter-grey">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="widget widget-info">
                                    <header className="widget-heading-2">
                                        <h4><i className="fas fa-question-circle"></i>Liên Hệ Chúng Tôi</h4>
                                    </header>
                                    <p>Mở Cửa</p>
                                    <nav>
                                        <ul>
                                            <li><i className="fas fa-phone"></i>(028).226.77774</li>
                                            <li><a href="/"><i className="fas fa-envelope"></i>hotro@shopxanh.com</a></li>
                                            <li><a href="/"><i className="fas fa-map-marker-alt"></i>Tầng 5, Tòa nhà 132-134 Điện Biên Phủ, Phường Đakao Q1, TP Sài Gòn</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="widget widget-links">
                                    <header className="widget-heading">
                                        <h4>Về Chúng Tôi</h4>
                                    </header>
                                    <nav className="widget widget-links">
                                        <ul className="list-3">
                                            <li>
                                                <i className="fas fa-hand-point-right"></i>
                                                <a title="Tạo website miễn phí với Shop Xanh" href="https://shopxanh.com/"> Tạo website miễn phí</a>
                                            </li>
                                            <li>
                                                <i className="fas fa-hand-point-right"></i>
                                                <a title="Kho Giao Diện" href="https://shopxanh.com/kho-giao-dien.html"> Kho giao diện miễn phí</a></li>
                                            <li>
                                                <i className="fas fa-hand-point-right"></i>
                                                <a title="Giới thiệu" href="https://shopxanh.com/gioi-thieu.html"> Giới thiệu Shop Xanh</a></li>
                                            <li>
                                                <i className="fas fa-hand-point-right"></i>
                                                <a title="Tính năng website mạnh mẽ" href="https://shopxanh.com/website-mien-phi.html"> Tính năng nổi bật</a></li>
                                            <li>
                                                <i className="fas fa-hand-point-right"></i>
                                                <a title="Chiến lược phát triển" href="https://shopxanh.com/chien-luoc.html"> Chiến lược phát triển</a></li>
                                            <li>
                                                <i className="fas fa-hand-point-right"></i>
                                                <a title="Hướng dẫn sử dụng" href="https://shopxanh.com/tutorial.html"> Hướng dẫn sử dụng</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div style={{ padding: '0px' }} className="col-sm-3">
                                <div className="widget widget-links">
                                    <header className="widget-heading">
                                        <h4 style={{ whiteSpace: 'nowrap' }}>Danh Mục Sản Phẩm</h4>
                                    </header>
                                    <nav className="widget widget-links">
                                        <ul className="list-3">
                                            <li style={{ overflow: 'hidden' }}>
                                                <i className="fas fa-hand-point-right"></i>
                                                <a title="Phụ Kiện Perfume" style={{ whiteSpace: 'nowrap' }} href="../phu-kien-perfume-448_dm.html">Phụ Kiện Perfume</a></li>
                                            <li style={{ overflow: 'hidden' }}>
                                                <i className="fas fa-hand-point-right"></i>
                                                <a title="Mỹ Phẩm Perfume" style={{ whiteSpace: 'nowrap' }} href="../my-pham-perfume-448_dm.html">Mỹ Phẩm Perfume</a></li>
                                            <li style={{ overflow: 'hidden' }}>
                                                <i className="fas fa-hand-point-right"></i>
                                                <a title="Nước Hoa Perfume" style={{ whiteSpace: 'nowrap' }} href="../nuoc-hoa-perfume-448_dm.html">Nước Hoa Perfume</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: '0px' }} className="col-sm-3 pull-right">
                        <div className="widget widget-contact">
                            {/* <div className="fb-page" data-href="https://www.facebook.com/websinhthai/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                <div className="fb-page-box">
                                    <div className="fb-page fb_iframe_widget" data-href="https://www.facebook.com/websinhthai/" data-height={300} data-width={300} data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-tabs="messages" data-show-posts="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=293&height=300&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fwebsinhthai%2F&locale=vi_VN&sdk=joey&show_facepile=false&show_posts=false&small_header=true&tabs=messages&width=300"><span style={{ verticalAlign: 'bottom', width: '293px', height: '300px' }}><iframe name="f2a7b778dbd35" width="300px" height="300px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.11/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2983e1fea4d0c%26domain%3Dcanifaweb.shopxanh.com%26origin%3Dhttps%253A%252F%252Fcanifaweb.shopxanh.com%252Ff2e3dc541a65184%26relation%3Dparent.parent&container_width=293&height=300&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fwebsinhthai%2F&locale=vi_VN&sdk=joey&show_facepile=false&show_posts=false&small_header=true&tabs=messages&width=300" style={{ border: 'none', visibility: 'visible', width: '293px', height: '300px' }} className /></span></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-12 hidden-xs">
                    <hr />
                    <div style={{}} className="col-sm-6 col-xs-12 col-md-6 pull-left">
                        <span style={{ fontSize: '12px', color: '#888' }}>© 2015 - 2021 All right reserved | <a style={{ color: '#888' }} href="http://shopxanh.com"><strong>shopxanh.com</strong></a> - Free Website.</span>
                    </div>
                    <ul className="list-3 list-inline">
                        <li><a href="/" title="ShopXanh Themes">Responsive Themes</a></li>
                        <li><a href="/" title="ShopXanh Themes">Free template</a></li>
                        <li><a href="/" title="ShopXanh Themes"><span style={{ color: '#e32a53' }}>Perfume Fashion</span> Template</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
