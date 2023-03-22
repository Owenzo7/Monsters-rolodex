import { Component } from "react";
import "./App.css";
import Cardlist from "./components/Cardlist/card-list.component";
import SearchBox from "./components/Searchbox/search-box.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          return { monsters: data };
        })
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);

    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
