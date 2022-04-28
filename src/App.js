import './App.css';
import React from 'react'
import SeasonDisplay from './component/SeasonDisplay';

//building an application that tell the weather.

// getting a users physical location using geolocation....

class App extends React.Component{
      state = {
      lat: null,
      long: null,
      errorMessage: ''
  }
  
  componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        postion => {
          this.setState({lat: postion.coords.latitude})
          this.setState({long: postion.coords.longitude})
          console.log(postion)
        },
        err => {
          this.setState({errorMessage: err.message})
        }
      )
  }
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div> <h1>Error: {this.state.errorMessage}</h1></div>
    };
    if(!this.state.errorMessage && this.state.lat){
      return <div> <SeasonDisplay lat={this.state.lat} long={this.state.long}/> </div>
    }
      return <div> Loading ...</div>
};
 
}

export default App;
