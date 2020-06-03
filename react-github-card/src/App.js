import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Usercard from "./Componenets/usercard";
import Followercard from "./Componenets/followerCard";


class App extends React.Component {
    state= {
      userData: [],
      followersData: []
  }


  componentDidMount() {
    axios
    .get("https://api.github.com/users/arn-foto").then(response => {
      this.setState({
        userData: response.data
      });
      console.log(response.data)
    })
    
    .catch(error => console.log(error));

    axios
    .get("https://api.github.com/users/arn-foto/followers")
    .then(response => {
      this.setState({
        followersData: response.data
      });
      console.log(response.data)
    })
  }

  

  render() {
    return (
      <div className="App">
          <h1>GitHub Usercard</h1>
            <div className="alldata">
              <Usercard userData={this.state.userData} className="user"></Usercard>
              <Followercard 
              followersData={this.state.followersData}
              >
              </Followercard>
          </div>
        <main />
      </div>
    );
  }
}

export default App;