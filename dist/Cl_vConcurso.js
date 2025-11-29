import Cl_vGeneral from "./tools/Cl_vGeneral.js";
export default class Cl_vConcurso extends Cl_vGeneral {
    divAspirantes; // Es el tbody
    btAgregar;
    constructor() {
        super({ formName: "aspirantes" });
        // Enlazamos con el tbody del HTML restaurado
        this.divAspirantes = this.crearHTMLElement("divAspirantes");
        // Enlazamos el botón +
        this.btAgregar = this.crearHTMLButtonElement("btAgg", {
            onclick: () => this.controlador?.mostrarVista("form")
        });
    }
    refrescarTabla() {
        if (!this.controlador)
            return;
        // Limpiamos el tbody
        this.divAspirantes.innerHTML = "";
        // Obtenemos los datos del controlador
        let aspirantes = this.controlador.aspirantes;
        // Generamos las filas
        aspirantes.forEach((asp, index) => {
            let fila = `
            <tr>
                <td>${asp.nombre}</td>
                <td>${asp.cedula}</td>
                <td>${asp.calcTotalF5()}</td>
                <td>
                    <button id="aspirantes_btEditar_${index}" title="Editar F5">F5</button>
                    <button id="aspirantes_btEliminar_${index}" title="Eliminar" style="color:red;">X</button>
                </td>
            </tr>`;
            this.divAspirantes.innerHTML += fila;
        });
        // Asignamos eventos a los botones generados
        aspirantes.forEach((asp, index) => {
            let btEditar = document.getElementById(`aspirantes_btEditar_${index}`);
            let btEliminar = document.getElementById(`aspirantes_btEliminar_${index}`);
            if (btEditar)
                btEditar.onclick = () => this.controlador?.editarAspirante(asp.cedula);
            if (btEliminar)
                btEliminar.onclick = () => this.controlador?.eliminarAspirante(asp.cedula);
        });
    }
    mostrar() {
        this.vista.hidden = false;
        this.refrescarTabla(); // Actualizamos la tabla al mostrar la vista
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
