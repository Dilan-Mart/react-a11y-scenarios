import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'

const Scenario1 = () => {
    
    const [showModal,setShowModal] = useState(false)
    
    return (
        <div className="scenario">
            <h1>click to show Modal</h1>
            <button id="modaltriggerBtn" onClick={()=>setShowModal(true)}>Show Modal</button>
            <Modal show={showModal} onHide={()=>setShowModal(false)}>  
                <Modal.Header closeButton>This is a Modal Heading</Modal.Header>  
                <Modal.Body>This is a Modal Body</Modal.Body>  
            </Modal>
        </div>
    )
}

export default Scenario1
