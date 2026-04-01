

export default function PlateCard({props}) {
 return (
 <div className="border rounded p-4 bg-black">
 <h2>{props.name}</h2>
 <p>{props.price} MAD</p>
 <p>{props.description}</p>
 {props.is_available && <span className="text-green-600">Disponible</span>}
 </div>
 );}
