// Botones
let botonCorazon = document.querySelector("#botonCorazon");
let botonComentario = document.querySelector("#botonComentario");
let botonCompartir = document.querySelector("#botonCompartir");
let botonGuardar = document.querySelector("#botonGuardar");
let botones = [botonCorazon, botonComentario, botonCompartir, botonGuardar];

// Acciones
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        if (boton.classList.contains("fa-solid")) boton.classList.replace("fa-solid", "fa-regular");
        else boton.classList.replace("fa-regular", "fa-solid");
    });
});