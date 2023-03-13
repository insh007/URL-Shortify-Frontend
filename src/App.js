import { useState } from 'react';
import './App.css';
import Background from './componenets/Background';
import Home from './componenets/Home';
import LinkResult from './componenets/LinkResult';


function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="container" >
      {/* <Home setInputValue={setInputValue} />
      <Background/>
      <LinkResult inputValue={inputValue}  /> */}
      <Home setInputValue={setInputValue} ></Home>
      <Background></Background>
      <LinkResult inputValue={inputValue} ></LinkResult>
    </div>
  );
}

export default App;
