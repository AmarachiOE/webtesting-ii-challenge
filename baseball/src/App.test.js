import React from 'react';
import { render, fireEvent } from "react-testing-library";
import 'react-testing-library/cleanup-after-each';
import App from './App';

describe("<App/>", () => {
  it('renders without crashing', () => {
    render(<App/>);

  });

  it("should display text baseball", () => {
    const { getByText } = render(<App/>);
    getByText(/baseball/i);
  });
});

describe("<App/> Methods", () => {

  describe("Balls", () => {
    it("should increase ball count", () => {
      //const { getByTestId } = render(<App/>);
      //const ballButton = getByTestId('ball');
      //fireEvent.click(ballButton);

      const { getByText } = render(<App/>);
      const ballButton = getByText("Ball");
      fireEvent.click(ballButton);
      getByText(/balls: 1/i);
    });
  });

  describe("Strikes", () => {
    it("should increase strike count", () => {
      const { getByText } = render(<App/>);
      const strikeButton = getByText("Strike");
      fireEvent.click(strikeButton);
      getByText(/strikes: 1/i);
    });
  });

  describe("Hits", () => {
    
  });

  describe("Fouls", () => {
    
  });

});



