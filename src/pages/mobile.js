import React from 'react';
import Logo from '../components/logo';
import Linkbar from '../components/modile/linkbar';
import List from '../components/modile/list';
import '../styles/mobile.css';

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
                    <p className='title'>Freelance Developer</p>
                    <p>Hello, I'm Raphaël</p>
                    <p>I'm a Full Stack Developer from Paris.</p>
                    <p>I work primarily with <code>Javascript</code> and I specialize in the <code>MERN</code> stack.</p>
                    <p>I also enjoy design, and Adobe XD holds no secrets for me.</p>
                    <p>I am currently a freelance developer.</p>
                    <p>Formerly a developer at <code>Opasenior</code></p>
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