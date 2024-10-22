import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen'; 
import Nota from '../views/Notas';
import Especialista from '../views/Especialistas';
import Ayuda from '../views/Ayuda';
import Contacto from '../views/Contacto';
import CitasDisponibles from './views/citasDisponibles';

const AppShell = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} /> 
          <Route path="/Notas" element={<Nota />} />
          <Route path="/Especialistas" element={<Especialista />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Citas-Disponibles" Component={CitasDisponibles}></Route>
        </Routes>
      )}
    </>
  );
};

export default AppShell;
