import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import renderer from "react-test-renderer";

it('<Home /> snapshot', () => {
  const component = renderer.create(<Home />);
  expect(component).toMatchSnapshot();
});