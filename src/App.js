import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
import "./App.css";
import Cardlist from "./components/Cardlist/card-list.component";
import SearchBox from "./components/Searchbox/search-box.component";

const App = () => {
  const [searchField, setsearchField] = useState("");
  const [monsters, setmonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters)

  console.log(render);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setmonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
  
    setfilteredMonsters(newfilteredMonsters)

  }, [monsters, searchField])

  console.log({ searchField });
  const onSearchChange = (event) => {
    console.log(event.target.value);

    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString);
  };

 
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
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value);

//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//       <h1 className="app-title">Monsters Rolodex</h1>

//       </div>
//     );
//   }
// }

export default App;
