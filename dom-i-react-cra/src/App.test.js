import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FilterableProductTable from './components/TestComponents/FilterableProductTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const div2 = document.createElement('div');
ReactDOM.render(<FilterableProductTable />, div2);