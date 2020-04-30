import React, { Component } from 'react'
import  MoiBit  from  '@moibitjs/core'

class Profile extends Component{
      constructor() {
    super()
    this.state = {
      value:''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)   
}
  onChange=(e)=>
  {
    this.setState({
        value: e.target.value
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
      files.addNotes(this.state.value,'/suniText.txt',{create : 'true'})
      
 }

     render() {

        return (
        <div className="container">
            <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
                <center><h2>Upload your text to moibit...!</h2>
                <form onSubmit={this.onSubmit}>
                    <textarea  onChange={this.onChange}value={this.state.value}></textarea><br/>
                    <button type="submit">Add</button>
                </form>
                </center>

            </div>
            </div>
        </div>
        )
    }
}
export default Profile;