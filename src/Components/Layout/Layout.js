import React ,{Component}from 'react';
import Auxx from '../../hoc/Auxx'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class  Layout extends Component{
    state={
        showSideDrawer :false
    }
    sideDrawerClosedHandler =()=>{
        this.setState({showSideDrawer: false});
    }
    sideDrawToggleHandler=()=>{
        this.setState((prevState)=> { 
            return {showSideDrawer: !prevState.showSideDrawer};
    })}
    render(){
        return(
<Auxx>
    <Toolbar DrawToggleClicked={this.sideDrawToggleHandler}/>
    <SideDrawer open={this.state.showSideDrawer}
    closed={this.sideDrawerClosedHandler}/>
    <main className="Content">
        {this.props.children}
    </main>
    </Auxx>
        )
    }
} 
export default Layout;