
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'



class About extends Component {

    render() {

        return (
            <div className='section-Sp about'>
                <div className='section-about-header'>
                    <h1>Truyền thông nói gì về Dr.Johnny Sins</h1>
                    <div className='section-about-content'>
                        <div className='about-left'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/yrpFToCoxwM?si=vYJRnNPQi9GBwW0K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className='about-left'></div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
