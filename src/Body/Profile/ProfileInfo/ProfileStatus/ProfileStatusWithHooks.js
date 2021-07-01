import React, {useState} from 'react'

export const ProfileStatusWithHooks = (props) => {

    let stateWithSetState = useState(false);
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1]

    return (
        <>
            {!editMode && <div>
            <span>{props.status || "No status"}</span>
        </div>}

            {editMode &&
            <div>
            <input></input>
        </div>}
        </>
    )

}