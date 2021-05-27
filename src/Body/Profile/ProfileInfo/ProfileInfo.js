import React from "react";
import Preloader from "../../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return(
            <div>
                  <img  src={props.profile.photos.large }/>
                <div>User id = {props.profile.userId}</div>
                <div> Full name = {props.profile.fullName}</div>
                <ProfileStatus  status={props.status}  updateStatus={props.updateStatus}/>


            </div>
    )
}

export default ProfileInfo