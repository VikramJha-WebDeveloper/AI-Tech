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
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route
            path="/services"
            element={<ServicesPage></ServicesPage>}
          ></Route>
          <Route
            path="/projects"
            element={<ProjectsPage></ProjectsPage>}
          ></Route>
          <Route
            path="/features"
            element={<FeaturesPage></FeaturesPage>}
          ></Route>
          <Route path="/team" element={<OurTeamPage></OurTeamPage>}></Route>
          <Route path="/faqs" element={<FAQsPage></FAQsPage>}></Route>
          <Route
            path="/testimonial"
            element={<TestimonialsPage></TestimonialsPage>}
          ></Route>
          <Route path="/error" element={<ErrorPage></ErrorPage>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
