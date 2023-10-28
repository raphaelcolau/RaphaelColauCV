import React from 'react';
import '../styles/desktop.css';
import SideBar from '../components/desktop/sidebar';
import Projectlist from '../components/desktop/list';
import Logo from '../components/logo';
import Three from '../components/desktop/three';
import HoverProvider from '../components/context/hoverlist';

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

                        <p className='title'>Freelance Developer</p>
                        <p>Hello, I'm Raphaël</p>
                        <p>I'm a Full Stack Developer from Paris.</p>
                        <p>I work primarily with <code>Javascript</code> and I specialize in the <code>MERN</code> stack.</p>
                        <p>I also enjoy design, and Adobe XD holds no secrets for me.</p>
                        <p>I am currently a freelance developer.</p>
                        <p>Formerly a developer at <code>Opasenior</code></p>
                            
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