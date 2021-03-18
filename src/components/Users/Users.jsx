import s from './Users.module.css';
import userPhoto from './../../assets/images/user.jpg'


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

    return (
        <div className={s.usersContainer}>  
            <div>
                {pages.map(p => {
                    return <span key={p.id} className={props.currentPage === p && s.selectedPage}
                        onClick={ () => { props.onPageChange(p)} }>{p}</span>
                })}                    
            </div> 
            {
                props.users.map(u => 
                <div key={u.id} className={s.userContainer}>
                    <div className={s.ava}>
                        <div>
                            <img className={s.userPhoto} src={u.photos.small !=null ? u.photos.small : userPhoto} alt="photo"/>
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick={() => props.toggleFollow(u.id)}>Unfollow</button> 
                                : <button onClick={() => props.toggleFollow(u.id)}>Follow</button> }
                        </div>
                    </div>
                    <div className={s.infoContainer}>
                        <div className={s.name}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.location}>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>                        
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Users;