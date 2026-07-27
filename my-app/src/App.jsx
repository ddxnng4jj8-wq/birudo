import { useState } from 'react'
import { Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const text = "JSXの基本";
  const h1ClassName = "font-normal";
  const idDeled = true;
  const isLoggedln = true;  //課題
  const hasLead = true;
  const tasks = [];  //課題
  const fruits = ["りんご", "ばなな", "ぶどう", "みかん", "もも"];
  return (
  <>
   <h1 className={h1ClassName}>{text}</h1>
   <p>{1+2}</p>
   {isLoggedln ? <del>ようこそ</del> : <p>ログインしてください</p>}
   {hasLead && <p>Javascript</p>}
   {tasks.length === 0 && <p>空のときだけメッセージを出す</p>}
   <ul>
    {fruits.map( (fruit, index) => { 
       return (
        <li key={index}>{fruit}</li>
      )
      })}
      </ul>
  </>
  );
}

export default App
