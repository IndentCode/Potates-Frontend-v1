document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = form.email.value;
        const password = form.password.value;

        // Realiza la solicitud POST a la API
        try {
            const response = await fetch('https://8h6dgxkw-1234.brs.devtunnels.ms/administradores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                // Si la solicitud es exitosa, verifica la respuesta
                const userData = await response.json();

                // Verifica si se recibió un usuario válido
                if (userData) {
                    // Inicio de sesión exitoso, redirige al dashboard principal
                    window.location.href = 'main_dashboard.html';
                } else {
                    // Muestra una alerta si las credenciales son incorrectas
                    alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
                }
            } else {
                // Muestra una alerta si la solicitud no fue exitosa
                alert('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo más tarde.');
            }
        } catch (error) {
            console.error('Error al intentar iniciar sesión:', error);
            alert('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo más tarde.');
        }
    });
});