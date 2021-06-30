import React from 'react';
import c from './App.module.css';
import Header from "./Header/Header";
import {BrowserRouter} from "react-router-dom";
import {Body} from "./Body/Body";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <img src='https://www.davno.ru/assets/images/cards/big/birthday-1124.gif'/>
        }
        return (
            <BrowserRouter>
        <div className = {c.wrapper}>
            <Header/>
        <Body dispatch = {this.props.dispatch} state = {this.props.state} store = {this.props.store}/>

        </div>
</BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose(
    connect(mapStateToProps, {initializeApp})(App),
);

