import React from 'react';
import ReactDOM from 'react-dom';
import Round from './Round';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Round />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<Round /> snapshot', () => {
  const component = renderer.create(<Round />);
  expect(component).toMatchSnapshot();
});