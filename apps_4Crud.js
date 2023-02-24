let listaPersonas = [];

const objPersona = {
    id: '',
    nombre: '', 
    apellido: '',
    edad:'',
    cedula: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreImput = document.querySelector('#nombre');
const apellidoImput = document.querySelector('#apellido');
const edadImput = document.querySelector('#edad');
const cedulaImput = document.querySelector('#cedula');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();


    if(nombreImput.value === '' || apellidoImput.value === '' || edadImput.value === ''|| cedulaImput.value === '') {
        alert('todos los campos son obligatorios llenarlos.');
        return;
    }

    if(editando) {
        editarPersona();
        editando = false;
    } else {
        objPersona.id = Date.now();
        objPersona.nombre = nombreImput.value;
        objPersona.apellido = apellidoImput.value; 
        objPersona.edad = edadImput.value;
        objPersona.cedula = cedulaImput.value;


        agregarPersona();
    }
}

function agregarPersona() {
    listaPersonas.push({...objPersona});

    mostrarPersonas();

    formulario.reset();

    limpiarobjeto();
}

function limpiarobjeto() {
    objPersona.id = '';
    objPersona.nombre = '';
    objPersona.apellido = ''; 
    objPersona.edad = '';
    objPersona.cedula = '';
}

function mostrarPersonas(){

    limpiarHTML();

    const divPersonas = document.querySelector('.div-Personas');

    listaPersonas.forEach( persona => {
        const {id, nombre, apellido, edad, cedula } = persona;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre}  ${apellido} - ${edad} -  ${cedula} `;
        parrafo.dataset.id = id; 

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargartPersona(persona);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);


        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminartpersona(id);
        eliminarBoton.textContent = 'eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divPersonas.appendChild(parrafo);
        divPersonas.appendChild(hr);

    });
}

function cargartPersona(persona){
    const {id, nombre, apellido, edad, cedula} = persona;
    
    nombreImput.value = nombre;
    apellidoImput.value = apellido;
    edadImput.value = edad;
    cedulaImput.value = cedula;

    objPersona.id = id;

    formulario.querySelector('button[type ="submit"]').textContent = 'actualizar';

    editando = true;
}

function editarPersona(){
    objPersona.nombre = nombreImput.value;
    objPersona.apellido = apellidoImput.value;
    objPersona.edad = edadImput.value;
    objPersona.cedula = cedulaImput.value;
    
    listaPersonas.map (persona => {

        if(persona.id === objPersona.id) {
            persona.id = objPersona.id;
            persona.nombre = objPersona.nombre;
            persona.apellido = objPersona.apellido;
            persona.edad = objPersona.edad;
            persona.cedula = objPersona.cedula;
        }
    });

    limpiarHTML();
    mostrarPersonas();

    formulario.reset();

    formulario.querySelector('button[type="submit"]').textConten = 'Agh';

    editando = false;
}

function eliminartpersona(id){

    listaPersonas = listaPersonas.filter(persona => persona.id !== id );

    limpiarHTML();
    mostrarPersonas();
}

function limpiarHTML(){
    const divPersonas = document.querySelector('.div-Personas');
    while(divPersonas.firstChild){
        divPersonas.removeChild(divPersonas.firstChild);
    }
}