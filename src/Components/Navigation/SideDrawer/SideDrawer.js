import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Toolbar/NavigationItems/Navigationitems'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxx from '../../../hoc/Auxx'
import { checkPropTypes } from 'prop-types';
const sideDrawer=(props)=>{
    let attachedclasses=['SideDrawer','Close']
    if(props.open){
        attachedclasses=['SideDrawer','Open']

    }
    return(
        <Auxx>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedclasses.join(' ')}>
           <div className="Logo">
               <Logo height="2rem"/>
           </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Auxx>
    );

};
export default sideDrawer
