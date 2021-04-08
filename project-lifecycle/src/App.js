import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard'



class App extends React.Component {
  state = {
    myGit: {},
    followers: {},
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/eagleye1144')
    .then(res =>{
      console.log(res.data)
      this.setState({
        myGit: res.data
      })
    })
    .catch(err =>{

      console.log(err, "ERROR!!!!")
    })
    axios.get('https://api.github.com/users/eagleye1144/followers')
      .then(res=>{
        this.setState({
          followers: res.data

        })
        console.log(res.data)

      })



  }

  render() {
    const {myGit, followers} = this.state
  return (
    <div className="App">
      <UserCard info={myGit} followers={followers}/>
    </div>
  );
  }
}

export default App;
