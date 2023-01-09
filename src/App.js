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
import ProjectSingle from './components/projects/ProjectSingle';
import BlogSingle from './components/blogs/BlogSingle';

function App() {
  const [Theme, setTheme] = useState('')
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [])



  return (
    <>
      <Router>
        <div className='dark:bg-zinc-900' id='mainContainer'>

          <Header />

          <Routes>
            <Route exact path="/dashboard/:task" element={<Dashboard />} />


            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/blogpost/:slug" element={<BlogSingle />} />


            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/project/:slug" element={<ProjectSingle />} />

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
