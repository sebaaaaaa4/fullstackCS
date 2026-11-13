import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')

  const handleTextChange = (event, stateFunc) => {
    event.preventDefault();
    stateFunc(event.target.value)
  }

  const addName = () => {
    event.preventDefault()
    var isNameDistinct = true;
    persons.map(f => {
        if(f.name == newName) isNameDistinct = false;
    })

    if(!isNameDistinct){
        console.log("a");
        alert(`${newName} is already added to the phonebook`);
    }
    else{
        console.log("b");
        const newContact = {
            id: String(persons.length+1),
            name: newName,
            number: newNum
        }
        setPersons(persons.concat(newContact))
        setNewName('')
        setNewNum('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        filter shown with<input value={filter} onChange={() => handleTextChange(event, setFilter)}/>
      </form>
      <h2>add a new</h2>
      <form onSubmit={() => addName()}>
        <div>name: <input value={newName} onChange={() => handleTextChange(event, setNewName)}/></div>
        <div>number: <input value={newNum} onChange={() => handleTextChange(event, setNewNum)}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {
        persons.filter(function (str) {
            return str.name.match(filter)
        }).map((items, f) => {
            return <span key={f}><br/>{items.name} {items.number}</span>
        })
      }
    </div>
  )
}

export default App