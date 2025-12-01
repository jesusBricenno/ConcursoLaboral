import Cl_vGeneral from "./tools/Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vConcurso extends Cl_vGeneral {
    private divAspirantes: HTMLElement; 
    private btAgregar: HTMLButtonElement;

    constructor() {
        super({ formName: "aspirantes" });
        this.divAspirantes = this.crearHTMLElement("divAspirantes"); 
        this.btAgregar = this.crearHTMLButtonElement("btAgg", {
            onclick: () => this.controlador?.mostrarVista("registro")
        });
    }

    public refrescarTabla() {
        if (!this.controlador) return;
        
        this.divAspirantes.innerHTML = "";
        
        const aspirantes = this.controlador.aspirantes;
        
        let htmlTabla = "";
        
        aspirantes.forEach((asp) => {
            htmlTabla += `
            <tr>
                <td>${asp.nombre}</td>
                <td>${asp.cedula}</td>
                <td>${asp.notaFormato5().toFixed(2)} pts</td>
                <td>${asp.notaFormato51().toFixed(2)} pts</td>
                <td>
                    <button class="btF5" data-ced="${asp.cedula}" style="cursor:pointer; background:#2563eb; color:white; border:none; padding:5px 10px; border-radius:5px;">F5</button>
                    <button class="btF51" data-ced="${asp.cedula}" style="cursor:pointer; background:#4f46e5; color:white; border:none; padding:5px 10px; border-radius:5px;">F5.1</button>
                    <button class="btDel" data-ced="${asp.cedula}" style="cursor:pointer; background:transparent; color:red; border:1px solid red; padding:5px 10px; border-radius:5px;">X</button>
                </td>
            </tr>`;
        });

        this.divAspirantes.innerHTML = htmlTabla;

        this.asignarEventos();
    }

    private asignarEventos() {
        // Botones F5
        this.divAspirantes.querySelectorAll(".btF5").forEach((btn) => {
            (btn as HTMLElement).onclick = () => {
                const ced = (btn as HTMLElement).dataset.ced;
                if(ced) this.controlador?.editarF5(ced);
            };
        });

        // Botones F5.1
        this.divAspirantes.querySelectorAll(".btF51").forEach((btn) => {
            (btn as HTMLElement).onclick = () => {
                const ced = (btn as HTMLElement).dataset.ced;
                if(ced) this.controlador?.editarF51(ced);
            };
        });

        // Botones Eliminar
        this.divAspirantes.querySelectorAll(".btDel").forEach((btn) => {
            (btn as HTMLElement).onclick = () => {
                const ced = (btn as HTMLElement).dataset.ced;
                if(ced) this.controlador?.eliminarAspirante(ced);
            };
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