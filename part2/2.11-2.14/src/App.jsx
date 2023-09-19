import axios from 'axios'
import { useEffect, useState } from 'react'
import Country from './Country'


function App() {

     const [data, setData] = useState([])
     const [input,setInput] = useState("")


     useEffect(()=>{
          axios
               .get("https://restcountries.com/v3.1/all")
               .then(response => {
                    setData(response.data)
               })
     },[])

     /* The callback function for the filter method */
     let filterArray = (value) => {
          let nameCountry = value.name.common.toLowerCase();
          if(input.toLocaleLowerCase() === nameCountry.slice(0,input.length)){
               return value
          } 
     }

     const filterData = data.filter(filterArray)

     /* map method to display the specific data on the browser */

     const displayCountryData = filterData.map((country) => {
          let filteredDatalen = filterData.length
          let countryLang = country.languages ? Object.values(country.languages) : ["There is no language defined in this country"]
          let countryCapital = country.capital ? country.capital[0] : ["This country does not count with a capital"]
          return <Country 
          key={country.name.common}
          name={country.name.common}
          population={country.population}
          languages={countryLang}
          flag={country.flags.png}
          len={filteredDatalen}
          capital={countryCapital} />
     })

     return <main>
           
          
               <header>
          Find countries:  <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  />
               </header>

             {
             !input
              ? <p>Please search for a country to know his information</p>  
              : filterData.length > 10 ? <p>Please be more specific</p>
              : <div>
                    {displayCountryData}
                 </div>
               }  
          
          
          
          
          
    
     </main>
}

export default App
