import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Part = (props) => {
  return (
    <p>{props.content.name} {props.content.exercises}</p>
  )
}

const Content = (props) => {
  return(
    <div>
      {
        props.parts.map(content => {
          return <Part key={content.id} content={content}/>
        })
      }
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header text={props.course.name}/>
      <Content parts={props.course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <Course course={course} />
  )
}

export default App
