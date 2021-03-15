import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from './NavigationItems/Navigationitems'
import DrawToggle from '../SideDrawer/SideDrawerToggle/DrawerToggle'
const toolbar =(props)=>(
    <header className='Toolbar'>
        <DrawToggle click={props.DrawToggleClicked} />
        <div>
            <Logo height="1.5rem"/>
        </div>
        <nav
         className='DesktopOnly'
        >
        <NavigationItems />
        </nav>
    </header>
);
export default toolbar;