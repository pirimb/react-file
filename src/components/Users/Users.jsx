import s from './Users.module.css';
import userPhoto from './../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from './../common/Paginator/Paginator';
import User from './User';


let Users = (props) => {

    return (
        <div className={s.usersContainer}> 
            <Paginator currentPage={props.currentPage} onPageChange={props.onPageChange} 
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />             
            <div>
                { props.users.map(u => <User user={u} key={u.id} 
                                            followInProgress={props.followInProgress} 
                                            unfollow={props.unfollow} 
                                            follow={props.follow} />            
                )}
            </div>
        </div>
    )
}

export default Users;