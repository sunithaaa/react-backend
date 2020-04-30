import React, { Component } from 'react'
import  MoiBit  from  '@moibitjs/core'

class PostFormm extends Component{
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
    
    onSubmit(e) 
    {
       e.preventDefault()
        const files = new MoiBit('https://kfs3.moibit.io',
        {
        API_KEY : '12D3KooWSyzYN4q1nBEy1NocdQcdAyayQ5bHZ871yKyMhb4JA9tx' ,
        API_SECRET : '08011240e1774500cd631e81fac2f34059a1003e687307982915e5a4a3bb60de4da3a415ff0e08260d9f017474ad9ca04bde7c6fe77b76b04e5b3e959f82923ebe4f23bd'
        })
        // console.log(files.storageDetails('GB'));
        files.addNotes('nikitha','/example.txt',{create : true})
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
export default PostFormm;