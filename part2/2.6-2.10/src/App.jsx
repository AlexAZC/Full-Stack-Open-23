import { useState, useEffect } from "react";
import { Add } from "./components/Add";
import { Numbers } from "./components/Numbers";
import { Phonebook } from "./components/Phonebook";
import notes from "./services/notes"
import Notification from "./components/Notifications";

const App = () => {

  const [ persons, setPersons ] = useState([]); 
  const [name,setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter,setFilter] = useState("");
  const [success,setSuccess] = useState(null)
  const [statusCode,setStatusCode] = useState(null)

  

useEffect(() => {
    fetchInfo()
},[])

const fetchInfo = () => {
  return notes
            .getAll()
            .then((data) => {
              let personsData = [];

              for (let value in data){
                personsData.push({...data[value]})
              }
              setPersons(personsData)
            })
            
}

  /* HandleChangers for the Inputs */
const handleNameChange = (e) => {
    setName(e.target.value)
}

  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }


  /* The name and number added to the phone */
 

  
  
    /* Submit HandleChanger */

    const AddNumbers = (e) => {
      e.preventDefault()

      const addNumber = {
        name:name,
        number:number
      }
     let searchPerson = persons.find(person => person.name === name)
      if(searchPerson) {
        if(window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)){
          notes
              .update(searchPerson.id,addNumber)
              .then(returnedPerson => {
                setPersons(persons.map(person => (person.id !== searchPerson.id ? person : returnedPerson)))
              })
              .catch(error => {
                setStatusCode(`error`)
                setSuccess(`Information of ${searchPerson.name} has already been removed from server`)
                setTimeout(() => {
                  setStatusCode(null)
                  setSuccess(null)
                },3000)
                setPersons(persons.filter(person => person.id !== searchPerson.id))        
              })
              e.target.name.value = "";
              e.target.number.value = "";
              setName("");
              setNumber("");
        }
      } else {
        notes
            .create(addNumber)
            .then(addedPhone => {
              setPersons(persons.concat(addedPhone))
            
              setStatusCode(`success`)
              setSuccess(`Added ${addedPhone.name}`)
              setTimeout(() => {
                setStatusCode(null)
                setSuccess(null)
              },3000)
              setName("");
              setNumber("");
              e.target.name.value = "";
              e.target.number.value = "";
            })
           
      }
    
  }
        
    /*Function to Delete person from the data */
        
        const removePerson = (phone) => {
          let delPhone = window.confirm(`Delete ${phone.name} ?`)
          if(delPhone){
            return notes
            .remove(phone.id)
            .then((newObjt) => {
              notes
              .getAll()
              .then(personsData => {
                setPersons(personsData)
              })
      })
    }
    
  }
  
  /* Display all the contacts in the person array */
  const displayNumbers = persons.map((number) => {
    return <Numbers key={number.id} name={number.name} number={number.number} func={() => removePerson(number)} />
  })
  
  
  /* Displaying the filter contacts  */
  let filterNumber = filter ? persons.filter(number => number.name.toLowerCase().slice(0,filter.length) === filter.toLowerCase()) : null
  
  let displayFilterNumber = filterNumber ? filterNumber.map((number) => {
    return <Numbers key={number.id} name={number.name} number={number.number} func={() => removePerson(number)}  />
  }) : null
  
  /* Return Components in the App  */
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={success} status={statusCode} />
      <Phonebook func={handleFilterChange} />
      <h2>Add a new</h2>
      <Add handleName={handleNameChange} handleNum={handleNumberChange} addNum={AddNumbers} />
      <h2>Numbers</h2>
      {!filter ?  displayNumbers : displayFilterNumber }
    </div>
)
}






export default App
