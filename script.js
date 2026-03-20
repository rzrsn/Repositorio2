let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function renderizarTareas() {
    const lista = document.getElementById("taskList");
    lista.innerHTML = "";

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");

        li.textContent = tarea.texto;
        if (tarea.completada) {
            li.style.textDecoration = "line-through";
        }

        li.onclick = () => alternarTarea(index);

        const boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.onclick = (e) => {
            e.stopPropagation();
            eliminarTarea(index);
        };

        li.appendChild(boton);
        lista.appendChild(li);
    });

    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function agregarTarea() {
    const input = document.getElementById("taskInput");
    if (!input.value) return;

    tareas.push({ texto: input.value, completada: false });
    input.value = "";
    renderizarTareas();
}

function alternarTarea(index) {
    tareas[index].completada = !tareas[index].completada;
    renderizarTareas();
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
}

renderizarTareas();