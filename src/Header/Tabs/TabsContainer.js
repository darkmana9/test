import React from "react";
import Tabs from "./Tabs";
import {connect} from "react-redux";
import {getUserData, logout} from "../../redux/auth-reducer";

class TabsContainer extends React.Component {



    render() {
        return (
            <Tabs {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
            login: state.auth.login,
        }
    )
}
export default connect(mapStateToProps, {
     logout
})(TabsContainer)