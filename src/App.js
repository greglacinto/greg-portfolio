import './App.css';

import {ChakraProvider} from '@chakra-ui/react'

import { AlertProvider } from './context/alertContext';
import Alert from './components/Alert';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactMeSection from './components/ContactMeSection';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
