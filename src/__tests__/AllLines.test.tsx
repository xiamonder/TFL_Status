import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AllLinesPage } from "../Components/AllLinesPage/AllLinesPage";
import { Line } from "../utilities/types";
import { formatDate } from "../utilities/dateConverter";
import { getAllLinesStatus } from "../utilities/api_utils";

jest.mock("../utilities/api_utils");
const mockData: Line[] = [
  {
    id: "bakerloo",
    name: "Bakerloo",
    created: "2019-04-07T10:20:30Z",
    lineStatuses: [
      {
        statusSeverityDescription: "Good Service",
        reason: "",
        validityPeriods: [],
      },
    ],
  },
];
(getAllLinesStatus as jest.Mock).mockResolvedValue({ data: mockData });

const RealDate = Date.now;
beforeAll(() => {
  global.Date.now = jest.fn(() => new Date("2019-04-07T10:20:30Z").getTime());
});

afterAll(() => {
  global.Date.now = RealDate;
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("AllLinesPage tests", () => {
  test("renders without crashing", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <AllLinesPage />
        </BrowserRouter>,
      );
    });
  });

  test("should display correct data from API call", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <AllLinesPage />
        </BrowserRouter>,
      );
    });

    await waitFor(() => {
      expect(screen.getByText("Bakerloo")).toBeInTheDocument();
      expect(screen.getByText("Good Service")).toBeInTheDocument();
    });
  });

  test("should display the time page was last refreshed", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <AllLinesPage />
        </BrowserRouter>,
      );
    });
    const date = formatDate(Date.now());
    await waitFor(() => {
      expect(screen.getByText(`Last Updated: ${date}`)).toBeInTheDocument();
    });
  });

  test("should render LinkButton with correct link", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <AllLinesPage />
        </BrowserRouter>,
      );
    });
    await waitFor(() => {
      const linkButton = screen.getByText("View More");
      expect(linkButton).toBeInTheDocument();
      expect(linkButton).toHaveAttribute("href", "/travel/bakerloo");
    });
  });

  test("should render refresh button and handle refresh action", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <AllLinesPage />
        </BrowserRouter>,
      );
    });
    await waitFor(() => {
      expect(screen.getByText("Bakerloo")).toBeInTheDocument();
    });
    const refreshButton = screen.getByText("Refresh");
    fireEvent.click(refreshButton);

    await waitFor(() => {
      expect(screen.getByText("Bakerloo")).toBeInTheDocument();
    });
  });

  test("should render error with correct details if API fails", async () => {
    (getAllLinesStatus as jest.Mock).mockRejectedValueOnce({
      response: {
        data: {
          httpStatusCode: 500,
          httpStatus: "Internal Server Error",
          message: "An error occurred",
        },
      },
    });

    await act(async () => {
      render(
        <BrowserRouter>
          <AllLinesPage />
        </BrowserRouter>,
      );
    });

    await waitFor(() => {
      expect(
        screen.getByText("500: Internal Server Error"),
      ).toBeInTheDocument();
      expect(screen.getByText("An error occurred")).toBeInTheDocument();
      expect(screen.getByText("Return")).toBeInTheDocument();
    });
  });
});
