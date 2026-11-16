import './App.css';

import Footer from './components/Footer';
import TabDetails from './components/TabDetails';
import CardContent from './components/CardContent';
import Header from './components/Header';
import Form from './components/Form';


function App() {
  // console.log("App")

  
  return (
    <>
      <Header />
      <CardContent />
      
      <TabDetails />
      <Form />

      <section className="section2">
        <Footer />
      </section>
          

    </>
  )
}

export default App
