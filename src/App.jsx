import './App.scss'
import AdressSection from './components/AdressSection/AdressSection';
import DirectionsSection from './components/DirectionsSection/DirectionsSection';
import Footer from './components/Footer/Fotter';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import LinksSection from './components/LinksSection/LinksSection';
import NavSection from './components/NavSection/NavSection';
import OrganizationSection from './components/OrganizationSection/OrganizationSection';
import PartnersSection from './components/PartnersSection/PartnersSection';
import ProgramSection from './components/ProgramSection/ProgramSection';
import QuestionSection from './components/QuestionSection/QuestionSection';
import SectionsSection from './components/SectionsSection/SectionsSection';
import './styles/main.scss';


function App() {

  return (
    <>

    <Header />
    <HeroSection />
    <ProgramSection />
    <SectionsSection/>
    <DirectionsSection />
    <PartnersSection />
    <OrganizationSection />
    <QuestionSection />
    <LinksSection />
    <NavSection />
    <AdressSection />
    <Footer />
     
    </>
  )
}

export default App
