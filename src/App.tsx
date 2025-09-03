import './App.css'
import AboutMe from './components/About';
import ContactSection from './components/Contact';
import ProjectIdeaSection from './components/cta';
import Footer  from './components/Footer';
import HeroSection from './components/Intro';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
// import SuccessSnackbar from './components/SuccessSnackbar';
function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutMe/>
    <Portfolio/>
    <ProjectIdeaSection/>
    
    <ContactSection/>
    {/* <SuccessSnackbar/> */}
    <Footer/>

    </>
  )
}

export default App
