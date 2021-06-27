import React, {Component} from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUsersProfileAC} from "../../../redux/profile-reducer";


class ProfileContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUsersProfile(res.data);
            })
    }

    render() {
        const {profile} = this.props;

        return <Profile profile={profile}/>;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const mapDispatchToProps = (dispatch) => ({
    setUsersProfile: (profile) => {
        let action = setUsersProfileAC(profile);
        dispatch(action)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);