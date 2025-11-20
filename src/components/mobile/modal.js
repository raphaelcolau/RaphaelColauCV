import React, { useRef, useState } from 'react';
import Modal from 'react-modal';

//TODO Corriger le problème des bordures rondes

Modal.setAppElement('#root');

export default function Projectmodal(p) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const overlayRef = useRef(null);
    const closeDelay = 300;

    const handleAfterOpen = () => {
        const contentNode = contentRef.current;
        const overlayNode = overlayRef.current;

        if (contentNode) {
            contentNode.classList.remove("ReactModal__Content--closing");
        }

        if (overlayNode) {
            overlayNode.classList.add("ReactModal__Overlay--after-open");
        }
    };

    const handleRequestClose = () => {
        const contentNode = contentRef.current;
        const overlayNode = overlayRef.current;

        if (!contentNode && !overlayNode) {
            setIsOpen(false);
            return;
        }

        if (contentNode) {
            contentNode.classList.add("ReactModal__Content--closing");
        }

        if (overlayNode) {
            overlayNode.classList.remove("ReactModal__Overlay--after-open");
        }

        setTimeout(() => {
            setIsOpen(false);
        }, closeDelay);
    };

    return(
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={handleAfterOpen}
                onRequestClose={handleRequestClose}
                className="Modal"
                overlayClassName="Overlay"
                contentRef={(node) => { contentRef.current = node; }}
                overlayRef={(node) => { overlayRef.current = node; }}
            >
                <div>
                    <div className="text"> {p.project.name} </div>

                    <div className="description only-hov" style={{'--order': 1}}> {p.project.description}</div>

                    <div className="stack only-hov" style={{'--order': 2}}>
                        {p.project.stack.map( (techno, index) => {
                            return (
                                <span key={techno} style={{'--order-stack': index}}>
                                    {techno}
                                </span>
                            )
                        })}
                    </div>

                    <div className="bottom-bar only-hov" style={{'--order': 3}}>
                        {p.project.src ?
                            <a href={p.project.src} rel="noreferrer" target="_blank">
                                SRC
                            </a>
                        : <></>}
                        <a href={p.project.url} rel="noreferrer" target="_blank">
                            LINK
                        </a>
                    </div>
                </div>
            </Modal>

            <div className='m-btn-dragzone' style={{'--scl': Number(p.positionX)}}
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <p className='btn-text'>MORE INFO</p>
            </div>
        </>
    )
}