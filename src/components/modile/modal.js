import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Projectmodal(p) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    // const ref = React.useRef(null);

    // function openModal() {setIsOpen(true);}
    function closeModal(e) {
        const openModal = document.getElementsByClassName("ReactModal__Content--after-open");
        const openOverlay = document.getElementsByClassName("ReactModal__Overlay--after-open");

        openModal[0].classList.remove("ReactModal__Content--after-open")
        openOverlay[0].classList.remove("ReactModal__Overlay--after-open")
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    }

    function test(e) {
        e.contentEl.classList.add('Test')
    }

    return(
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="Modal"
                onAfterOpen={test}
                overlayClassName="Overlay"
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