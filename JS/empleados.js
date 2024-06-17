// Función para mostrar el modal al hacer clic en el botón "Registrar Nuevo Empleado"
const openModalBtn = document.querySelector('#openModalBtn');
const closeModalBtn = document.querySelector('#closeModalBtn');
const modal = document.querySelector('#myModal');

openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Función para redirigir a la página de pedidos al hacer clic en un cliente
function redirectToPedidos(empleado) {
    // Aquí podrías realizar alguna lógica adicional según el cliente seleccionado, si es necesario
    console.log(`Redirigiendo a la página de pedidos para el cliente: ${empleado}`);

    // Redirige a la página de pedidos (pedidos_dashboard.html)
    window.location.href = 'pagos_dashboard.html';
}

fetch('https://8h6dgxkw-1234.brs.devtunnels.ms/empleados')
    .then(r => r.json())
    .then(data => {
        // Referencia al cuerpo de la tabla
        const tableBody = document.querySelector('tbody');

        // Limpiar contenido existente (opcional)
        tableBody.innerHTML = '';

        // Iterar sobre cada empleado y agregar una fila a la tabla
        data.forEach(empleado => {
            const newRow = document.createElement('tr');

            newRow.innerHTML = `
            <td class="py-2 px-4">${empleado.nombre}</td>
            <td class="py-2 px-4">${empleado.dni}</td>
            <td class="py-2 px-4">${empleado.telefono}</td>
            <td class="py-2 px-4">${empleado.tipo_empleado}</td>
            <td class="py-2 px-4">${new Date(empleado.fecha_ingreso).toLocaleDateString('es-ES')}</td>
            <td class="py-2 px-4">
                <button class="text-blue-500 hover:text-blue-700 focus:outline-none">
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="text-red-500 hover:text-red-700 focus:outline-none">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        `;

            // Agregar la nueva fila a la tabla
            tableBody.appendChild(newRow);
        });
    })
    .catch(err => {
        console.error('Error al obtener datos de empleados:', err);
    });