import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const App = () => {
    const notes = [
        {
          id: 1,
          content: 'HTML is easy',
          important: true
        },
        {
          id: 2,
          content: 'Browser can execute only JavaScript',
          important: false
        },
        {
          id: 3,
          content: 'GET and POST are the most important methods of HTTP protocol',
          important: true
        }
      ]

    return (
        <div>
            {
                notes.map(note =>{
                    return <p key={note.id}>{note.content} ---- important: {note.important ? "yes" : "no"}</p>
                })
            }
        </div>
    )
}

export default App