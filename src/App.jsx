import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PlateCard from './components/PlateCard' 

function App() {

  const plates = [ {id : 1 ,name : 'test1',  price : 7 , description : 'this is a yummy plate', is_available : true},
  {id : 2 ,name : 'test2',  price : 17 , description : 'this is a yummy platee', is_available : false},
  {id : 3 ,name : 'test3',  price : 27 , description : 'this is a yummy plateee', is_available : true}
  ];


  return (
  <>
  <div>
    <h1>My Cards</h1>

    <div className='grid grid-cols-5'>{plates.map((plate) =>(
      <PlateCard  key={plate.id} props={plate}/>
    ))}</div>

  </div>
</>
  )


}
 
export default App
