import React , {useState} from 'react'

export default function TextArea(props) {
    const handleUpclick = () =>{
        // console.log(Text);
        let newText = Text.toUpperCase();
        setText(newText);
        // setColor("rgb()34 564 232");
    }
    const handlelowclick = () =>{
        // console.log(Text);
        let newText = Text.toLowerCase();
        setText(newText);
        // setColor("rgb()34 564 232");
    }
    const handleclrclick =()=>{
        setText("");
    }
    const onchange =(event)=>{
        // console.log("onchange");
        setText(event.target.value); 
        // this chnages tha value of text intext area 
    }
    const handleCopy = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [Text, setText] = useState("");
    // const [Color,setColor] = useState("rgb(21 215 125");
    // setText("Himanshu"); Correct way
    // text = "himanshu" wrong way
  return (
      <>
    <div className="myArea">
        {/* <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value = {Text} onChange={onchange} style ={{backgroundColor : props.mode==='dark'?'dark':'light'}} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button className="btn-Up mx-2" style={{backgroundColor: "rgb(21 215 125"}} onClick = {handleUpclick}>Convert to UpperCase</button>
        <button className="btn-Up mx-2" style={{backgroundColor: "rgb(21 215 125"}} onClick = {handlelowclick}>Convert to LowerCase</button>
        <button className="btn-Up mx-2" style={{backgroundColor: "rgb(21 215 125"}} onClick = {handleclrclick}>Clear text</button>
        <button className="btn-Up mx-2" style={{backgroundColor: "rgb(21 215 125"}} onClick = {handleCopy}>Copy text</button>
    </div>
    <div className="container my-2">
        <h3>Your text summary</h3>
        <p>{Text.split(" ").length - 1} words and {Text.length} characters</p>
        <p>{0.008 * (Text.split(" ").length-1)} minutes to read.</p>
        <h3>Preview</h3>
        <p>{Text}</p>
    </div>
      </>
  )
}
