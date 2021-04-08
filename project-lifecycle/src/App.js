import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard'


class App extends React.Component {
  state = {
    myGit: {},
    followersGit: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/eagleye1144')
    .then(res =>{
      console.log(res.data)
      this.setState(res.data)


    })
    .catch(err =>{

      console.log(err, "ERROR!!!!")
    })
  }

  render() {
  return (
    <div className="App">
      <UserCard/>
    </div>
  );
  }
}

export default App;
