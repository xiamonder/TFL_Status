import { Route, Routes } from "react-router-dom";
import { AllLinesPage } from "./Components/AllLinesPage/AllLinesPage";
import { SingleLinePage } from "./Components/SingleLinePage/SingleLinePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllLinesPage />} />
        <Route path=":tubeLine" element={<SingleLinePage />} />
      </Routes>
    </>
  );
}

export default App;
