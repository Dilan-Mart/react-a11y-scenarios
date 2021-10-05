import React, { useEffect } from 'react'

const Scenario3 = () => {
    useEffect(()=>{
        const ele = document.getElementById('alertBtn')
    
        const clickHandler=()=>alert("Button clicked!")
    
        ele.addEventListener('click',clickHandler)
    
        ele.addEventListener('keyup',(event)=>{
            if(event.keyCode === 13){
                event.preventDefault();
                clickHandler()
            }
        })
    },[])

    return (
        <div className="scenario">
            <h1>Div as button</h1>
            {/* <button id="alertBtn">I'm a button</button> */}
            <div id="alertBtn" tabIndex="0" role="button">I'm a div</div>
        </div>
    )
}

export default Scenario3
