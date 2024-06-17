const nuevoClienteBtn = document.querySelector('#nuevoClienteBtn');
const modalAgregarCliente = document.querySelector('#modalAgregarCliente');
const cerrarModalBtn = document.querySelector('#cerrarModal');
const formularioCliente = document.querySelector('#formularioCliente');
const listaClientes = document.querySelector('#listaClientes');

nuevoClienteBtn.addEventListener('click', () => {
    modalAgregarCliente.classList.remove('hidden');
});

cerrarModalBtn.addEventListener('click', () => {
    modalAgregarCliente.classList.add('hidden');
});

formularioCliente.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(formularioCliente);
    const clienteData = Object.fromEntries(formData.entries());
    console.log(clienteData)
    try {
        const response = await fetch('https://8h6dgxkw-1234.brs.devtunnels.ms/pollerias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clienteData)
        });

        if (response.ok) {
            cargarClientesDesdeAPI();
            modalAgregarCliente.classList.add('hidden');
        } else {
            console.error('Error al guardar el cliente');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
});

// Función para cargar clientes desde la API
async function cargarClientesDesdeAPI() {
    try {
        const response = await fetch('https://8h6dgxkw-1234.brs.devtunnels.ms/pollerias');
        const data = await response.json();

        // Limpiar la lista de clientes existentes
        listaClientes.innerHTML = '';

        // Iterar sobre los datos de la API y crear elementos de lista para cada cliente
        data.forEach(cliente => {
            const listItem = document.createElement('li');
            listItem.classList.add('flex', 'items-center', 'justify-between', 'py-2', 'border-b');
            listItem.innerHTML = `
                        <div>
                            <span class="text-lg font-semibold cursor-pointer">${cliente.nombre_empresa}</span>
                            <br>
                            <span>Titular: ${cliente.titular}</span>
                            <br>
                            <span>RUC: ${cliente.ruc}</span>
                           

                            <br>
                            <span>Teléfono: ${cliente.telefono}</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="text-blue-500 hover:text-blue-700 focus:outline-none">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button class="text-red-500 hover:text-red-700 focus:outline-none">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    `;
            listaClientes.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al cargar los clientes desde la API:', error);
    }
}

// Llamar a la función para cargar los clientes al cargar la página
cargarClientesDesdeAPI();