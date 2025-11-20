import React from 'react';
import Logo from '../components/logo';
import Linkbar from '../components/modile/linkbar';
import List from '../components/modile/list';
import '../styles/mobile.css';
import ProfileIntro from '../components/profileIntro';

export default function PageMobile(props) {
    return(
        <div className="mobile-display" style={{ '--window-width': props.dimensions.width }}>
            <div className="frame" />

            <div className='top'>

                <div className='after-logo'>
                    <div className='logo-container'>
                        <Logo />
                    </div>
                </div>

                <div className='description'>
                    <ProfileIntro />
                </div>

            </div>

            <div className='bottom'>
                <div className="link-bar">
                    <Linkbar />
                </div>
                <div className='content-list'>
                    <div className='left'>
                        <List />
                    </div>
                    <div className='right' />
                </div>
            </div>

        </div>
    )
}