import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GameList from './pages/GameList.jsx';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
// Import the necessary routing components for the application.

const router = createBrowserRouter([
  /****
   * Indicate the path and add the element(s) created from the pages.
   */  
  { path: '/', element: <GameList />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* Replace the App component and set up routing in your app using RouterProvider component */}
  </StrictMode>,
)
