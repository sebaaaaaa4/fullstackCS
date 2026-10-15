import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const WordSpam = (props) => {
  var text = "";
  for(var i = 0; i < props.amount; ++i){
    text += "siema ";
  }
  return (
    <p>{text}</p>
  )
}

const Footer = (props) => {
  return (
    <div>
      Made by {props.author}
      <p><a href="https://github.com/sebaaaaaa4/fullstackCS">github</a></p>
    </div>
  )
}

const Friends = (props) => {
  const friends = [
    {"name": "Nikodem", "age": 18},
    {"name": "Filip", "age": 17},
    {"name": "Fabian", "age": 18},
  ]

  return(
    <div>
      <p>Lista petów: </p>
      {
        friends.map(
          (f, index) => {
            return <p key={index}>{f.name} ma {f.age} lat</p>
          }
        )
      }
    </div>
  )
}

function App() {
  var now = new Date();
  console.log("Hello world");
  return (
    <div>
      <p>Today is {now.toString()}</p>
      <p>
        1 + 2 is {1 + 2} btw
      </p>
      <WordSpam amount="7"/>
      <WordSpam amount="6"/>
      <WordSpam amount="5"/>
      <Friends/>
      <Footer author="seba"/>
    </div>
  )
}

export default App
