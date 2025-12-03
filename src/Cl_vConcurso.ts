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
        let htmlTabla = "";

        const aspirantes = this.controlador.aspirantes;

        aspirantes.forEach((asp: any) => {
            htmlTabla += `
            <tr>
                <td>${asp.nombre}</td>
                <td>${asp.cedula}</td>
                <td>${asp.notaFormato5().toFixed(2)}</td>
                <td>${asp.notaFormato51().toFixed(2)}</td>
                <td>${asp.notaFormato52().toFixed(2)}</td>
                <td>${asp.notaFormato53().toFixed(2)}</td>
                <td>
                    <button class="btF5" data-ced="${asp.cedula}" title="F5 Postgrado" style="padding:4px;">F5</button>
                    <button class="btF51" data-ced="${asp.cedula}" title="F5.1 Pregrado" style="padding:4px;">F5.1</button>
                    <button class="btF52" data-ced="${asp.cedula}" title="F5.2 Prod. Científica" style="padding:4px;">F5.2</button>
                    <button class="btF53" data-ced="${asp.cedula}" title="F5.3 Méritos" style="padding:4px;">F5.3</button>
                    <button class="btDel" data-ced="${asp.cedula}" title="Eliminar" style="color:red; background:none; border:1px solid red; padding:4px;">X</button>
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

        this.divAspirantes.querySelectorAll(".btF52").forEach((btn) => {
            (btn as HTMLElement).onclick = () => {
                const ced = (btn as HTMLElement).dataset.ced;
                if(ced) this.controlador?.editarF52(ced);
            };
        });

        // Nuevos eventos F5.3
        this.divAspirantes.querySelectorAll(".btF53").forEach((btn) => {
            (btn as HTMLElement).onclick = () => {
                const ced = (btn as HTMLElement).dataset.ced;
                if(ced) this.controlador?.editarF53(ced);
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