import Layout from "./layout/Layout";
import AboutSection from "./Maincontent/AboutSection";
import Projects from "./Maincontent/Projectx";
import Experience from "./Maincontent/Experience";
import Education from "./Maincontent/Education";
import Skills from "./Maincontent/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Abhishek Sharma | Portfolio</title>
        <meta name="description" content="Portfolio of Abhishek Sharma - MERN Stack Developer, DSA enthusiast, and lifelong learner." />
        <meta property="og:title" content="Abhishek Sharma | Portfolio" />
        <meta property="og:description" content="Portfolio of Abhishek Sharma - MERN Stack Developer, DSA enthusiast, and lifelong learner." />
        <meta property="og:type" content="website" />
      </Helmet>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AboutSection />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
