import React,{useState} from 'react'

export default function Form(property) {

    const [text,setText] = useState('');
    const [style, setStyle] = useState({
        color : 'white',
        backgroundColor : 'black',
        padding : '10px',
        borderRadius: '15px'
    })
    const [toggleButton, setToggleButton] = useState('Dark Theme')
    
    let wordCounts = text.split(' ').length;

    function clear(e) {
        e.preventDefault();
        let newText = ' ';
        setText(newText);
    }
    function toggleTheme(e) {
        e.preventDefault();
        if (style.color === 'white') {
            setStyle({
                color : 'black',
                backgroundColor : 'white',
                padding : '10px',
                borderRadius : '15px'
            });
        } else {
           setStyle({
                color : 'white',
                backgroundColor : 'black',
                padding : '10px',
                borderRadius: '15px'
            });
        }
        
    }
    function convertToUpperCase(e) {
        e.preventDefault()
          
      let newText = text.toUpperCase();
      setText(newText)
    }
    function convertToLowerCase(e) {
        e.preventDefault()
          
      let newText = text.toLowerCase();
      setText(newText)
    }

    function HandleOnChange(e) {
        setText(e.target.value);
        
    }

    return (
        <>  <div className="col-md-6 my-3 mx-auto" style={style}>
            <form>
                    <div className="mb-3">
                        <h2>{property.title}</h2>
                        <textarea type="text" className="form-control" onChange={HandleOnChange} id="email" value={text}rows='6'></textarea>
                        
                    </div>
                    <button type="submit" id='Uppercase' onClick={convertToUpperCase} className="btn btn-primary mx-2">Convert to Uppercase</button>
                    <button type="submit" id='Lowercase' onClick={convertToLowerCase} className="btn btn-primary mx-2">Convert to Lowercase</button>
                    <button type="submit" id='clearTextarea' onClick={clear} className="btn btn-primary mx-2">Clear</button>
                    <button type="submit" id='toggletheme' onClick={toggleTheme} className="btn btn-primary mx-2">{toggleButton}</button>
            </form>
            </div>
            <div className="col-md-6 my-3 mx-auto" style={style}>
                <h2>Statistics</h2>
                <h5>Total words : {wordCounts}</h5>
                <h5>Total Characters : {text.length}</h5>
                <h5>{wordCounts* 0.008 } min read. </h5>
                <br />
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
      );
};

 