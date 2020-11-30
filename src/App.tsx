import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes/index';
import Header from './components/Header';
import { WatchListContextProvider } from './Context/watchList'

const App: React.FC = () => (
  <>
    <WatchListContextProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </WatchListContextProvider>
  </>
);

export default App;
