import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

it('<Game /> snapshot', () => {
  const component = renderer.create(<BrowserRouter><Game /></BrowserRouter>);
  expect(component).toMatchSnapshot();
});