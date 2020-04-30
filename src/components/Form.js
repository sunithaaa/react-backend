import React, { Component } from 'react'


class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }

    handleUsernameChange=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handlePasswordChange=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    handleSubmit=event=>{
        console.log(`${this.state.email} ${this.state.password}`)
        event.preventdefault()
    }

    render(){
        const {email,password}=this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                   
                    <input 
                        type="text"
                        placeholder="enter email"
                        value={email}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    
                    <input
                    type="password"
                    placeholder="enter password"
                    value={password}
                    onChange={this.handlePasswordChange}
                    />
                </div>
                <div>
                <button type="submit">submit</button>
                </div>
            </form>
        )
    }
}

export default Form;