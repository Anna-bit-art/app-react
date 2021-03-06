import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {authMe} from "../../redux/authReducer";

class HeaderClass extends React.Component {
    componentDidMount(){
        this.props.authMe();
    }

    render = () => {
        return <>
            <Header {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, {authMe}) (HeaderClass);
export default HeaderContainer;
