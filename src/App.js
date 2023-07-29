import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./routes/ProjectsSection";
import ContactMeSection from "./routes/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contactme" element={<ContactMeSection />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
