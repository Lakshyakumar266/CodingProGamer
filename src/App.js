import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

import Index from "./components/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from './components/blogs/Blogs';
import NotFound from './components/home/NotFound';
import Projects from './components/projects/Projects';
import Contact from './components/home/Contact';
import Dashboard from './components/admin/Dashboard';

function App() {
  const [Theme, setTheme] = useState('')
  useEffect(() => {

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }

    // Whenever the user explicitly chooses light mode
    // localStorage.theme = 'light'

    // Whenever the user explicitly chooses dark mode
    // localStorage.theme = 'dark'

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
  }, [])



  return (
    <>
      <Router>
        <div className='dark:bg-zinc-900'>

          <Header />

          <Routes>
            <Route exact path="/dashboard/:task" element={<Dashboard />} />

            <Route exact path="/blogs" element={<Blogs />} />

            <Route exact path="/projects" element={<Projects />} />

            <Route exact path="/contact" element={<Contact />} />

            <Route exact path="/" element={<Index theme={Theme} setTheme={setTheme} />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
