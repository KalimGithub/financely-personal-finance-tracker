import './App.css';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;