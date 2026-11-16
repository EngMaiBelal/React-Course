import './App.css';

import Header from './components/Header';
import CardContent from './components/CardContent';
import TabDetails from './components/TabDetails';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
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
