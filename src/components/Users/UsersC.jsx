import s from './Users.module.css';
import React from "react";
import * as axios from 'axios';
import userPhoto from './../../assets/images/user.jpg'

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { 
                this.props.setUsers(response.data.items);
            });
        }
    }

    render() {
        return (
            <div className={s.usersContainer}>
                <button onClick={ this.getUsers }>Get Users</button>
    
                {
                    this.props.users.map(u => 
                    <div key={u.id} className={s.userContainer}>
                        <div key={u.id} className={s.ava}>
                            <div>
                                <img className={s.userPhoto} src={u.photos.small !=null ?u.photos.small : userPhoto} alt="photo"/>
                            </div>
                            <div>
                                {u.followed 
                                    ? <button onClick={() => this.props.toggleFollow(u.id)}>Unfollow</button> 
                                    : <button onClick={() => this.props.toggleFollow(u.id)}>Follow</button> }
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
}

export default Users;