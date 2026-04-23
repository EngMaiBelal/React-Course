import './App.css'
import { cardsData } from './data'

function MakeReusableComponent(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.cardPhoto} alt="" />
    </div>
  );
}
function App() {
  return (
    <>
      <section id="center">

          <MakeReusableComponent
              {...cardsData[0]}
            />
    
          <MakeReusableComponent
              {...cardsData[1]}
            />
          <MakeReusableComponent
              {...cardsData[2]}
            />
       
          <MakeReusableComponent
              {...cardsData[3]}
            />
          {/* 
          // cardsData.map((card) => (
          //   <MakeReusableComponent
          //     key={card.id}
          //     title={card.title}
          //     description={card.description}
          //     cardPhoto={card.cardPhoto}
          //   />
          // )) */}
    </section>
    </>
  )
}

export default App
