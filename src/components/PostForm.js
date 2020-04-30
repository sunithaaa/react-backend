import React, { Component } from 'react'
import MoiBit from '@moibitjs/core'

class PostForm extends Component{
    constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)   
}
  onChange=(e)=>
  {
    this.setState({
        // value: e.target.value
        
    })
    console.log(this.state.data)

  }
    
   async onSubmit(e) 
    {
       e.preventDefault()
        const files = new MoiBit('https://kfs5.moibit.io',
        {
        api_key : '12D3KooWSUoFLi94REHfmkeNkiyABa4jmwBRsdczZndWctcFemLQ' ,
        api_secret : '08011240a36f95e7d57365c5cb9d54e1a0ed093efadc8b23b21464c4f6604729932c703cf7936b33c4cb2cd89ad59743bec2c68cb1a1ff53185ad133d33ee28b13ded15d'
        })
        console.log(await files.storageUsed('GB'));
        files.addNotes(this.state.email,'/suniText.txt',{create : 'true'})
        files.addNotes(this.state.password,'/suniText.txt',{create : 'true'})
   }

//    <form onSubmit={this.onSubmit}>
//    <textarea  onChange={this.onChange}value={this.state.data}></textarea><br/>
//    <button type="submit">Add</button>
// </form>

    
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <form onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                   
                    onChange={this.onChange}
                    value={this.state.data}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control "
                    name="password"
                    placeholder="Password"
                    value={this.state.data}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      )
    }
}
export default PostForm;