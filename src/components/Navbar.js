import React from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <ThemeContext.Consumer>{(context)=>{
      const {isLightTheme,dark,light}=context;
      const theme=isLightTheme ? dark:light;


      return (
        <nav style={{background:theme.ui,color:theme.syntax}}>
          <h1 style={{color:theme.syntax}}>Coin App</h1>
          <div className='links'>
            <Link style={{color:theme.syntax}} to="/">Anasayfa</Link>
            <Link style={{color:theme.syntax}} to="/coin">Yeni Coin Ekle</Link>
          </div>
        </nav>
      )
      

    }}

    </ThemeContext.Consumer>
    )
}



