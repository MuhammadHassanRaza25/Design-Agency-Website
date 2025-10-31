import './App.css'
import Header from "./Components/Header"
import Hero from './Components/Hero'
import Services from './Components/Services'
import Projects from './Components/Projects'
import WorkProcess from './Components/WorkProcess'
import Clients from './Components/Clients'
import Team from './Components/Team'
import Footer from './Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
        <Header/>
        <div className="bg-black">
          <Hero/>
        </div>
        <Services/>
        <Projects/>
        <WorkProcess/>
        <Clients/>
        <Team/>
        <Footer/>
    </>
  )
}

export default App;
