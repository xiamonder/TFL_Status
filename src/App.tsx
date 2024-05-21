import { Route, Routes } from "react-router-dom";
import { AllLinesPage } from "./Components/AllLinesPage/AllLinesPage";
import { SingleLinePage } from "./Components/SingleLinePage/SingleLinePage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import { WelcomePage } from "./Components/WelcomePage/WelcomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/travel" element={<AllLinesPage />} />
        <Route path="/travel/:tubeLine" element={<SingleLinePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
