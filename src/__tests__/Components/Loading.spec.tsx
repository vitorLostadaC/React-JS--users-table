import { render, screen } from "@testing-library/react";
import { Loading } from "../../Components/Loading/Loading";

describe("Loading Component", () => {
  it("is rendered", () => {
    render(<Loading />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
