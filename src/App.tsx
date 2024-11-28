import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import PortfolioDetail1 from "./pages/Portfolio/project/1/PortfolioDetail1";
import PortfolioDetail2 from "./pages/Portfolio/project/2/PortfolioDetail2";
import PortfolioDetail3 from "./pages/Portfolio/project/3/PortfolioDetail3";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio">
            <Route index element={<Portfolio />} />
            <Route path="detail1" element={<PortfolioDetail1 />} />
            <Route path="detail2" element={<PortfolioDetail2 />} />
            <Route path="detail3" element={<PortfolioDetail3 />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
