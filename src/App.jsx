import Header from './components/header/header'; 
import Hero from './components/hero/hero';
import './App.css'
import Companies from "./components/companies/companies";
import Residencies from "./components/residencies/residencies";
import Value from "./components/value/value";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"/>
      <Header />
      <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contacts/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
