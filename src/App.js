import { Component } from 'react';

import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }))
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input 
        className='search-box' 
        type='search' 
        placeholder='search monsters' 
        onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();

          this.setState(() => {
            return { searchField }
          })
        }} />
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
              {monster.name}
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
