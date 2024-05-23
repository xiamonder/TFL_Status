import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { AllLinesPage } from "../Components/AllLinesPage/AllLinesPage";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  expect(true).toBeTruthy();
});


  test("Loading component should render initially on pages", () => {
    render(
      <BrowserRouter>
        <AllLinesPage />
      </BrowserRouter>,
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  
