import React, { useState } from 'react';

export default function Products(props) {
    props.dynamicTitle('Products')
  
    // document.getElementById('products').innerHTML = 'This is products section';
    return(
     <>
         <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}} >
              <h3>Find Your products</h3>
                <div id="products">
                   
                </div>
        </div>
    </>
    );

    

};
