import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRoute,  createRoutesFromElements, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Questions from './Pages/Questions.jsx';
import Demo from './Pages/Demo.jsx';
const router = createBrowserRoute(
  createRoutesFromElements(
    <Route path='/' element = {<App />}>
      <Route index element = {<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/questions' element= {<Questions/>}/>
      <Route path='/demo' element= {<Demo/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
