import { Route, Routes } from "react-router-dom";
import { AllLinesPage } from "./Components/AllLinesPage/AllLinesPage";
import { SingleLinePage } from "./Components/SingleLinePage/SingleLinePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/travel" element={<AllLinesPage />} />
        <Route path="/travel/:tubeLine" element={<SingleLinePage />} />
      </Routes>
    </>
  );
}

export default App;
