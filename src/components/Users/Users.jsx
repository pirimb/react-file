import s from './Users.module.css'
import React from "react";


let Users = (props) => {

    if (props.users.length === 0){
        props.setUsers([
            {id:1, photoUrl: 'https://i.pinimg.com/736x/e1/e7/ce/e1e7ce5bd62b093c08d00d602f88f033.jpg', followed: false, fullName: 'Kane', status: 'im a boss', location: {city: 'Baku', country: 'Azerbaijan'}},
            {id:2, photoUrl: 'https://i.pinimg.com/736x/e1/e7/ce/e1e7ce5bd62b093c08d00d602f88f033.jpg', followed: true, fullName: 'Andrew', status: 'im a boss', location: {city: 'Moscow', country: 'Russia'}},
            {id:3, photoUrl: 'https://i.pinimg.com/736x/e1/e7/ce/e1e7ce5bd62b093c08d00d602f88f033.jpg', followed: true, fullName: 'Sasha', status: 'im a boss', location: {city: 'Kiev', country: 'Ukraine'}},
            {id:4, photoUrl: 'https://i.pinimg.com/736x/e1/e7/ce/e1e7ce5bd62b093c08d00d602f88f033.jpg', followed: false, fullName: 'Elsie', status: 'im a boss', location: {city: 'Baku', country: 'Azerbaijan'}},
        ])
    }

    return (
        <div className={s.usersContainer}>
            {
                props.users.map(u => 
                <div key={u.id} className={s.userContainer}>
                    <div key={u.id} className={s.ava}>
                        <div>
                            <img className={s.userPhoto} src={u.photoUrl} alt="photo"/>
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick={() => props.toggleFollow(u.id)}>Unfollow</button> 
                                : <button onClick={() => props.toggleFollow(u.id)}>Follow</button> }
                        </div>
                    </div>
                    <div className={s.infoContainer}>
                        <div className={s.name}>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.location}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>                        
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Users;