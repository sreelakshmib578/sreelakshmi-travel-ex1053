import './App.css';
import LoginPage from './pages/login';
import Registration from './pages/registration';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AdminPage from './pages/adminPage';
import UserPage from './pages/userPage';

function App() {
  return (
      <div className="outer">
        <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/register" element={<Registration />} />
              <Route path="*" element={<Navigate to ="/login" />}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
