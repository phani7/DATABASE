import React, { Component } from 'react'

export class Class extends Component {
   constructor(){
    super()
        this.state={
            message: "Welcome to my channel"

        }
    
   
   }
   onsubmit=()=>{
    console.log("hello")
    this.setState({
        message:"thanks for Subscribing our channel"
    })

   }
    
  render() {
    return (
      <div><h1>{this.state.message}</h1>
      <button onClick={()=>{this.onsubmit()}}>Subscribe</button></div>
    )
  }
}

export default Class