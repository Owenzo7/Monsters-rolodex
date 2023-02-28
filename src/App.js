import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[],
    };
  }

  componentDidMount(){
    fetch("https://dummyjson.com/quotes")
    .then(response => response.json())
    .then(datas => this.setState({monsters:datas}))
  }

  render() {
    return <div>
    {this.state.monsters.map((data) => {

      return (
        <h1 key={data.id}>{data.quote}</h1>
      )
      
     
    })}
    </div>;
  }
}

export default App;
