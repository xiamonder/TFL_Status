import { Route, Routes } from "react-router-dom";
import { AllLinesPage } from "./Components/AllLinesPage/AllLinesPage";
import { SingleLinePage } from "./Components/SingleLinePage/SingleLinePage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/travel" element={<AllLinesPage />} />
        <Route path="/travel/:tubeLine" element={<SingleLinePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
