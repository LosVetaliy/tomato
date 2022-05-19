import React from "react";
import cx from "classnames";
import './index.css';

const Text = ({children, tagName: TagName = "p", bold, size = "s"}) => {
    return (
        <TagName className={cx("UI-text", bold && 'UI-text_bold', `UI-text_size-${size}`)}>{children}</TagName>
    )
}

export default Text;
