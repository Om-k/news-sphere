import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsFeed from "./containers/NewsFeed";
import NewsFeedSearch from "./containers/NewsFeedSearch";
import Navbar from "./containers/Navbar";
import Personalize from './containers/Personalize';
import SearchFilter from './containers/SearchFilter';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/*Top Content*/}
        <Navbar />

        {/* Main content*/}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<NewsFeed/>} />
            <Route path="/search" element={<NewsFeedSearch />} />
            <Route path="/personalize" element={<Personalize />} />
            <Route path="/filter" element={<SearchFilter />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

