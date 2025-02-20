import React,{ Component } from 'react'

export default class Nav extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:"burak",
            counter:0
        }
    this.arttir = this.arttir.bind(this);
        
    }
    arttir(){
        this.setState({counter:this.state.counter+1})
    }
    eksilt = ()=>{
        this.setState({counter:this.state.counter-1})
    }

    render(){
       return(
        <div>

            <h2> {this.props.title} </h2>
            <p>{this.state.name}</p>        
            <p>click count {this.state.counter} </p>
            <p onClick={this.arttir}>arttır</p> 
           <p onClick={this.eksilt}>eksilt</p>
           </div>
       )

    }
}
