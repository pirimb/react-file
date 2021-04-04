import Preloader from "../../common/Preloader/preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from '../../../assets/images/user.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onPhotoSelect = (e) =>{
    if (e.target.files.length) {
        props.updatePhoto(e.target.files[0])
    }
    }

    const onSubmit = (formData) => {
        props.saveChangedProfileData(formData).then(() => {
            setEditMode(false)
        })
    }

  return (
        <div className={s.profileInfo}>
            {/* <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" /> */}
            <div className={s.descriptionBlock}>
                <img className={s.profilePhoto} src={props.profile.photos.large || userPhoto }  alt="ava"/>
                <div className={s.choosePhotoButton}>{props.isOwner && <input type={"file"} onChange={ onPhotoSelect } />}</div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} /> 
            </div>
            <div> 
                {editMode 
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> 
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)} />
                }     
            </div>
        </div>
    );
};

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div> 
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'} 
            </div>
            { props.profile.lookingForAJob 
            && <div>
                <b>My skills</b>: {props.profile.lookingForAJobDescription}
            </div>
            }
            {props.isOwner 
            && <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>}
            <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </div>
    )
}

export const Contact = (props) => {
    return <div className={`${s.contact} + ${!props.contactValue && s.displayNone}` }><b>{props.contactTitle}: </b>{props.contactValue}</div>
}


export default ProfileInfo;
