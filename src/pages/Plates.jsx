  import PlateCard from '../components/PlateCard' 
  import { useState } from 'react'

  export default function Plates () {
  const plates = [ {id : 1 ,name : 'test1',  price : 7 , description : 'this is a yummy plate', is_available : true},
  {id : 2 ,name : 'test2',  price : 17 , description : 'this is a yummy platewe', is_available : false},
  {id : 3 ,name : 'test3',  price : 27 , description : 'this is a yummy plateeeff', is_available : true},
  {id : 4 ,name : 'test4',  price : 37 , description : 'this is a yummy plateeedd', is_available : false},
  {id : 5 ,name : 'test5',  price : 57 , description : 'this is a yummy plateeess', is_available : true}
  ];


  const [search, setSearch] = useState('');

  const filtered = plates.filter(p =>
 p.name.toLowerCase().includes(search.toLowerCase())
);

return(
    
<div  className="border bg-white grid justify-items-center gap-10">
 <input className="border rounded p-2 m-10 bg-black" placeholder='enter your desired plate' value={search} onChange={e => setSearch(e.target.value)} />
 {filtered.length === 0 && <p>Aucun plat trouvé.</p>}
 {filtered.map(p => <PlateCard key={p.id} {...p} />)}
 </div>

)

  }
