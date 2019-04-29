// React
import React from 'react';

// Components
import Header from './components/headerComponent/header';
import Home from './components/pageComponent/home';
import Footer from './components/footerComponent/footer';
import OfficialRulesModal from './components/modalComponent/officialrules';

// Css
import './Assets/css/default.min.css';

// Main App
function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Footer />
        <OfficialRulesModal />
    </div>
  );
}

export default App;
