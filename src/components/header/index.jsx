import React from "react";
import Burger from "./burger";
import './index.css';
import Text from "../../ui/text";

const Header = () => {
    return (
        <header>
            <Text bold size="l">TOMATO<br />WAVE</Text>
            <Burger/>
        </header>
    )
}

export default Header;