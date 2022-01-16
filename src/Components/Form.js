import React,{useState} from 'react'

export default function Form(property) {

    const [text,setText] = useState('Enter the text here');

    function HandleUpClick(e) {
        e.preventDefault()
      console.log('sbmit button clicked and the text is '+ text);  
      let newText = text.toUpperCase();
      setText(newText)
    }

    function HandleOnChange(e) {
        setText(e.target.value);
        
    }

    return (
        <>  <div className="col-md-4 my-3 mx-auto">
            <form>
                    <div className="mb-3">
                        <h2>{property.title}</h2>
                        <input type="text" className="form-control" onChange={HandleOnChange} id="email" value={text}/>
                        
                    </div>
                    <button type="submit" id='submitBtn' onClick={HandleUpClick} className="btn btn-primary">Convert to UpperCase</button>
            </form>
            </div>
        </>
      );
};

