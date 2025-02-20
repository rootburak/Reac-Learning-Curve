import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import React,{ Component } from 'react'
import Names from './Names'

export default class App extends Component{

    constructor(prop){
    super(prop)
    this.state = {
        name:{1:"burak",2:"emre",3:"efe"},
        counter:1,
        sendName:""
    }

    }
    
    showName = () => {
        let lenNames = Object.keys(this.state.name).length
        lenNames += 1
        if(lenNames == this.state.counter){
            this.setState({counter:1})
        }
   this.setState(prevState => ({
        sendName: prevState.name[prevState.counter],
        counter: prevState.counter+1
   }));
}
    

    render(){

        return(
        <div>
            <Nav />            
            <Names name={this.state.sendName}/>
            <p onClick={this.showName}>new name</p>
        
        </div>
        )
    }

}

