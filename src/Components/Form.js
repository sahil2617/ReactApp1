import React,{useState} from 'react'

export default function Form(property) {

    const [text,setText] = useState('');
    
    let wordCounts = text.split(' ').length;

    function clear(e) {
        e.preventDefault();
        let newText = '';
        setText(newText);
        property.fireAlert('Textarea has been cleared',property.mode==='dark'?'primary':'info');
    }
    
        
    
    function convertToUpperCase(e) {
        e.preventDefault()
          
      let newText = text.toUpperCase();
      setText(newText)
      property.fireAlert('Text has been converted into UpperCase',property.mode==='dark'?'primary':'info');
    }
    function convertToLowerCase(e) {
        e.preventDefault()
          
      let newText = text.toLowerCase();
      setText(newText)
      property.fireAlert('Text has been converted into LowerCase',property.mode==='dark'?'primary':'info');
    }

    function HandleOnChange(e) {
        setText(e.target.value);
        
    }

    return (
        <>  <div className="col-md-6 my-3 mx-auto" style={{color: property.mode==='dark'?'white':'black'}}>
            <form>
                    <div className="mb-3">
                        <h2>{property.title}</h2>
                        <textarea type="text" className="form-control" onChange={HandleOnChange} id="email" value={text}rows='6' style={{backgroundColor: property.mode ==='dark'?'#031023':'white',color: property.mode ==='dark'?'white':'black'}}></textarea>
                        
                    </div>
                    <button type="submit" id='Uppercase' onClick={convertToUpperCase} className="btn btn-primary mx-2">Convert to Uppercase</button>
                    <button type="submit" id='Lowercase' onClick={convertToLowerCase} className="btn btn-primary mx-2">Convert to Lowercase</button>
                    <button type="submit" id='clearTextarea' onClick={clear} className="btn btn-primary mx-2">Clear</button>
            </form>
            </div>
            <div className="col-md-6 my-3 mx-auto" style={{color: property.mode==='dark'?'white':'black'}} >
                <h2>Statistics</h2>
                <h5>Total words : {wordCounts}</h5>
                <h5>Total Characters : {text.length}</h5>
                <h5>{wordCounts* 0.01 } min read. </h5>
                <br />
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in TextArea to preview'}</p>
            </div>
        </>
      );
};

 