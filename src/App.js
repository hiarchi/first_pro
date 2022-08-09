import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
const toggleMode =()=>{
      if(mode === 'light'){
        setmode('dark');
        document.body.style.background = 'rgb(222 213 174)';
        document.title = "Home - Dark mode"
        // setTimeout(() => {
        //   document.title = "Download TexFro"
        // }, 2000);
        setInterval(() => {
          document.title = "Download TexFor";
        }, 3000);
      }
      else{
        setmode('light'); 
        document.body.style.background = 'white';
        document.title = "Home - Light mode"
      }
  }
  return (
    <>
    {/* <Router>
      <Navbar title = "texFor" mode = {mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <Routes>
      <Route exact path= "/" element={<TextArea heading = "Enter the text to formats"/>}>
      </Route>
      <Route path="/">
        <Route exact path ="About" element={<About/>}/>
      </Route>
      </Routes>
      </div>
      </Router> */}
      <Navbar title = "texFor" mode = {mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextArea heading = "Enter the text to format"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
