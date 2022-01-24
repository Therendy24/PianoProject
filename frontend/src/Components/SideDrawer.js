import React from 'react'
import './SideDrawer.css';
import {Link} from 'react-router-dom';



const SideDrawer = ({show,click}) => {
    // creates an array sideDrawerClass of styles 
    const sideDrawerClass = ['sidedrawer'];
    // if show is false push the show style to the array of sideDrawerClass
    if(show) {
        sideDrawerClass.push("show");
    }
    return (
        <div className={sideDrawerClass.join(' ')} >
            {/* the onclick eventlistener will make the setsidetoggle false */}
            <ul className='sidedrawer__links' onClick={click}>
                <li>
                  <Link to='/cart'>
                  <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart
                            <span className='sidedrawer__cartbadge'>0</span> 
                        </span> 
                  
                  </Link>
                </li>
                <li>
                    <Link to='/'>
                      Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer
