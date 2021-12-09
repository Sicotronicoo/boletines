const form = document.querySelector('#form');
const inputTexto = document.querySelector('#inputTexto');
const inputPass = document.querySelector('#inputPass');
const inputTextArea = document.querySelector('#inputTextArea');
const inputLabel = document.querySelector('#inputLabel');
const inputImagen = document.querySelector('#inputImagen');
const inputCheckbox = document.querySelector('#inputCheckbox');
const inputRadio = document.querySelector('#inputRadio');
const inputSubmit = document.querySelector('#inputSubmit');
const br = document.createElement('br');

inputTexto.addEventListener('click', () => {
    let newInput = document.createElement('input');
    let texto = prompt('Introduce el nombre de la etiqueta name');
    newInput.type='text';
    newInput.setAttribute('name', texto);
    form.appendChild(newInput);
});
inputPass.addEventListener('click', () => {
    let newInput = document.createElement('input');
    let texto = prompt('Introduce el nombre de la etiqueta name');
    newInput.type='password';
    newInput.setAttribute('name', texto);
    form.appendChild(newInput);
});
inputTextArea.addEventListener('click', () => {
    let newInput = document.createElement('textarea');
    let texto = prompt('Introduce el nombre de la etiqueta name');
    newInput.setAttribute('rows', '5');
    newInput.setAttribute('cols', '40');
    newInput.setAttribute('name', texto);    
    form.appendChild(newInput);
});
inputLabel.addEventListener('click', () => {
    let newInput = document.createElement('label');
    let texto = prompt('¿A que input va referido?');
    newInput.setAttribute('for', texto); 
    newInput.appendChild(document.createTextNode('label'));
    form.appendChild(newInput);
});

inputImagen.addEventListener('click', () => {
    let newInput = document.createElement('img');
    let src = prompt('Indique la ruta de la imagen');
    newInput.setAttribute('src', src);
    form.appendChild(newInput);
});
inputCheckbox.addEventListener('click', () => {
    let newInput = document.createElement('input');
    let value = prompt('Indique la etiqueta value');
    let name = prompt('Indique el nombre del check');
    newInput.type='checkbox';
    newInput.setAttribute('value', value);
    newInput.appendChild(document.createTextNode(name));
    form.appendChild(newInput);
});
inputRadio.addEventListener('click', () => {
    let newInput = document.createElement('input');
    let name = prompt('Introduce el nombre de la etiqueta name');
    let value = prompt('Introduce el nombre de la etiqueta value')
    newInput.type='radio';
    newInput.setAttribute('name', name);
    newInput.setAttribute('value', value);
    form.appendChild(newInput);
    newInput.appendChild(document.createTextNode('name'));
});
inputSubmit.addEventListener('click', () => {
    let newInput = document.createElement('button');
    let name = prompt('Indique la etiqueta name');
    let value = prompt('Indique la etiqueta value');
    newInput.setAttribute('name', name); 
    newInput.setAttribute('value', value);
    newInput.appendChild(document.createTextNode('Boton')); 
    form.appendChild(newInput);
});
