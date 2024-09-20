import React, { useState } from 'react'
import "./App.css";


const App = () => {
  const [weight,setweight]=useState(0);
  const [height,setheight]=useState(0);
  const [bmi,setbmi]=useState(' ');
  const [msg,setmsg]=useState(' ');
 const handleweight=(e)=>{
        setweight(e.target.value);
 }
 const handleheight=(e)=>{
  setheight(e.target.value);

 }

//-----------------LOGIC------------------------

let calBmi=(e)=>{
event.preventDefault();
if(weight===0 || height===0){
alert("please enter a valid weight and height");
}
else{
  let bmi=(weight/(height*height)*703);
  setbmi(bmi.toFixed(1))

  if(bmi<25){
    setmsg("YOU are underweight");
  }
  else if(bmi>=25 && bmi<30){
    setmsg("YOU are healthy weight person");
  }
  else{
    setmsg("YOU are overweight");
  }
}
}



//----------Reload----------
let reload=()=>{
  window.location.reload()
}

  return (
      <div className="App">
        <div className="container">
          <h1>BMI Calculator</h1>
          <form action="" onSubmit={calBmi}>
            <div>
              <label htmlFor="">Weight(ibs)</label>
              <input type="text" placeholder='Enter your weight' value={weight}  onChange={handleweight}/>
            </div>
            <div>
              <label htmlFor="">Height(in)</label>
              <input type="text" placeholder='Enter your height' value={height} onChange={handleheight} />
            </div>
            <div>
              <button className="btn" type="submit">Submit</button>
              <button className="btn btn-outline" onClick={reload}  type="submit">Reload</button>
            </div>
            <div className="center">
              <h3>Your BMI is:{bmi}</h3>
              <p>{msg}</p>
            </div>
          </form>
          </div>
      </div>

  )
};

export default App
