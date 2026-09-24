import { useState } from 'react';
import { cardsData } from './data';
import { tabsData } from './data';

import './App.css';

import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TabButton from './components/TabButton'
import Form from './components/Form'


function App() {
  console.log("App")

  const [selectedContent, setNewContent] = useState('')
  function handleTabSelect(content) {
    setNewContent(content)
    console.log(selectedContent);
  }
  return (
    <>
      <Header />
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


      </section>
      <section className="section2">
        <menu>
          <TabButton isSelected={selectedContent==="cleanse"} onSelectAction={() => handleTabSelect("cleanse")}>Cleanse</TabButton>
          <TabButton isSelected={selectedContent==="tone"} onSelectAction={() => handleTabSelect("tone")}>Tone</TabButton>
          <TabButton isSelected={selectedContent==="moisturize"} onSelectAction={() => handleTabSelect("moisturize")}>Moisturize</TabButton>
          <TabButton isSelected={selectedContent==="protect"} onSelectAction={() => handleTabSelect("protect")}>Protect</TabButton>
        </menu>

        <div id="tabContent">
          {(!selectedContent) ? (
            <p>Please Select Topic</p>
          ):(
            <div>
              <h3>{tabsData[selectedContent].title}</h3>
              <p>{tabsData[selectedContent].description}</p>
            </div>
          )}

        </div>
      </section>

      <Form />

      <section className="section2">
        <Footer />
      </section>
          

    </>
  )
}

export default App
