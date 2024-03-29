import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, doctorMenu } from './menuApp';
import './Header.scss';
import { languages, USER_ROLE } from "../../utils/constant"
import _ from 'lodash';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuApp: []
        }
    }
    switchVE = (language) => {
        this.props.switchVEAppRedux(language)
    }
    componentDidMount() {
        let { userInfo } = this.props;
        let menu = []
        if (userInfo && !_.isEmpty(userInfo)) {
            let role = userInfo.roleId
            if (role === USER_ROLE.ADMIN) {
                menu = adminMenu
            }
            if (role === USER_ROLE.DOCTOR) {
                menu = doctorMenu
            }

        }
        this.setState({
            menuApp: menu
        })
        console.log('check userInfo', this.props.userInfo)
    }
    render() {
        const { processLogout, language, userInfo } = this.props;
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={this.state.menuApp} />
                </div>
                <div className='languages'>
                    <span className='welcum'>Xin chào {userInfo && userInfo.firstName ? userInfo.firstName : ''}</span>
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title="log out">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>


            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        switchVEAppRedux: (language) => dispatch(actions.switchVEApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
