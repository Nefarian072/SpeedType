import React from 'react';
import Header from './components/Header';
import TextDisplayComponent from './components/TextDisplayComponent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <TextDisplayComponent
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
