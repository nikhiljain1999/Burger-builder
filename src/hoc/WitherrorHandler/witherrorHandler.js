import React,{Component} from 'react';
import Model from '../../Components/UI/Modal/Modal';
import Auxx from '../Auxx'
import Axios from 'axios'
const withErrorHandler =(Wrappedcomponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
        componentWillMount(){
            this.requestInterceptor =Axios.interceptors.request.use(req =>{
                this.setState({error:null});
                return req;
            }); 
            this.responseIntercceptor = Axios.interceptors.response.use (res => res,error=>{
                this.setState({error:error});
            });
        }
        componentWillUnmount(){
            console.log("unmount work!!!");
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseIntercceptor)

        }
        errorConfirmedHandler =()=>{
           this.setState({error:null}) ;
           
        }
        render(){
            return (
                <Auxx>
                    <Model show ={this.state.error}
                    modelClosed={this.errorConfirmedHandler}>
                        {this.state.error? this.state.error.message:null}
                    </Model>
                <Wrappedcomponent {...this.props} />
                </Auxx>
            );
          }     
         }
}

export default withErrorHandler;