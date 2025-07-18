import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LemonadeList from './components/LemonadeList';

function App() {
  return (
    <>
      <Header />
      <main>
        <LemonadeList />
      </main>
      <Footer />
    </>
  );
}

export default App;
