

export default function PlateCard(props) {
 return (
 <div className="border p-1 rounded grid w-200 h-40 text-4xl bg-black">
 <h2>{props.name}</h2>
 <p>{props.price} MAD</p>
 <p>{props.description}</p>
 {props.is_available ? <span className="text-green-600">Disponible</span> : <span className="text-red-600">Indisponible</span>}
 </div>
 );}
