import React, { useEffect, useRef } from 'react'
import Hero from './hero'

const Scenario4 = () => {
    const forwardRef = useRef(null)
    useEffect(()=>{
        const heroComponent = forwardRef?.current
        heroComponent.setAttribute('role','button')
        heroComponent.setAttribute('tabIndex','0')
    },[])

    return (
        <div className="scenario">
            <h1>Make a external component act as button using ref</h1>
            <Hero ref={forwardRef}/>
        </div>
    )
}

export default Scenario4
