import React, { Component} from "react";
import "./style.css";
import CovidForm from './Components/CovidForm'
import DisplayList from './Components/DisplayList'

class  App extends Component{
  state = {
    list: [],
    
  };


  handleSubmit = (FirstName, LastName, ID, Address, PhoneNumber, Temperture, radio, radio2, radio3)=>{
    
    let obj={
      FirstName:FirstName,
       LastName:LastName,
       ID:ID, 
       Address:Address, 
       PhoneNumber:PhoneNumber, 
       Temperture:Temperture,
       radio:radio,
       radio2:radio2,
       radio3:radio3,
    
    }
    if(FirstName === ""){
      alert("Please enter FirstName")
    }
    else if(LastName === ""){
      alert("please fill out form")
    }
    else if(ID === ""){
      alert("please fill out form")
    }
    else if(Address === ""){
      alert("please fill out form")
    }
    else if(PhoneNumber === ""){
      alert("please fill out form")
    }
    else if(Temperture === ""){
      alert("please fill out form")
    }
  
    else{
      this.setState({
        list:[...this.state.list, obj]
      })
    }
    }
    handleDelete = id =>{
      this.setState({
        list: this.state.list.filter(item =>item.id !==id)
      })
      console.log(this.state.list)
    }
   
  render(){
    
    return (

      <div> 
         <CovidForm handleSubmit={this.handleSubmit}/>
         <DisplayList  data={this.state.list} Delete={this.handleDelete}/>
      </div>
    )
  }  
}
export default App ;