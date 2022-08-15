import { fireEvent, render, screen } from "@testing-library/react";

import { mockdbTest } from "../../../dbTest";
import { Home } from "../../Pages/Home/Home";

jest.mock("../../service/api", () => {
  return {
    api: {
      get: (route: string) => {
        if (route === "/users") {
          return Promise.resolve({ data: mockdbTest });
        }
      },
    },
  };
});

describe("Home Page", () => {
  it("render without error", async () => {
    render(<Home />);

    expect(await screen.findByText("TESTE 1")).toBeInTheDocument();
  });

  it("render popup preferences", async () => {
    render(<Home />);

    const openMenuPreferences = screen.getByTestId("open-menu");

    fireEvent.click(openMenuPreferences);

    expect(await screen.findByText("Padrão")).toBeInTheDocument();
  });

  it("change line per page", async () => {
    render(<Home />);

    const openMenuPreferences = screen.getByTestId("open-menu");
    fireEvent.click(openMenuPreferences);

    const checkboxNormal = screen.getByTestId("checkbox-normal");
    fireEvent.click(checkboxNormal);

    expect(await screen.findAllByText("NOME DA EMPRESA")).toHaveLength(20);

    const checkboxIncreased = screen.getByTestId("checkbox-increased");
    fireEvent.click(checkboxIncreased);

    expect(await screen.findAllByText("NOME DA EMPRESA")).toHaveLength(50);
  });

  it("change visible columns", async () => {
    render(<Home />);

    const openMenuPreferences = screen.getByTestId("open-menu");
    fireEvent.click(openMenuPreferences);

    expect(await screen.findByText("USUÁRIO")).toBeInTheDocument();
    expect(await screen.findByText("EMAIL")).toBeInTheDocument();
    expect(await screen.findByText("CLIENTE")).toBeInTheDocument();
    expect(await screen.findByText("PERFIL DE ACESSO")).toBeInTheDocument();

    const checkboxUser = screen.getByTestId("checkbox-user");
    fireEvent.click(checkboxUser);

    const checkboxEmail = screen.getByTestId("checkbox-email");
    fireEvent.click(checkboxEmail);

    const checkboxClient = screen.getByTestId("checkbox-client");
    fireEvent.click(checkboxClient);

    const checkboxEnterprise = screen.getByTestId("checkbox-enterprise");
    fireEvent.click(checkboxEnterprise);

    expect(screen.queryByText("USUÁRIO")).not.toBeInTheDocument();
    expect(screen.queryByText("EMAIL")).not.toBeInTheDocument();
    expect(screen.queryByText("CLIENTE")).not.toBeInTheDocument();
    expect(screen.queryByText("PERFIL DE ACESSO")).not.toBeInTheDocument();
  });

  it("change page", async () => {
    render(<Home />);

    expect(screen.queryByText("TESTE 21")).not.toBeInTheDocument();

    const buttonPageTwo = await screen.findByText("2");
    fireEvent.click(buttonPageTwo);

    expect(screen.queryByText("TESTE 21")).toBeInTheDocument();
  });
});
