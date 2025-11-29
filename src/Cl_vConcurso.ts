import Cl_vGeneral from "./tools/Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";
import { iAspirante } from "./Cl_mAspirante.js";

export default class Cl_vConcurso extends Cl_vGeneral {
    private divAspirantes: HTMLElement; 
    private btAgregar: HTMLButtonElement;
    

    constructor() {
        super({ formName: "aspirantes" });
        this.divAspirantes = this.crearHTMLElement("divAspirantes"); 
        this.btAgregar = this.crearHTMLButtonElement("btAgg", {
            onclick: () => this.controlador?.mostrarVista("form")
        });
    }

    public refrescarTabla() {
        if (!this.controlador) return;
        this.divAspirantes.innerHTML = "";
        let aspirantes = this.controlador.aspirantes;
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
        aspirantes.forEach((asp, index) => {
            let btEditar = document.getElementById(`aspirantes_btEditar_${index}`);
            let btEliminar = document.getElementById(`aspirantes_btEliminar_${index}`);

            if (btEditar) btEditar.onclick = () => this.controlador?.editarAspirante(asp.cedula);
            if (btEliminar) btEliminar.onclick = () => this.controlador?.eliminarAspirante(asp.cedula);
        });
    }

    public mostrar() {
        this.vista!.hidden = false;
        this.refrescarTabla(); 
    }
    
    public ocultar() {
        this.vista!.hidden = true;
    }
}