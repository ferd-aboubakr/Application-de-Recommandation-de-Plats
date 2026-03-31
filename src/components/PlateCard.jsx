export default function PlateCard({props})
{
    return (<div>
<h2>{props.name}</h2>
<h2>{props.price}</h2>
<p>{props.description}</p>
</div>
{? <span className="text-green-600">Disponible</span> : <span className="text-green-600">Indisponible</span>}
    );
}
