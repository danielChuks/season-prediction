import './App.css';

//building an application that tell the weather.

// getting a users physical location using geolocation....

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    postion => console.log(postion),
    err => console.log(err)
  )
  return (
    <>
        <div> 
            <h1> Hello there </h1>
        </div>
    </>
  );
}

export default App;
