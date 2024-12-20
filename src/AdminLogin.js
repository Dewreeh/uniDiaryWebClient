import Header from './components/Header'
import FormAdmin from './components/FormAdmin'
import App from './App'
import {Link, Routes, Route} from 'react-router-dom';
import './components/index.css';

function AdminLogin() {
  return (
        <div className="AdminLogin">
          <div className="body">
            <div className="login-form">
            <FormAdmin />
            </div>
          </div>
          <Link to='/login'><a className="change-type-of-user">Вход для остальных пользователей</a></Link>

        </div>

  );
}

export default AdminLogin;
