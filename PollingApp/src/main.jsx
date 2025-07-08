import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Questions from './Pages/Questions.jsx';
import Demo from './Pages/Demo.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute'; // Adjust path accordingly
import { store } from './store/store.js';
import { Provider } from 'react-redux';
import CreatePoll from './Pages/CreatePoll.jsx';
import PollQuestion from './Pages/PollQuestion.jsx';
import PollResult from './Pages/PollResult.jsx';
import ExplorePolls from './Pages/ExplorePolls.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/poll/:id/result"
        element={
          <PrivateRoute>
            <PollResult />
          </PrivateRoute>
        }
      />
      <Route
        path="/poll/:id"
        element={
          <PrivateRoute>
            <PollQuestion />
          </PrivateRoute>
        }
      />

      <Route
        path="/questions"
        element={
          <PrivateRoute>
            <Questions />
          </PrivateRoute>
        }
      />

      <Route
        path='/create-poll'
        element={
          <PrivateRoute>
            <CreatePoll />
          </PrivateRoute>
        }
      />
      <Route
        path="/demo"
        element={
          <Demo />
        }
      />

      <Route path="/explore" element={<ExplorePolls />} />

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <Provider  store={store}>

    <RouterProvider router={router} />
  </Provider >
);
