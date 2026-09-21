import { act, render, screen } from "@testing-library/react";
import Home from "../../pages";

jest.mock("@vercel/speed-insights/react", () => ({
    SpeedInsights: () => null,
}), { virtual: true });

jest.mock("@vercel/analytics/react", () => ({
    Analytics: () => null,
}), { virtual: true });

test("renders the portfolio headline and removes the resume CTA", () => {
    jest.useFakeTimers();
    render(<Home />);

    act(() => {
        jest.advanceTimersByTime(50000);
    });

    expect(screen.getAllByText(/software engineer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Vancouver, British Columbia, Canada/i).length).toBeGreaterThan(0);
    expect(screen.queryByText(/View Full Resume/i)).not.toBeInTheDocument();

    jest.useRealTimers();
});
