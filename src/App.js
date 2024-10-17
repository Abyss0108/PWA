// src/App.js
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './views/Inicio';
import Nota from './views/Notas';
import Especialista from './views/Especialistas';
import Ayuda from './views/Ayuda';
import Contacto from './views/Contacto';
import Loginn from './views/Login';
import Adminn from './views/Admin';
import Cita from './views/Citas';
import Difusionn from './views/Difusion';
import Expedientess from './views/Expedientes';
import Pacientes from './views/Pacientes';
import Terminos from './views/Terminos';
import Privacidad from './views/Politicas';
import Cookie from './views/Cookies';
import error404 from './componentes/Error404';
import Registro from './views/Registro';
import Recuperacion from './views/Recuperacion';
import ResetPassword from './componentes/ResetPass';
import Usuarios from './views/Usuarios';
import { AuthContextProvider } from './Auth/AuthProvider';
import { CSPMetaTag } from './CSP/CspMetaTag';
import RecuperacionPreguntaa from './views/RecuperacionPregunta';
import CitasDisponibles from './views/citasDisponibles';
import Mate from './componentes/mate';
import HorariosAtencion from './views/HorariosAtencion';
import ClasificacionHeridas from './views/ClasificacionHeridas';
import EvaluacionSistematizada from './views/EvaluacionSitematizada';
import RegistroHeridas from './views/RegistroHeridas';
import EditarHeridas from './views/EditarHeridas';
import AppShell from './componentes/AppShell';

function App() {
  return (  
    <AuthContextProvider>
      <BrowserRouter>
        <CSPMetaTag />
        <AppShell />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
