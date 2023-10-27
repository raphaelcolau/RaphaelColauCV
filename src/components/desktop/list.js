import React, { useContext } from 'react';
import '../../styles/list.css';
import { HoverContext } from '../context/hoverlist.js';

const projects = require('../../projects.json');

export default function Projectlist() {
    const { handleHover } = useContext(HoverContext);
    
    return (
        <div className="list">
            {projects.list.map( (p, index) => {
                return(
                    <div 
                        className="p-element"
                        key={index}
                        onMouseEnter={() => handleHover(p.name)}
                        onMouseLeave={() => handleHover(null)}
                    >

                        <div className="text"> {p.name} </div>

                        <div className="description only-hov" style={{'--order': 1}}> {p.description}</div>

                        <div className="stack only-hov" style={{'--order': 2}}>
                            {p.stack.map( (techno, index) => {
                                return (
                                    <span key={techno} style={{'--order-stack': index}}>
                                        {techno}
                                    </span>
                                )
                            })}
                        </div>

                        <div className="bottom-bar only-hov" style={{'--order': 3}}>
                            {p.src ?
                                <a href={p.src} rel="noreferrer" target="_blank">
                                    SRC
                                </a>
                            : <></>}
                            <a href={p.url} rel="noreferrer" target="_blank">
                                LINK
                            </a>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}