import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import '../Style/slick.css'
import '../Style/style1.css'

function PrevButton({ onClick }) {
    return <button onClick={onClick} className="slick-prev"><i className="fas fa-chevron-left"></i></button>
}
function NextButton({ onClick }) {
    return <button onClick={onClick} className="slick-next"><i className="fas fa-chevron-right"></i></button>
}

export default function Banner() {

    const slideItems = [
        {
            img: "img-slider-2.png",
            title: "Tính Năng quản lý và thông báo sản phẩm thông minh",
            content: "Thời Trang Trẻ",
            link: "/quan-ao"
        },
        {
            img: "slide-8.jpg",
            title: "Tính Năng quản lý và thông báo sản phẩm thông minh",
            content: "Sách",
            link: "/sach"
        },
        {
            img: "img-slider-2.png",
            title: "Tính Năng quản lý và thông báo sản phẩm thông minh",
            content: "Đồ điện tử",
            link: "/sach"
        },
    ]

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
    }

    return (

        <>
            <Slider {...settings}>
                {
                    slideItems.map((slide, key) => {
                        return (
                            <section className="features-slide" key={key}>
                                <div className="features-slide-item" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(/images/slider/${slide.img})` }} >
                                {/* <div className="features-slide-item"> */}
                                    {/* <div className="slide-img">
                                        <img src={`/images/slider/${slide.img}`} alt="" />
                                    </div> */}
                                    <div className="features-slide-content text-center">
                                        <h3 className="slide-sub-text">
                                            {slide.title}
                                        </h3>
                                        <p className="slide-title element-title">
                                            {slide.content}
                                        </p>
                                        <Link className="btn btn-slide btn-more" to={slide.link}>
                                            Xem tất cả
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        )
                    })
                }
            </Slider >
        </>
    )
}
