// Obtener datos de la API al cargar la página (ejemplo ficticio)
fetch('https://8h6dgxkw-1234.brs.devtunnels.ms/pedidos')
    .then(response => response.json())
    .then(data => {
        console.log([...data])
        // Limpiar contenido existente en la tabla
        const tableBody = document.getElementById('clientesExistentes')
        tableBody.innerHTML = ''

        // Iterar sobre los datos recibidos y crear filas para cada pedido
        data.forEach(pedido => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
            <td class="py-2 px-4">${pedido.polleria_nombre}</td>
            <td class="py-2 px-4">${pedido.fecha}</td>
            <td class="py-2 px-4">${pedido.cantidad_kg}</td>
            <td class="py-2 px-4">$${pedido.precio_kg}</td><td class="py-2 px-4">
            
            </td>
            `;
            tableBody.appendChild(newRow);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos de pedidos:', error);
    });


    /*
    "id": "02baf02a-16cf-11ef-974a-089798930837",
    "cantidad_kg": 104.5,
    "precio_kg": 10.4,
    "fecha": "2024-05-01T05:00:00.000Z",
    "polleria_nombre": "Súper chicken",
    "polleria_titular": "Manrique Domínguez",
    "nombre_administrador": "Fernando Guerrero",
    "email_administrador": "fernandolol169@outlook.com",
    "telefono_administrador": "950209437"

    */