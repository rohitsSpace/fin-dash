import React from "react";
import { render, screen } from "@testing-library/react";
import CreditCard from "../../../src/components/CreditCard";

describe("CreditCard Component", () => {
  const mockCardData = {
    balance: 10000,
    cardHolder: "John Doe",
    validThru: "11/25",
    cardNumber: "1234 **** **** 5678",
  };

  it("renders balance correctly", () => {
    render(<CreditCard cardData={mockCardData} />);
    expect(screen.getByText("$10,000")).toBeInTheDocument();
  });

  it("renders card holder's name", () => {
    render(<CreditCard cardData={mockCardData} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders valid through date", () => {
    render(<CreditCard cardData={mockCardData} />);
    expect(screen.getByText("11/25")).toBeInTheDocument();
  });

  it("renders masked card number", () => {
    render(<CreditCard cardData={mockCardData} />);
    expect(screen.getByText("1234 **** **** 5678")).toBeInTheDocument();
  });
});
