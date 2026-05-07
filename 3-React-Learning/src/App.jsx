import './App.css'
import { cardsData } from './data'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import Tabs from './components/Tabs'

function App() {
  return (
    <>
      <Header/>
      <section id="center">
        {
          cardsData.map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              description={card.description}
              cardPhoto={card.cardPhoto}
            />
          ))
        }
        <Tabs />
        {/* <Footer /> */}
      </section>
    </>
  )
}

export default App
