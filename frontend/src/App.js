import React from 'react';
import {Routes, Route} from "react-router-dom";
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}
 
export default App;