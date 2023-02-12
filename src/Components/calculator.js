import React, { useState } from 'react'
import "../Components/style/calculator.css";

function Calculator() {

    const [result, setResult] = useState('');
    const [state, setState] = useState('');

    const handler = (e) =>{
        setState(state.concat(e.target.name))
    }

    const clear = () =>{
        setState(' ');
        setResult(' ');
    }

    const backspace = () =>{
        setState(state.slice(0,-1));
        setResult(result.slice(0.-1));
    }

    const equlizer = () =>{
        try{
            setResult(eval(state.toString()));
            setState(' ');
        }catch(err){
            alert("Invalid Expression")
        }
    } 

  return (
    <>
        <div className='main-calculator-container'>
            <div className='another-main-container'>
                <div className='input-values'>
                    <input type="text" className='input-value-one' value={result} onChange={(e)=>{setResult(e.target.value)}}/>
                    <input type="text" className='input-value-two' value={state} onChange={(e)=>{setState(e.target.value)}}/>
                </div>
                <div className='btn btn-section-one'>
                    <button className='AC' onClick={clear}>AC</button>
                    <button className='del' onClick={backspace}>DEL</button>
                    <button onClick={handler} name='%' className='module'>%</button>
                    <button onClick={handler} name='/' className='division'>/</button>
                </div>
                <div className='btn btn-section-two'>
                    <button onClick={handler} name='7' className='seven'>7</button>
                    <button onClick={handler} name='8' className='eight'>8</button>
                    <button onClick={handler} name='9' className='nine'>9</button>
                    <button onClick={handler} name='*' className='multiple'>*</button>
                </div>
                <div className='btn btn-section-three'>
                    <button onClick={handler} name='4' className='four'>4</button>
                    <button onClick={handler} name='5' className='five'>5</button>
                    <button onClick={handler} name='6' className='six'>6</button>
                    <button onClick={handler} name='-' className='sub'>-</button>
                </div>
                <div className='btn btn-section-four'>
                    <button onClick={handler} name='1' className='one'>1</button>
                    <button onClick={handler} name='2' className='two'>2</button>
                    <button onClick={handler} name='3' className='three'>3</button>
                    <button onClick={handler} name='+' className='add'>+</button>
                </div>
                <div className='btn btn-section-five'>
                    <button onClick={handler} name='00' className='double-zero'>00</button>
                    <button onClick={handler} name='0' className='zero'>0</button>
                    <button onClick={handler} name='.' className='dot'>.</button>
                    <button className='equal' onClick={equlizer}>=</button>
                </div>
            </div>

        </div>
    </>
  )
}

export default Calculator