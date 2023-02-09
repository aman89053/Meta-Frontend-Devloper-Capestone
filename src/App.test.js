import React from "react";
import { render, fireEvent,screen } from "@testing-library/react";
import BookingTable from "./components/BookingTable";
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom'
test('render heading of booking table',()=>{
    render(
        <Router>
            <BookingTable />
        </Router>
    );
    const HeadingElement = screen.getByText("BOOK YOUR TABLE NOW");
    expect(HeadingElement).toBeInTheDocument();
})


    test("should render booking(input) component correctly", () => {
      render( <Router>
        <BookingTable />
    </Router>);
      const element = screen.getByRole('dialog');
      expect(element).toBeInTheDocument();
    });

  