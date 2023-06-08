import { Provider } from 'react-redux';
import logo from './logo.svg';

import Router from './Routes/route';
import { store } from './app/store';


function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
