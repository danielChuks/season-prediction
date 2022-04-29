import './App.css';
import React from 'react'
import SeasonDisplay from './component/SeasonDisplay';
import Loader from './component/loader-spinner/Loader-spinner';

//building an application that tell the weather....

//Getting a users physical location using geolocation....

class App extends React.Component{
      state = {
      lat: null,
      long: null,
      errorMessage: '',
  }


  componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        postion => {
          this.setState({lat: postion.coords.latitude})
          this.setState({long: postion.coords.longitude})
        },
        err => {
          this.setState({errorMessage: err.message})
        },
      )
      }
  
  render(){
      if(this.state.errorMessage && !this.state.lat){
        return <div> <h1>Error: {this.state.errorMessage}</h1></div>
      };
      if(!this.state.errorMessage && this.state.lat){
          return <div > <SeasonDisplay lat={this.state.lat} long={this.state.long}/> </div> 
      };
      return <Loader message="Please Allow Access To Your Location" />
 }
 
}

export default App;
