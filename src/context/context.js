import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const Context = createContext()

export const ContextProvider = ({children}) => {
  const [characters, setCharacters] = useState([])
  useEffect(() =>{
    const getCharacters = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/character')
      setCharacters(response.data.results)
    }
    getCharacters()
  },[])

  return (
    <Context.Provider value ={{ characters }}>
        {children}
    </Context.Provider>
  )
}




