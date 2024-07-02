import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import FeaturesPage from "./pages/FeaturesPage";
import OurTeamPage from "./pages/OurTeamPage";
import FAQsPage from "./pages/FAQsPage";
import TestimonialsPage from "./pages/TestimonialPage";
import ErrorPage from "./pages/ErrorPage404";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/AI-Tech" element={<Home></Home>}></Route>
          <Route
            path="/AI-Tech/about"
            element={<AboutPage></AboutPage>}
          ></Route>
          <Route
            path="/AI-Tech/services"
            element={<ServicesPage></ServicesPage>}
          ></Route>
          <Route
            path="/AI-Tech/projects"
            element={<ProjectsPage></ProjectsPage>}
          ></Route>
          <Route
            path="/AI-Tech/features"
            element={<FeaturesPage></FeaturesPage>}
          ></Route>
          <Route
            path="/AI-Tech/team"
            element={<OurTeamPage></OurTeamPage>}
          ></Route>
          <Route path="/AI-Tech/faqs" element={<FAQsPage></FAQsPage>}></Route>
          <Route
            path="/AI-Tech/testimonial"
            element={<TestimonialsPage></TestimonialsPage>}
          ></Route>
          <Route
            path="/AI-Tech/error"
            element={<ErrorPage></ErrorPage>}
          ></Route>
          <Route path="/AI-Tech/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
