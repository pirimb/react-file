import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
        <ProfileInfo profile={props.profile}
                    status={props.status} 
                    updateStatus={props.updateStatus} 
                    isOwner={props.isOwner}
                    updatePhoto={props.updatePhoto} 
                    saveChangedProfileData={props.saveChangedProfileData} />
        <MyPostsContainer />
    </div>
  );
};

export default Profile;
