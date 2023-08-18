
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from "react-router-dom";
import NewsItem from './Components/NewsItem';




export default class App extends Component{
  render() {
    return (
      <>
     <Navbar/>
          <Routes>
            <Route exact path="/General" element={<News key="general" pageSize={6} country="in" category="general" />} />
            <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="health" />} />
            <Route exact path="/Sports" element={<News key="Sports" pageSize={6} country="in" category="Sports" />} />
            <Route exact path="/Science" element={<News key="Science" pageSize={6} country="in" category="Science" />} />
            <Route exact path="/Business" element={<News key="Business"  pageSize={6} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News key="Entertainment"  pageSize={6} country="in" category="Entertainment" />} />
            <Route exact path="/Technology" element={<News key="Technology"  pageSize={6} country="in" category="Technology" />} />

          </Routes>
      
      </>
 
    )
  }
}

// api Link News

// ae0b60d54ea144d5ab1da1f8c67e8adb

