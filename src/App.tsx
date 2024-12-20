import * as styles from "./App.styles";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div css={styles.container}>
      <header css={styles.header}>
          <HeroSection />
      </header>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
    </div>
  );
}

export default App;
