import './style.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage.js';
import ProjectDetailsPage from './pages/projectdetails/ProjectDetailsPage.js';
import NotFoundPage from './pages/notfound/NotFoundPage.js';
import NavBar from './components/navbar/NavBar.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:projectId" element={<ProjectDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
