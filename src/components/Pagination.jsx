import React from 'react';
function Pagination(props) {
    const { page, limit, totalRows, onChangePage } = props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalRows / limit); i++) {
        pageNumbers.push(i);
    }

    const handleChangePage = (newPage) => {
        if (onChangePage) {
            onChangePage(newPage);
        }
    }

    return (
        <>


            <ul className="shop-p__pagination">
                {
                    pageNumbers.map((number, index) => {
                        return (
                            <li className={number == page ? "is-active" : ""} key={index} onClick={() => handleChangePage(number)}>
                                <a>{number}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default Pagination;