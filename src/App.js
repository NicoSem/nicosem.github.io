import './style.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetails';
import NotFoundPage from './pages/NotFoundPage';
import ContactDetails from './components/ContactDetails.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ContactDetails />
        <div className="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
