import './App.css';
import { Button, TextField } from '@mui/material';
import useState from 'react';


function App() {
  const [calc,setCalc]=useState("0");
  

  const ops = ['/','*','+','-','.' ];

  const updateCalc= value=>{
    if( 
      ops.includes(value) && calc ==='' || 
      ops.includes(value) && ops.includes(calc.slice(-1)))
      {
        return;
    }
    setCalc(calc+value);
  }

  const calculate = () =>{
    setCalc(eval(calc).toString());
  }

  const deleteLast= () =>{
    if(calc == ''){
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
  }

  const clear=()=>{
    setCalc('0')
  }


  return (
    <div className="App">
        <TextField id="outlined-basic" variant="outlined" />
        {calc}
        <div style={{display:"flex", justifyContent:"center"}}>

          <div className='numbers'>
            <Button variant="contained" onClick={()=>updateCalc('7')}>7</Button>
            <Button variant="contained" onClick={()=>updateCalc('8')}>8</Button>
            <Button variant="contained" onClick={()=>updateCalc('9')}>9</Button><br/>
            <Button variant="contained" onClick={()=>updateCalc('4')}>4</Button>
            <Button variant="contained" onClick={()=>updateCalc('5')}>5</Button>
            <Button variant="contained" onClick={()=>updateCalc('6')}>6</Button><br/>
            <Button variant="contained" onClick={()=>updateCalc('1')}>1</Button>
            <Button variant="contained" onClick={()=>updateCalc('2')}>2</Button>
            <Button variant="contained" onClick={()=>updateCalc('3')}>3</Button><br/>
            <Button variant="contained" onClick={()=>updateCalc('0')}>0</Button>
            <Button variant="contained" onClick={()=>updateCalc('.')}>.</Button>
            <Button variant="contained" onClick={calculate}>=</Button>
          </div>

          <div className='oper'>
            <Button variant="contained" onClick={()=>updateCalc('/')}>/</Button>
            <Button variant="contained" onClick={()=>updateCalc('*')}>*</Button>
            <Button variant="contained" onClick={()=>updateCalc('-')}>-</Button> 
            <Button variant="contained" onClick={()=>updateCalc('+')}>+</Button>
          </div>
          <div>
          <Button variant="contained" onClick={deleteLast}>DEL</Button>
          <Button variant="contained" onClick={clear}>CE</Button>
          </div>

        </div>
      </div>
  );
}

export default App;
