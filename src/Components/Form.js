import React,{useState} from 'react'

export default function Form(property) {

    const [text,setText] = useState('');
    let wordCounts = text.split(' ').length;
    function HandleUpClick(e) {
        e.preventDefault()
          
      let newText = text.toUpperCase();
      setText(newText)
    }

    function HandleOnChange(e) {
        setText(e.target.value);
        
    }

    return (
        <>  <div className="col-md-6 my-3 mx-auto">
            <form>
                    <div className="mb-3">
                        <h2>{property.title}</h2>
                        <textarea type="text" className="form-control" onChange={HandleOnChange} id="email" value={text}rows='6'></textarea>
                        
                    </div>
                    <button type="submit" id='submitBtn' onClick={HandleUpClick} className="btn btn-primary">Convert to UpperCase</button>
            </form>
            </div>
            <div className="col-md-6 my-3 mx-auto">
                <h2>Statistics</h2>
                <h5>Total words count : {wordCounts}</h5>
                <h5>Total Characters count : {text.length}</h5>
                <br />
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
      );
};

 