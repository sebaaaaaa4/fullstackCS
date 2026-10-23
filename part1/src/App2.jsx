import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const Header = (props) => {
    console.log(props);
    return (
        <h1>{props.course}</h1>
    )
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
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Part part={part1.name} exercises={part1.exercises}/>
            <Part part={part2.name} exercises={part2.exercises}/>
            <Part part={part3.name} exercises={part3.exercises}/>
            <Total total={part1.exercises + part2.exercises + part3.exercises}/>
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