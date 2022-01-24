import React from 'react'
import  './Backdrop.css';

const Backdrop = ({show, click}) => {
    return show && (
        //   onclick event listener 
        <div className='backdrop' onClick={click}>
            
        </div>
    )
}

export default Backdrop
