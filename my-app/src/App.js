//  @TODO1 - Create basic routing app. On each page, display a heading of its name.

import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Clock from './components/Clock';
import Home from './components/Home';
// **TODO3**: Use an UI framework for styling
import Button from '@material-ui/core/Button';
import Posts from './components/Posts';
import Post from './components/Post';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorDemo from './components/ErrorDemo';
import ChildComponent from './components/ChildComponent';
import Dashboard from './components/Dashboard';
import Greeting from './components/Greeting';
const name = 'John';
const App = () => {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.focusInput();
  };
  
  return (
    <div>
      <Greeting name={name} />
    <div>
    <button onClick={handleClick}>Focus Input</button>
      <ChildComponent ref={childRef} />
  </div>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<ErrorDemo />} /> 
        <Route path="/calculator" element={<Calculator />} /> 
        <Route path="/clock" element={<Clock />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
      <Button variant="contained" color="primary" href="/">Go to Home</Button>
      <br />
      <br />
      <Button variant="contained" color="primary" href="/calculator">Go to Calculator</Button>
      <br />
      <br />
      <Button variant="contained" color="primary" href="/dashboard">Go to Dashboard</Button>
      <br />
      <br />
      <Button variant="contained" color="primary" href="/clock">Go to Clock</Button>
      <br />
      <br />
      <Button variant="contained" color="primary" href="/posts">Go to Posts</Button>
      <br />
      <br />
      <Button variant="contained" color="primary" href="/error">ErrorDemo</Button>
      
    </ErrorBoundary>
    </div>
  );
};

export default App;