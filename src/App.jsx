import './App.scss'
import DirectionsSection from './components/DirectionsSection/DirectionsSection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OrganizationSection from './components/OrganizationSection/OrganizationSection';
import PartnersSection from './components/PartnersSection/PartnersSection';
import ProgramSection from './components/ProgramSection/ProgramSection';
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
     
    </>
  )
}

export default App
