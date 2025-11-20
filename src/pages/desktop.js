import React from 'react';
import '../styles/desktop.css';
import SideBar from '../components/desktop/sidebar';
import Projectlist from '../components/desktop/list';
import Logo from '../components/logo';
import Three from '../components/desktop/three';
import HoverProvider from '../components/context/hoverlist';
import ProfileIntro from '../components/profileIntro';

//TODO Changer la flèche de My Works

export default function PageDesktop() {
    return(
        <HoverProvider>
            <div className="desktop-display">
                <div className="frame"></div>
                <div className="topleft-container">
                    <div className='content-bar'></div>
                    <div className="content">
                        
                        <div className='logo-container'>
                            <Logo />
                        </div>

                        <ProfileIntro />

                    </div>
                </div>

                <Three />

                <div className="content-container">

                    <div className="left">
                        My Works →
                    </div>
                
                    <div className="right">
                        <div className="project-list">
                            <Projectlist />
                        </div>
                    </div>

                </div>
                <SideBar />
            </div>
        </HoverProvider>
    )
}