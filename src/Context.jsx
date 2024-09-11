/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

// Crear el contexto
const CharStates = createContext(null);

// Componente del Proveedor de Contexto
export const Context = ({ children }) => {
  // Establecer estados con valores iniciales
  const [theme, setTheme] = useState('light'); 
  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('favs')) || []);
  const [list, setList] = useState([]);

  // Efecto para obtener datos de la API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res.data)
        setList(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error); 
      });
  }, []);

  // Guardar favoritos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [favs]);

  return (
    <CharStates.Provider value={{ theme, setTheme, favs, setFavs, list }}>
      {children}
    </CharStates.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCharStates = () => {
  return useContext(CharStates);
};