import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ModalProvider } from '@contexts/ModalContext';
import SignupForm from '@pages/auth/SignupForm';
import LoginForm from '@pages/auth/LoginForm';

const App = () => {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Navigate to="/signup" replace />} />
      </Routes>
    </ModalProvider>
  );
};

export default App;
