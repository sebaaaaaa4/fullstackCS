import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
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
            name: newName
        }
        setPersons(persons.concat(newContact))
        setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={() => addName()}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((item, f) => {
            return <span key={f}><br/>{item.name}</span>
        })
      }
    </div>
  )
}

export default App