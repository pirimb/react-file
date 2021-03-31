import s from './Users.module.css';
import userPhoto from './../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';


let User = (props) => {
    let u = props.user
    return (
            <div className={s.userContainer}>
                <div className={s.ava}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.userPhoto} src={u.photos.small !=null ? u.photos.small : userPhoto} alt="photo"/>
                        </NavLink>
                    </div>
                    <div className={s.btnContainer}>
                        {u.followed 
                            ? <button className={s.btn} disabled={props.followInProgress.some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id) }}>Unfollow</button> 

                            : <button className={s.btn} disabled={props.followInProgress.some(id => id === u.id)} 
                                onClick={() => { props.follow(u.id) }}>Follow</button> }
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

export default User;