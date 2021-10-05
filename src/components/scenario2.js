import React,{useEffect} from 'react'

const Scenario2 = () => {
    useEffect(()=>{
        const input = document.getElementById('inputField')
        input.addEventListener('keyup',(event)=>{
            if(event.keyCode === 13){
                event.preventDefault();
                document.getElementById('alertBtn').click()
            }
        })
    },[])

    return (
        <div className="scenario">
            <h1>Trigger button click on Enter</h1>
            <input id="inputField" placeholder="type something..." />
            <button id="alertBtn" onClick={()=>alert("Button clicked!")}>button</button>
        </div>
    )
}

export default Scenario2
