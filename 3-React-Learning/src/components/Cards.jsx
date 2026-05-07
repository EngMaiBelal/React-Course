import './Cards.css'

export default function Cards({...collectProps}) {
  return (
      <div className="card">
        <h3>{collectProps.title}</h3>
        <img src={collectProps.cardPhoto} alt="" />
        <p>{collectProps.description}</p>
      </div>
  );  
}