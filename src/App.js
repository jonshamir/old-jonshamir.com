import ContourEffect from "./components/ContourEffect/ContourEffect";
import IntroSection from "./components/IntroSection/IntroSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <ContourEffect />
      <Nav />
      <SocialLinks />
      <IntroSection />
      <ProjectSection />
    </div>
  );
}

export default App;
