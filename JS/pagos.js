fetch('http://172.20.10.11:1234/Ventas')
    .then(r => r.json())
    .then(data => {
        // Referencia al cuerpo de la tabla de pagos
        const tableBody = document.querySelector('#pagosTableBody');

        // Limpiar contenido existente (opcional)
        tableBody.innerHTML = '';

        // Iterar sobre cada empleado y agregar una fila a la tabla de pagos
        data.forEach(venta => {
            const newRow = document.createElement('tr');

            newRow.innerHTML = `
                        <td class="py-2 px-4">${venta.nombre}</td>
                        <td class="py-2 px-4">${new Date().toLocaleDateString('es-ES')}</td>
                        <td class="py-2 px-4">$${venta.sueldo}</td>
                        <td class="py-2 px-4">
                            <span id="estado-${venta.id}" class="bg-gray-400 text-white font-bold py-1 px-3 rounded-full">Pendiente</span>
                        </td>
                    `;

            // Agregar la nueva fila a la tabla de pagos
            tableBody.appendChild(newRow);
        });
    })
    .catch(err => {
        console.error('Error al obtener datos de empleados:', err);
    });