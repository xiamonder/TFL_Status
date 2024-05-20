import { Route, Routes } from "react-router-dom";
import { AllLinesPage } from "./AllLinesPage/AllLinesPage";
import { SingleLinePage } from "./SingleLinePage/SingleLinePage";

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
