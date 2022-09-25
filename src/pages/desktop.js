import React from 'react';
import '../styles/desktop.css';
import SideBar from '../components/desktop/sidebar';
import Projectlist from '../components/desktop/list';
import Logo from '../components/logo';

export default class PageDesktop extends React.Component {

    

    render() {
        return(console.log('Je suis un test'),
            <div className="desktop-display">
                <div className="frame"></div>
                <div className="topleft-container">
                    <div className="content">
                        <div className='logo-container'>
                            <Logo />
                        </div>
                        <p className='title'>Freelance developer</p>
                        <p>Hello, I'm Raphaël</p>
                        <p>I'm a Fullstack Developper from Paris.</p>
                        <p>I work mostly with <code>Javascript</code> I am working on the <code>Mern</code> stack</p>
                        <p>I also enjoy design and Adobe Xd holds no secrets for me.</p>
                        <p>I am currently a freelance developer.</p>
                        <p>Formerly a developer at <code>Opasenior</code></p>
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