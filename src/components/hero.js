import React from 'react'

const Hero = React.forwardRef((props,ref) => {
    return (
        <div ref={ref}>
            I'm a hero
        </div>
    )
})

export default Hero
