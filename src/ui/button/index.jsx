import React from "react";
import cx from "classnames";
import './index.css';

const Button = ({children, tagName: TagName = "button", onClick = () => {} , size = "s", color = 'grey', className}) => {
    return (
        <TagName className={cx(`UI-button_size-${size}`, `UI-button_color-${color}`, className)} onClick={onClick}>{children}</TagName>
    )
}

export default Button;