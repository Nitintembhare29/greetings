import './App.css';


let date = new Date(2023, 5, 24, 20);  //2023, 5, 24, 17
let currTime =  date.getHours();
let greeting = "";
let cssStyle = {};


if(currTime>=1 && currTime<12){
  greeting="Good Morning";
  cssStyle.color = "green";
}
else if(currTime>=12 && currTime<18){
  greeting="Good Afternoon";
  cssStyle.color = "Blue";
}
else if(currTime>=18 && currTime<20){
  greeting = "Good Evening";
  cssStyle.color = "Orange";
}
else{
  greeting = "Good Night";
  cssStyle.color = "Black"
}

function App() {
  return (
    <div className="App">
    <h1 className='greet'>Hello Sir, <span style = {cssStyle}>{greeting}</span></h1>
    </div>
  );
}

export default App;
