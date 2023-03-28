const Pagination = (
    {
        items, 
        foodsPerPage, 
        currentPage, 
        setCurrentPage, 
        handleClick, 
        displayLeft, 
        displayRight
    }
) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(items / foodsPerPage); i++){
        pageNumbers.push(i);
    }

    //right shift the page
    const rightShift = () => {
        if(currentPage !== Math.ceil(items / foodsPerPage)){
            setCurrentPage(currentPage + 1)
        }
    }

    //left shift the page
    const leftShift = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <ul className='pages'>
            {displayLeft ? <i className="fa-solid fa-arrow-left arrow" onClick={leftShift}></i> : ''}
            {/* <i class="fa-solid fa-arrow-left arrow" onClick={leftShift}></i> */}
            {
            pageNumbers.map(pageNumber => {
                return (
                <li 
                    key={pageNumber} 
                    className={currentPage === pageNumber ? 'page active' : 'page'} 
                    onClick={() => handleClick(pageNumber)}
                >
                    {pageNumber}
                </li>
                )
            })
            }
            {displayRight ? <i className="fa-solid fa-arrow-right arrow" onClick={rightShift}></i> : ''}
            {/* <i class="fa-solid fa-arrow-right arrow" onClick={rightShift}></i> */}
    </ul>
    )
}

export default Pagination