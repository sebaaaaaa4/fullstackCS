import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const Header = (props) => {
    <h1>{props.course}</h1>
}

const Part = (props) =>{
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
    )
}

const Content = (props) => {
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Part part={part1} exercises={exercises1}/>
            <Part part={part2} exercises={exercises2}/>
            <Part part={part3} exercises={exercises3}/>
            <Total total={exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

function App() {
    const course = 'Half Stack application development'
    return (
        <div>
            <Header course={course}/>
            <Content/>
        </div>
    )
}

export default App