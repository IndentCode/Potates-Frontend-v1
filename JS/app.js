// app.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MainDashboard from './MainDashboard'; // Importa tu componente de dashboard principal

const App = () => {
    useEffect(() => {
        // Verifica la autorización al cargar la aplicación
        checkAuthorization();
    }, []); // Ejecuta solo una vez al cargar la aplicación

    const checkAuthorization = () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            // Si no hay token, redirige al usuario a la página de inicio de sesión
            window.location.href = '/login'; // Cambia a la ruta de tu página de inicio de sesión
        }
    };

    return (
        <Router>
            <div>
                {/* Ruta protegida para el dashboard principal */}
                <Route path="/main_dashboard">
                    <MainDashboard />
                </Route>

                {/* Redirección predeterminada al dashboard principal si está autenticado */}
                <Route exact path="/">
                    {localStorage.getItem('accessToken') ? <Redirect to="/main_dashboard" /> : null}
                </Route>

                {/* Redirige a la página de inicio de sesión si no está autenticado */}
                <Route path="/login">
                    {/* Aquí puedes renderizar tu formulario de inicio de sesión */}
                </Route>
            </div>
        </Router>
    );
};

export default App;