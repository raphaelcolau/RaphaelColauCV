import React, { useState } from 'react';
import '../styles/logo.css';

export default function Logo() {
    const [animate, setAnimate] = useState('');
    const [hasBeenAnimate, setBeenAnimate] = useState(false);

    setTimeout(() => {
        if (!hasBeenAnimate) {
            setAnimate('shake');
            setTimeout(() => {
                setAnimate('');
            }, 1000);
        }
        setBeenAnimate(true);
    }, 5000);

    return(
        <div className="logo">
            <div className='left' style={{ '--order': '100ms'}}></div>
            <div className={'top ' + animate}>
                <span style={{ '--order': '100ms'}}>R</span>
                <span style={{ '--order': '200ms'}}>A</span>
                <span style={{ '--order': '300ms'}}>P</span>
                <span style={{ '--order': '400ms'}}>H</span>
                <span style={{ '--order': '500ms'}}>A</span>
                <span style={{ '--order': '600ms'}}>E</span>
                <span style={{ '--order': '700ms'}}>L</span>
            </div>
            <div className={'bottom ' + animate}>
                <span style={{ '--order': '100ms'}}>C</span>
                <span style={{ '--order': '200ms'}}>O</span>
                <span style={{ '--order': '300ms'}}>L</span>
                <span style={{ '--order': '400ms'}}>A</span>
                <span style={{ '--order': '500ms'}}>U</span>
            </div>
        </div>
    )
}