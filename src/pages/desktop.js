import React from 'react';
import '../styles/desktop.css';
import SideBar from '../components/desktop/sidebar';
import Projectlist from '../components/desktop/list';
import Logo from '../components/logo';

export default class PageDesktop extends React.Component {

    render() {
        return(
            <div className="desktop-display">
                <div className="frame"></div>
                <div className="topleft-container">
                    <div className="content">
                        <div className='logo-container'>
                            <Logo />
                        </div>
                    </div>
                </div>
                <div className="content-container">
                    <div className="left">
                        My Works
                    </div>
                    <div className="right">
                        <div className="project-list">
                            <Projectlist />
                        </div>
                    </div>
                </div>
                <SideBar />
            </div>
        )
    }
}