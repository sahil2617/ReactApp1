import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
            <h6>{props.alert.message}</h6>
         </div>
    )
}
