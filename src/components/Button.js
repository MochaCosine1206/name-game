import React from 'react';
import "../styles/Button.css"

const Button = ({ onClick, disabled, children }) => {
    return (
        <button disabled={disabled} onClick={onClick}>{children}</button>
    )
}

export default Button