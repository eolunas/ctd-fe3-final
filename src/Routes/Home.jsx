import React from 'react'
import Card from '../Components/Card'
import { useCharStates } from '../Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { list } = useCharStates();
  return (
    <main className="" > 
      <h1>Home</h1>
      <div className='card-grid'>
        {list.map((item, index) => 
        <Card key={index} name={item.name} username={item.username} id={item.id}/>
        )}
      </div>
    </main>
  )
}

export default Home