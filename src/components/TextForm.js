import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase.", "Success")
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase.", "Success")
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        console.log("i am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard.", "Success")
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed.", "Success")
    }

    const handleClear = () => {
        console.log("clearing text");
        setText("");
        props.showAlert("Text was cleared.", "Success")
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#080b12' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-success mr-2" onClick={handleUpClick} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Convert to Uppercase</button>
                <button className="btn btn-success mr-2" onClick={handleLowClick} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Convert to Lowercase</button>
                <button className="btn btn-success mr-2" onClick={handleCopy} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Copy Text</button>
                <button className="btn btn-success mr-2" onClick={handleSpaces} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Remove Extra Spaces</button>
                <button className="btn btn-success" onClick={handleClear} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Clear Text</button>


            </div>
            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Type something above to preview it here"}</p>
            </div >
        </>
    )
}
