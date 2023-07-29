import LandingSection from "../components/LandingSection";
import ProjectsSection from "./routes/ProjectsSection";
import ContactMeSection from "./routes/ContactMeSection";

function Home() {
  return (
    <>
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
    </>
  );
}

export default Home;
