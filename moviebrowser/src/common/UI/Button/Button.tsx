import React from 'react'
import styles from './Button.module.css'
function Button(props:any) {
    return (
        <div className={props.btnStyle}>
            {props.btnText}
        </div>
    )
}

export default Button
