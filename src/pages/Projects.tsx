import CompletedProjects from "../components/CompletedProjects";
import ProjectHeroSection from "../components/ProjectHeroSection";
import QA from "../components/QA";
import SiteVisit from "../components/SiteVisit";

export default function Projects() {
  return (
    <>
      <ProjectHeroSection />
      <CompletedProjects />
      <QA />
      <SiteVisit />
    </>
  );
}
