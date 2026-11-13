import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

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
      <form onSubmit={() => addName()}>
        <div>name: <input value={newName} onChange={() => handleTextChange(event, setNewName)}/></div>
        <div>number: <input value={newNum} onChange={() => handleTextChange(event, setNewNum)}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((item, f) => {
            return <span key={f}><br/>{item.name} {item.number}</span>
        })
      }
    </div>
  )
}

export default App