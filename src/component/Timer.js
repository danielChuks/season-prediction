import React from "react";


class Timer extends React.Component{
  state = {
    time: new Date().toLocaleTimeString()
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({time: new Date().toLocaleTimeString()})
    }, 1000)
    
  }

  render(){
    return(
        <div style={{fontSize: '50px'}}>{this.state.time}</div>
    )
  }
}


export default Timer;