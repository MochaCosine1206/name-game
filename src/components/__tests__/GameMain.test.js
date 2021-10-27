import React from "react";
import GameMain from "../GameMain";
import { render, screen } from "@testing-library/react";
import { Provider as GameModeProvider } from "../../context/gameContext";
import { Provider as EmployeeProvider } from "../../context/employeeContext";
import userEvent from "@testing-library/user-event";

describe("<GameMain />", () => {
  beforeEach(() => {
    render(
      <GameModeProvider>
        <EmployeeProvider>
          <GameMain />
        </EmployeeProvider>
      </GameModeProvider>
    );
  });

  describe("when page is initialized", () => {
    it("then shows the selection screen by default", () => {
      expect(
        screen.getByText(
          /Try matching the WillowTree employee to their photo./i
        )
      ).toBeTruthy();
    });
  });

});
