import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "394indend1",
        },
        {
          name: "Frank",
          id: "394indend2",
        },
        {
          name: "Kirk",
          id: "394indend3",
        },
        {
          name: "Musa",
          id: "394inden4",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
