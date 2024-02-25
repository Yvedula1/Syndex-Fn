import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import Landing from "../src/views/Landing";
import NotFoundPage from "../src/views/404page";

describe("App", async () => {
  it('testing App component "', async () => {
    const app = render(App());
    expect(app);
  });
  it('testing Landing component "', async () => {
    render(Landing());
    const txt = screen.getByText("SYNDEX");
    expect(txt).toBeVisible();
  });
  it('testing Landing component "', async () => {
    render(NotFoundPage());
    const txt = screen.getByText("Still in development");
    expect(txt).toBeVisible();
  });
});
