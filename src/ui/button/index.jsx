import React from "react";
import cx from "classnames";
import './index.css';

const Button = ({children, tagName: TagName = "button", size = "s", color = 'white', className}) => {
    return (
        <TagName className={cx(`UI-button_size-${size}`, `UI-button_color-${color}`, className)}>{children}</TagName>
    )
}

export default Button;