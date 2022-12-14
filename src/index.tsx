import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme  } from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import WelcomePage from './routes/WelcomePage';
import VotePage from './routes/VotePage';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Leadrboard from './routes/Leaderbord';
import NewEventPage from './routes/NewEvent';

const theme = extendTheme({

})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />}/>
          <Route path='/vote' element={<VotePage />}/>
          <Route path='/leaderboard' element={<Leadrboard />}/>
          <Route path='/newEvent' element={<NewEventPage />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
