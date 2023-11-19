import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Portfolio from './Portfolio';
import Employee from './Employee';


const routes = [
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/home", element: <Home /> },
  {path:"/employee", element: <Employee/>}
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />

          ))}

          <Route path="*" element={<Navigate to='/home' />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
