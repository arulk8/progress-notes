import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { NoteList } from './pages/Notes';
import { ProtectedRoute, Header } from './common/components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <NoteList />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>`Theres nothing here: 404!`</p>} />
      </Routes>
    </>
  );
}

export default App;
