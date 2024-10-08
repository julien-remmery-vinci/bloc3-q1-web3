import { useState, useEffect } from 'react'
import phonebookService from 'services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [maxId, setMaxId] = useState(0)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(response => {
        setPersons(response.data)
        const maxId = parseInt(response.data.reduce((max, person) => (person.id > max ? person.id : max), 0))
        setMaxId(maxId);
      })
  }, [])

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  }

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(newName === "" || newNumber === "") return;

    const newPerson = {
      name: newName,
      number: newNumber,
      id : `${maxId + 1}`
     };
    phonebookService
     .create(newPerson)
     .then(response => {      
      if(response.status === 201) {
        console.log(response);
        
        setPersons([...persons, newPerson]);
        setNewName('');
      }
     })
  }

  const handleDelete = (event) => {  
    const id = event.target.value;  
    phonebookService
      .deleteOne(id)
      .then(response => {
        if (response.status === 200) {
          setPersons(persons.filter(person => person.id !== id));
        }
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChangeName}/>
        </div>
        <div>
          number: <input onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{listStyle: "none"}}>
        {persons.map((person, index) => (
          <li key={index}>{person.name} {person.number} <button value={person.id} onClick={handleDelete}>delete</button></li>
        ))}
      </ul>
    </div>
  )
}

export default App