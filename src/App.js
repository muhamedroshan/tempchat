import React,{useState} from 'react';
import './App.css';
import INPUT from './_Input';
// mport contact512 from './public/logos/contact512px.png'i


function App() {
  const [cntrycd,setcode] = useState('91')
  const [phno,setphno] = useState('')
  let _link=`https://wa.me/${cntrycd}${phno}`
  
  const countrycode =(event)=>{
    setcode(event.target.value)
    console.log(event.target.value)
  }
  
  const Phno = (event)=>{
    setphno(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div className='padding'>

      <div className='align'>

     <img src='logos/contact512px.png' alt="logo512" className='logo'/>
      </div>
    <div className='box'>

        <INPUT countrycode={countrycode} phno={Phno} />
        <div className='align'>
          <a href={_link}>
            <button>Chat</button>
          </a>

        </div>
        <div className='align width'>

          <p>your link: {_link}</p><br />
        </div>
        <div className='txtalign'>

          <h3>note :</h3>
          <p>Omit any zeroes, brackets, or dashes when adding the phone number.Add this website to home screen for better use.this is a proto type .Send me feed back
            <br />Phone no : 8086041779
          </p>
        </div>
      </div>
      </div>
  );
}

export default App;
