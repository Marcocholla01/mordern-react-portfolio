import React from 'react';
import { RiCloseLine } from "react-icons/ri";
import "./Modal.css";

const Modal = ({ setIsOpen, demoLink, sourCode }) => {
    const handleExternalNavigation = (url) => {
        if (url) {
            window.open(url, '_blank'); // Open link in a new tab
        } else {
            alert('No link available');
        }
    };

    return (
        <>
            <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <h5 className='heading'>Dialog</h5>
                    </div>
                    <button className='closeBtn' onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className='modalContent'>
                        Click on the Links below to view more?
                    </div>
                    <div className='modalActions'>
                        <div className='actionsContainer'>
                            <button
                                className='deleteBtn'
                                onClick={() => handleExternalNavigation(demoLink)}
                            >
                                View Demo
                            </button>
                            <button
                                className='cancelBtn'
                                onClick={() => handleExternalNavigation(sourCode)}
                            >
                                Source Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
