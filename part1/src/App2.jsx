import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const Header = (props) => {
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
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ];
    let totalValue = 0;

    return (
        <div>
            {
                parts.map((i, index) => {
                    totalValue += i.exercises;
                    return <Part key={index} part = {i.name} exercises = {i.exercises}/>
                })
            }
        </div>
    )
}

function App() {
    const course = 'Half Stack application development'
    return (
        <div>
            <Header course={course}/>
            <Content/>
            <Total total={totalValue}/>
        </div>
    )
}

export default App