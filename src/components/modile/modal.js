import React from 'react';
import Modal from 'react-modal';

export default function Projectmodal(p) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // function openModal() {setIsOpen(true);}
    function closeModal() {setIsOpen(false);}

    return(
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <div>
                    Je fais un test
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