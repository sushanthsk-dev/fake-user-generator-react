import React, { Component } from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import './App.css';
import { Search } from './components/search-list/search-list.components';
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchFiled: '',
    };
  }

  handleChange = (e) => {
    this.setState({ searchFiled: e.target.value });
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=100').then((response) =>
      response.json().then((data) => this.setState({ users: data.results }))
    );
  }
  render() {
    const { users, searchFiled } = this.state;
    const filteredUser = users.filter((user) =>
      user.name.first.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Users</h1>
        <Search placeholder="Search users" handleChange={this.handleChange} />
        <Cardlist users={filteredUser}></Cardlist>
      </div>
    );
  }
}

export default App;
