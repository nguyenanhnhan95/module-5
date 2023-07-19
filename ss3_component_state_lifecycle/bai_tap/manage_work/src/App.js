import React,{Component} from "react";
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      list : [],
      item : "",
    }
  }
  handleChange=(event)=>{
    this.setState({
      item:event.target.value,
    })
  }
  handleAddItem=()=>{
  
    if(this.state.item !=="" ){
      this.setState({
        list : [...this.state.list,this.state.item],
        item : ""
      });
    }
  }
  render(){
    return(
      <div style={{ textAlign: "center", padding: 30 }}>
        <h1 style={{textAlign:"center"}}>Too List</h1>
        <input type="text" value={this.state.item} onChange={this.handleChange}></input>
      <button onClick={this.handleAddItem}>ADD</button>
     {this.state.list.map((item,index)=>(
      <div key={index}>
      <p style={{textAlign:"left"}}><span>{index+1}:</span>{item}</p>
      </div>
     ))}
   
   
    </div>
  
  )}
}
export default App;
