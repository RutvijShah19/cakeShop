import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import logo from './logo.svg';
import './App.css';
import CakeShop from './components/cakeShop';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeShop />
      </div>
    </Provider>
  );
}

export default App;
