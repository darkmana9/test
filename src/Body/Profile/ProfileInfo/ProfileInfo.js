import React from "react";
import Preloader from "../../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return(
            <div>
                <div>User id = {props.profile.userId}</div>
                <div> Full name = {props.profile.fullName}</div>
              <img  src={props.profile.photos.large }/>

            </div>
    )
}

export default ProfileInfo