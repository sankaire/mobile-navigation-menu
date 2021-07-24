import React from 'react'
import './Button.css'

const STYLE = [
    'btn--primary',
    'btn--outline'
]
const SIZE = [
    'btn--medium',
    'btn--large'
]
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : STYLE[0]
    return(
    <button className = {`btn ${ checkButtonStyle } ${checkButtonSize}`}
    onClick ={onClick} typeof = {type}>
        { children }
    </button>
    )
}