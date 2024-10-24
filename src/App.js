import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
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
import Error404 from './componentes/Error404';
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

const AppShell = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajusta el tiempo del SplashScreen si lo consideras necesario

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <CSPMetaTag />
        {isLoading ? (
          <SplashScreen />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Notas" element={<Nota />} />
            <Route path="/Especialistas" element={<Especialista />} />
            <Route path="/Ayuda" element={<Ayuda />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Login" element={<Loginn />} />
            <Route path="/Admin" element={<Adminn />} />
            <Route path="/Citas" element={<Cita />} />
            <Route path="/Difusion" element={<Difusionn />} />
            <Route path="/Expedientes" element={<Expedientess />} />
            <Route path="/Pacientes" element={<Pacientes />} />
            <Route path="/Terminos" element={<Terminos />} />
            <Route path="/Politicas" element={<Privacidad />} />
            <Route path="/Cookies" element={<Cookie />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Recuperacion" element={<Recuperacion />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Usuarios" element={<Usuarios />} />
            <Route path="/RecuperacionPregunta" element={<RecuperacionPreguntaa />} />
            <Route path="/CitasDisponibles" element={<CitasDisponibles />} />
            <Route path="/HorariosAtencion" element={<HorariosAtencion />} />
            <Route path="/ClasificacionHeridas" element={<ClasificacionHeridas />} />
            <Route path="/EvaluacionSistematizada" element={<EvaluacionSistematizada />} />
            <Route path="/RegistroHeridas" element={<RegistroHeridas />} />
            <Route path="/EditarHeridas" element={<EditarHeridas />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        )}
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default AppShell;
