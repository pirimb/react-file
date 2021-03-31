import s from './Paginator.module.css';


let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

    return (
            <div className={s.pagesContainer}>
                {pages.map(p => {
                    return <span key={p.id} className={s.pages + ' ' + (props.currentPage === p && s.selectedPage)}
                        onClick={ () => { props.onPageChange(p)} }>{p}</span>
                })}                    
            </div>                 
    )
}

export default Paginator;