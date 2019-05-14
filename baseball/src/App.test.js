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

      const { getByText } = render(<App/>);
      const ballButton = getByText("Ball");
      fireEvent.click(ballButton);
      getByText(/balls: 1/i);
    });

    it("should reset ball count to 0 after 4 balls", () => {

      const { getByText } = render(<App/>);
      const ballButton = getByText("Ball");
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      getByText(/balls: 0/i);
    });
  });

  describe("Strikes", () => {
    it("should increase strike count", () => {
      const { getByText } = render(<App/>);
      const strikeButton = getByText("Strike");
      fireEvent.click(strikeButton);
      getByText(/strikes: 1/i);
    });

    it("should reset strike count to 0 after 3 strikes", () => {
      const { getByText } = render(<App/>);
      const strikeButton = getByText("Strike");
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      getByText(/strikes: 0/i);
    });
  });

  describe("Hits", () => {
    it("should reset ball count to 0", () => {
      const { getByText } = render(<App/>);
      const hitButton = getByText("Hit");
      fireEvent.click(getByText("Ball"));
      fireEvent.click(hitButton);
      getByText(/balls: 0/i);
    });

    it("should reset strike count to 0", () => {
      const { getByText } = render(<App/>);
      const hitButton = getByText("Hit");
      fireEvent.click(getByText("Strike"));
      fireEvent.click(hitButton);
      getByText(/strikes: 0/i);
    });

  });



  describe("Fouls", () => {
    it("should increase strike count by one", () => {
      const { getByText } = render(<App/>);
      const foulButton = getByText("Foul");
      fireEvent.click(foulButton);
      getByText(/strikes: 1/i);
    });

    it("should max out strike count at two", () => {
      const { getByText } = render(<App/>);
      const foulButton = getByText("Foul");
      fireEvent.click(foulButton);
      fireEvent.click(foulButton);
      fireEvent.click(foulButton);
      fireEvent.click(foulButton);
      getByText(/strikes: 2/i);
    });
  });

});



