import { useState } from 'react';
import cn from 'classnames';
import s from './Paginator.module.css';


let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return (
            <div className={s.pagesContainer}>
                { portionNumber > 1 && 
                <button onClick={() => { setPortionNumber(portionNumber - 1) }} >prev</button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return <div key={p.id} className={cn(s.pages,{[s.selectedPage] : props.currentPage === p})}
                        onClick={ () => { props.onPageChange(p)} }>{p}</div>
                })}  
                { portionCount > portionNumber && 
                <button onClick={() => { setPortionNumber(portionNumber + 1) }} >next</button> }                  
            </div>                 
    )
}

export default Paginator;