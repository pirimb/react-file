import Preloader from "../../common/Preloader/preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from '../../../assets/images/user.jpg'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  let contacts = [props.profile.contacts]

  

  return (
    <div className={s.profileInfo}>
      {/* <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" /> */}
      <div className={s.descriptionBlock}>
        <img className={s.profilePhoto} src={props.profile.photos.large ? props.profile.photos.large : userPhoto }  alt="ava"/>
        <ProfileStatus status={'hello everyone'}/> 
        <div>
          {/* <div className={s.userInfo}>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
          </div> */}
          {contacts.map(c => {<div>{c}</div>})}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
