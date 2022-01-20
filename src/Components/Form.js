import React,{useState} from 'react'

export default function Form(property) {
    property.dynamicTitle('Home');

    const [text,setText] = useState('');
    
    let wordCounts = text.split(' ').filter((e)=>{return e.length!==0}).length;

    function clear(e) {
        e.preventDefault();
        let newText = '';
        setText(newText);
        property.fireAlert('Textarea has been cleared',property.mode==='dark'?'primary':'info');
    }


    function copy(e) {
        e.preventDefault();
                /* Get the text field */
         let copyText = document.getElementById("textArea");
                /* Select the text field */
         copyText.select();
         copyText.setSelectionRange(0, 99999); /* For mobile devices *
                /* Copy the text inside the text field */
         navigator.clipboard.writeText(copyText.value);
        property.fireAlert('Text has been copied to the clipboard',property.mode==='dark'?'primary':'info');
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
                        <textarea type="text" className="form-control" onChange={HandleOnChange} id="textArea" value={text}rows='6' style={{backgroundColor: property.mode ==='dark'?'#031023':'white',color: property.mode ==='dark'?'white':'black'}}></textarea>
                        
                    </div>
                    <button disabled = {wordCounts === 0} type="submit" id='Uppercase' onClick={convertToUpperCase} className="btn btn-primary my-2 mx-2">Uppercase</button>
                    <button  disabled = {wordCounts === 0} type="submit" id='Lowercase' onClick={convertToLowerCase} className="btn btn-primary my-2 mx-2">Lowercase</button>
                    <button  disabled = {wordCounts === 0} type="submit" id='clearTextarea' onClick={copy} className="btn btn-primary my-2 mx-2">Copy</button>
                    <button  disabled = {wordCounts === 0} type="submit" id='clearTextarea' onClick={clear} className="btn btn-primary my-2 mx-2">Clear</button>
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

 