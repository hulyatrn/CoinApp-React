import React, { Component} from "react";
import { ThemeContext } from "../context/ThemeContext";


class ThemeToggle extends Component{
    static contextType=ThemeContext;

    render(){
        const{toggleTheme}=this.context;

        return(
            <button className="thema-button" onClick={toggleTheme}>Tema Değiştir</button>
        )
    }
}

export default ThemeToggle